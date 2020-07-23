---
title: "Assembling an Iris Rev4"
date: 2020-07-22T23:48:21-03:00
draft: true
---

It's been a while since I'm following a keyboard that would be great to take
with me when I'm not working from home for some days, and I finally found the
Iris keyboard that seems to be exactly what I'm looking for.

## The need

I currently have a Kinesis Advantage at home. The keyboard is great, probably
the best keyboard I used so far, but it's far from what we can call portable
😅. I needed a keyboard I could take with me when I wanted, so I started a
quest to find it.

+ I bought a typematrix keyboard but it was not good enough.
+ I had a HHKB Lite but I wanted a mechanical keyboard (it uses rubber dome).
+ I bought a Pok3r keyboard but it was too heavy.
+ I bought an Atreus keyboard but found that a 40% layout was too small for me

Then I found the Iris keyboard, which seems to be the perfect size between the
Atreus and Kinesis keyboards. The problem is that it's a DIY keyboard and I had
zero experience with anything electronic.

Talking to some friends I found that the Iris is the easy mode of DIY
keyboards, so I decided to give it a try.

## Pieces and prices

I had to buy the following pieces to be able to do it:

+ 1 x [DSA Keycaps](https://www.amazon.com/gp/product/B07S18VCDN/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1): $23.50
+ 5 x [Cherry MX Clear Keyswitch (10 pack)](https://www.amazon.com/gp/product/B01N45BWC3/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1): $50
+ 1 x [Iris Keyboard - Case/Plates](https://keeb.io/products/iris-keyboard-case-plates?variant=7472218210334): $27.99
+ 1 x [Iris Keyboard - PCBs for Split Ergonomic Keyboard](https://keeb.io/products/iris-keyboard-split-ergonomic-keyboard?variant=29480467267678): $59.99
+ 1 x [TRRS Cable - Black Coiled](https://keeb.io/account/orders/25478d0d3478d5aa26c647de49310efd): $7.98
+ Shipping costs: $6.10 (keeb.io) + $30 to ship it to Brazil (the final value is R$125 in my local currency)
+ 1 Multimeter: R$37,00
+ 1 Soldering kit (soldering iron, desoldering pump, soldering iron stand, tin wire tube): R$88,00
+ Acrylic Middle layers: $30.00 (bought after the keyboard was assembled as it's optional)

For now, it's $234.60 + R$125,00 (~30 USD). I believe I spend around **280 USD** to build the keyboard.

## Assembling

![A laptop, PCB, soldering iron, keycaps, and switches on the table](/images/posts/iris-rev4/initial.jpg "Ready to start")

Again, I would like to mention that I had 0 experience with anything electronic, so it was a amazing how noob I was. :)

![Soldering on a switch pin in the PCB](/images/posts/iris-rev4/first-soldering.jpg "My first soldering, not very good")

This was my first soldering. Not something I'm proud of but something I laugh about today.

A friend of mine recommended me to use a fan to avoid inhaling the melted tin,
so I was doing that. It just took me a while to realize that my fan was
actually cooling the tin and the soldering iron making the whole process harder
to do. If this is your case, be careful with your fan.

[To Be Continued]

_PS: [Here](https://photos.google.com/share/AF1QipOEfqRQ-V2aVWYO1ENs4xrMADgwfMQM36D0hgdGdv1kW8T04pNHui4JX3UffsHO9A?key=WnJ1YXhNTERaTnhNNFVDQnh2enA3ekd6ZjlTZVN3) is the album with all pictures I took while assembling the keyboard._ 😉

## Customizing the firmware

The first thing to do is to clone the [qmk firmware
repository](https://github.com/qmk/qmk_firmware/). I suggest forking it and
cloning your own fork since you will probably change it. 😉

After cloning the repository, you have to install the software needed to
compile and flash the firmware. There are two (maybe more) ways to do that:

1. You can use docker via `util/docker_build.sh` script. It would be something
   like: `util/docker_build.sh keebio/iris/rev4:default:flash`
2. You can install all the tools locally via `util/qmk_install.sh` and flash
   with `make keebio/iris/rev4:default:flash`

I would love to use the option 1 but for some reason docker cannot find the
keyboard via USB and I had to install the tooling locally. I suggest you to
start trying docker and if it didn't work, go for option 2.

### Compiling your own keymap

I [created my own keymap inside my
fork](https://github.com/PotHix/qmk_firmware/tree/master/keyboards/keebio/iris/keymaps/pothix)
so it would be easy to keep the main code updated. So I have to use the following command to compile it:

```
make keebio/iris/rev4:pothix
```

If everything goes right, I just can just flash it.

Connect the keyboard to the USB port and hit the RESET button. It may be via
RESET button at the back of the keyboard of actually hitting the RESET key on
the "LOWER" layer (check the default keymap for more info).

After that, run the following command:

```
sudo make keebio/iris/rev4:pothix:flash
```

I'm not able to flash it without sudo, so keep it in mind when flashing.


### Optimizing

Depending on what you're using on your keyboard, you may exceed the maximum
size for the binary. If this is the case for you (as it was for me :P), you can
start disabling features you're not using.

[This
article](https://thomasbaart.nl/2018/12/01/reducing-firmware-size-in-qmk/) was
very helpful for me to understand what can be done. If you want some examples,
check my
[rules.mk](https://github.com/PotHix/qmk_firmware/blob/master/keyboards/keebio/iris/keymaps/pothix/rules.mk)
and
[config.h](https://github.com/PotHix/qmk_firmware/blob/master/keyboards/keebio/iris/keymaps/pothix/config.h).


## Conclusion

It's not cheaper to build your own keyboard as one would expect, but it's
definitely fun if you want to get your hands dirty into soldering to build
something custom for yourself. I learned a lot in the process and I hope to be
able to maybe build another keyboard in the future.

Happy keyboard building! ⌨
