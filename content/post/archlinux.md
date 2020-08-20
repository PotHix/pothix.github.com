+++
title = "My Archlinux setup"
date = "2017-08-05"
tags = ["english"," tech"]
categories = "tech"
aliases=[
  "post/my-archlinux-setup"
]
+++

I was playing with Archlinux in the last 3 or 4 years and last year I decided to
reboot my configuration files and start using Xfce.

Talking to [Fabio Akita](https://twitter.com/AkitaOnRails) about my Archlinux
tunning, I heard that I should be posting about that. That's true, so I decided
to start writing it. I wrote in March and it was in draft form since then, so it's time
to release it. :)

BTW, Fabio
[already did that](http://www.akitaonrails.com/2017/01/10/arch-linux-best-distro-ever),
but I will post about my setup anyway.

### Desktop Environment

I was using Gnome before deciding to reboot my workstation. I
met [@marcosnils](https://twitter.com/marcosnils) at Gophercon last year and we
had some chatting about window managers. I'm a big fan of tiling and was
planning to go to a tiling window manager again. The problem with tiling window
managers is the amount of configuration you have to create in order to have your
laptop in a fully functional mode. I was looking for something between a window
manager and a desktop environment, something composable with some support for
tiling. And then, he shows me his laptop with Xfce running.

That doesn't look like the Xfce I know. It was pretty smooth and with many
features I did not know. Then, I decided to give Xfce a try.

At first, it was horrible but functional. I could compose its packages to only
install what I wanted and almost everything was working out of the box. That's
what I was looking for. So it's time for themes, fonts, bars and so on, just to
make it beautiful.

Here is my results:

[![Xfce screenshot](/images/posts/archlinux-setup/archlinux_setup_xfce.png "Xfce screenshot")](/images/posts/archlinux-setup/archlinux_setup_xfce.png "")

It looks good to me. :)

Xfce has shortcuts to do what I like to do with tiling: vertical and horizontal
splits. Here is an example of me writing this blog post on a split screen on my
ultrawide monitor:

[![Xfce tiling example](/images/posts/archlinux-setup/xfce_split.png "Xfce tiling example")](/images/posts/archlinux-setup/xfce_split.png "")

Keyboard shortcuts for different types of screenshots were really useful as
well. I did not know this feature, but it was probably my fault. :P

### Window manager

I was trying different window managers at the time, so I decided to
give [i3](https://i3wm.org/) a try. It looks very good if you like (or have the
time) to configure and tune it.

As I was trying different things, why not to try Wayland as well? So I
installed [sway](http://swaywm.org/) instead of i3 to use it with Wayland. It
was an interesting test. My configuration files work with i3 and sway currently.

I'm usually using Xfce but sometimes I log in with sway to take advantage of the
tiling in a different way.

### Managing configuration files

It's possible to use configuration managers for this task (like
[Salt](https://saltstack.com/),
[Ansible](https://www.ansible.com/),
[Chef solo](https://docs.chef.io/chef_solo.html) and so on) but I preferred to
use a simpler way.

All configurations to recreate this environment is available in
my [dotfiles repository](https://github.com/PotHix/pothix-dotfiles). It uses a
project called [dot-install](https://github.com/dgvncsz0f/dot-install) created
by [Diego Souza](https://github.com/dgvncsz0f). It is a simple bash script that
copies the files to the correct places, BOOM, done. I like it.

I can create bundles to apply the same configuration files to more than one
computer. Some files have to change because of network interface names and so
on, but the structure is the same.

### Kernel

I'm trying different kernels. The first one (and easier)
was [linux-zen](https://github.com/zen-kernel/zen-kernel/issues/30). It is
available in the community repository of Archlinux. I really recommend it in
case you don't need (or want) to use Docker with support to `overlayfs`.

I was also compiling the `rc` releases of the Linux kernel whenever possible, so
I could try to contribute in case I found something weird, but as it takes a lot
of my time, I decided to give it a break for some time.

But the best one until now is
the [linux-ck](https://wiki.archlinux.org/index.php/linux-ck). It is the Linux
kernel with the patches
from [Con Kolivas](http://users.on.net/~ckolivas/kernel/). There is a different
scheduler running and some other improvements. It was made with desktop
performance in mind (just like `linux-zen`, that uses the same scheduler from
`linux-ck`).

`linux-ck` has its own repo, in case you don't want to compile it yourself from
AUR. Just add this line to your pacman.conf:

    [repo-ck]
    Server = http://repo-ck.com/$arch

Just be aware that the link quality is awful. You have to retry it many times to
get the file downloaded. =/

### Tunning

There are some good tips to apply on your Archlinux, but I will not just copy
& paste it here. Please
[refer to Fabio post](http://www.akitaonrails.com/2017/01/10/arch-linux-best-distro-ever),
since I discussed with him about it and we applied almost the same procedure.

The I/O related tunning are the most recommended.

### Package manager

There are some addition package managers available for Archlinux, so you can
deal with AUR easily. Fabio uses [pacaur](https://github.com/rmarquis/pacaur)
but I prefer to use [aura-bin](https://aur.archlinux.org/packages/aura-bin/).

I know guys who prefer to use [yaourt](https://archlinux.fr/yaourt-en) but I
don't think it has good defaults.

### Installing it from scratch

I'm that kind of Linux user who likes to install new distributions or rebuild
the system from time to time, so I created my own ways to do it faster.

I decided to not automate the whole Archlinux installation because it would take
more cost than bringing benefit. The partition of the disks and initial installation I do
manually and then I use my own scripts and configuration files to get the same
environment I had with just a few commands.

The first step is to install all packages needed to my day-to-day tasks. For
this matter I have
[this script](https://github.com/PotHix/pothix-dotfiles/blob/master/modules/so/archlinux/packages/gondor/dist/.config/packages). It executes many commands to install all packages I need.

I run
[this script](https://github.com/PotHix/pothix-dotfiles/blob/master/modules/terminal/shell/dist/bin/update-and)
every time I decide to reboot my computer. So, instead of running `systemctl reboot` I
run `update-and reboot` and it reboots with the new packages installed.

### Conclusion

Since I started used Linux I've gone through Kurumin, Slackware, Ubuntu, and
Archlinux. I formatted my laptop many times and kept using Archlinux for the
past years, it's the best Linux distribution for my use case.

If you're looking for the best cost/benefit for customization and effort doing
it, I really recommend **Archlinux** + **Xfce**. You will miss some new technologies on
the WM side (Wayland...) but it worth the trade-off.
