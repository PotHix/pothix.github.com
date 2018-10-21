---
title: "Flashing a different firmware for Atreus keyboard"
date: 2018-10-22
draft: true
---

I just bought an Atreus keyboard and I'm now configuring my own firmware.

To do that, I'm using `qmk_firmware`.

I'm adding a new file as a layout (link here) and I have to change
`tmk_core/common/avr/bootloader.c` to be able to compile it:

```
-uint32_t reset_key  __attribute__ ((section (".noinit")));
+uint32_t reset_key __attribute__ ((section (".noinit,\"aw\",@nobits;")));
```

After that, I just had to get the keyboard to the reset mode via `fn + ESC` (to
change the layout) and then pressed the RESET button. I had to refer to the map
for the current layot to find the keys but after that, it went smoothly.

To flash the firmware, I used the `avrdude` command:

```
sudo avrdude -p atmega32u4 -c avr109 -U flash:w:atreus_pothix.hex -P /dev/ttyACM0
```
