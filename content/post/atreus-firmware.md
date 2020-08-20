---
title: "Flashing a different firmware for the Atreus keyboard"
date: 2018-10-22
tags: ["english", "keyboards"]
aliases: [
  "post/compiling-atreus-firmware"
]
---

I just bought an Atreus keyboard and I'm now configuring my own firmware.

To do that, I'm using the `qmk_firmware`.

I'm adding a new file as a layout (link here) and I have to change
`tmk_core/common/avr/bootloader.c` to be able to compile it:

```
-uint32_t reset_key  __attribute__ ((section (".noinit")));
+uint32_t reset_key __attribute__ ((section (".noinit,\"aw\",@nobits;")));
```

After that, I just had to get the keyboard to the reset mode via `fn + ESC` (to
change the layout) and then pressed the RESET button. I had to refer to the map
for the current layot to find the keys but after that, it went smoothly.

To compile the firmware you want, just use `make` and specify the keyboard and layout:

```
make keyboard=atreus keymap=pothix
```

In this case, I have a keymap called "pothix" at `qmk_firmware/keyboards/atreus/keymaps`.
To flash the firmware, I used the `avrdude` command:

```
sudo avrdude -p atmega32u4 -c avr109 -U flash:w:atreus_pothix.hex -P /dev/ttyACM0
```

The result will be something like:

```
Connecting to programmer: .
Found programmer: Id = "CATERIN"; type = S
    Software Version = 1.0; No Hardware Version given.
Programmer supports auto addr increment.
Programmer supports buffered memory access with buffersize=128 bytes.

Programmer supports the following devices:
    Device code: 0x44

avrdude: AVR device initialized and ready to accept instructions

Reading | ################################################## | 100% 0.00s

avrdude: Device signature = 0x1e9587 (probably m32u4)
avrdude: NOTE: "flash" memory has been specified, an erase cycle will be performed
         To disable this feature, specify the -D option.
avrdude: erasing chip
avrdude: reading input file "atreus_pothix.hex"
avrdude: input file atreus_pothix.hex auto detected as Intel Hex
avrdude: writing flash (22090 bytes):

Writing | ################################################## | 100% 1.69s

avrdude: 22090 bytes of flash written
avrdude: verifying flash memory against atreus_pothix.hex:
avrdude: load data flash data from input file atreus_pothix.hex:
avrdude: input file atreus_pothix.hex auto detected as Intel Hex
avrdude: input file atreus_pothix.hex contains 22090 bytes
avrdude: reading on-chip flash data:

Reading | ################################################## | 100% 0.20s

avrdude: verifying ...
avrdude: 22090 bytes of flash verified

avrdude: safemode: Fuses OK (E:C8, H:D0, L:FF)

avrdude done.  Thank you.
```

Hope it's helpful to someone else. :)
