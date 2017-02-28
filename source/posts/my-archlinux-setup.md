---
title: "My current Archlinux setup"
date: "2017-03-13"
tags: "english, tech"
category: "tech"
---

**TL;DR**: A little bit about my Archlinux setup

I was playing with Archlinux in the last 3 or 4 years and last year I decided to
reboot my configuration files and start using XFCE.

Talking to [Fabio Akita](https://twitter.com/AkitaOnRails) about my Archlinux
tunning, I heard that I should be posting about that. That's true. So, this is
the first post about that.

I'm late because Fabio already did that, but I will post about my setup anyway.

### Desktop Environment

I was using Gnome before deciding to reboot my workstation. I
met [@marcosnils](https://twitter.com/marcosnils) at Gophercon last year we had
some chatting about window managers.  I'm a big fan of tiling and was planning
to go to a tiling window manager again. The problem with tiling window manager
is the amount of configuration you have to create in order to have your laptop
in a fully functional mode. I was looking for something between a window manager
and a desktop environment, something composable with some support for
tiling. And then, he shows me his laptop with XFCE running.

That doesn't looks like the XFCE that I know. It was pretty smooth and with many
features that I did not know. Then, I decided to give XFCE a try.

At first, it was horrible but functional. I could compose it and install only
what I wanted and almost everything was working out of the box. That's wat I was
looking for.  So it's time for themes, fonts, bars and so on, just to make it
beautiful. The result is the following:

![XFCE screenshot]()

It looks good to me. :)

XFCE has some shortcuts to do what I like to do with tiling: vertical and
horizontal splits. That's what I needed.

Keyboard shortcuts for different types of screenshots were really useful as
well. I did not know this feature, but it was probably my fault. :P

### Window manager

I was trying different window managers at the time, so I decided to give i3 a
try. It looks very good if you like (or have the time) to configure and tune it.

As I was trying different things, why not to try Wayland as well? So I installed
sway instead of i3 to use it with wayland. It was an interesting test. My
configuration files work with i3 and sway currently.

I'm usually using XFCE but sometimes I log in with sway to take advantage of the
tiling in a different way.

### Managing configuration files

It's possible to use configuration managers for this task (like Salt, Ansible,
Chef solo and so on) but I preferred to use a simpler way.

All configurations to recreate this environment is available in
my [dotfiles repositori](https://github.com/PotHix/pothix-dotfiles). It uses a
project called [dot-install](https://github.com/dgvncsz0f/dot-install)
by [Diego Souza](https://github.com/dgvncsz0f). It is a simple bash script that
copy the files to the correct places, I like it.

The same configuration files apply to my personal and company laptops. Some
files have to change because of the network interface names and so on, but the
structure is the same.

### Kernel

I'm trying different kernels. The first one (and easier) was linux-xen. It is
available in the community repository of Archlinux. I really recommend it in
case you don't want to use ???? (not my case).

I'm compiling the rc releases of the Linux kernel whenever possible, so I can
try to contribute in case I found something weird. 

But the best one until now is the linux-ck. It is the Linux kernel with the
patches from Con Koliva. There is a different scheduler running and some other
improvements. It was made thinking on desktop performance (just like linux-xen,
that uses the same scheduler from linux-ck).

linux-ck has its own repo, in case you don't want to compile it yourself from
AUR. Just add this line to your pacman.conf:

    [repo-ck]
    Server = http://repo-ck.com/$arch

Just be aware that the link quality is awful. You have to try many times to get
the file downloaded. =/

### Tunning

There are some good tunning to apply on your Archlinux, but I will not just copy
& paste it here. Please refer to Fabio post and apply it. The I/O related
tunning are the most recommended.

### Package manager

There are some addition package managers available for Archlinux, so you can
deal with AUR easily. I prefer to use aura
