+++
title = "Kernel compiling"
date = "2012-07-23"
tags = ["linux","english","tech"]
aliases=[
  "post/kernel-compiling",
  "2012/07/23/kernel-compiling.html"
]
+++

Since I bought an Acer notebook to use Linux again (I sold my mac, I
have a post about it but in portuguese) I started to compile my own
kernel.

The reasons for the decision:

I have a hardware that works better with the newer kernels.
I really want to understand the linux kernel better.
As Judas Priest sings on Painkiller song: “I’m living on the eeeeeedge”. LOL

### How to proceed

There are some steps to follow when compiling a new kernel for your
Linux box:

Clone the kernel repository with git, I made it using the Github url:

    git clone git://github.com/torvalds/linux.git

Copy your .config file to the linux folder. If your distro have the
"Enable config.gz" flag enabled (most distros have it) you can use the
generated config as a base for your new compiled version:

    zcat /proc/config.gz > linux/.config

Now that you have a functional config file (it was running on the
stock kernel right? ￼ ), just cd do the kernel folder and run make:

    cd linux
    make

This process take about 40 minutes to finish on my i7, with 4GB of RAM
and SSD, running with -j4, to use all the 4 cores. Obviously the time
to finish will depend on what it will need to compile (defined on the
.config file) and the processing power of your machine. You can
improve this compiling time but I’ll talk more about it later.

You can use the compiling time to prepare the mkinitcpio file for the
installation. On my archlinux box I have created a file named
git.preset on /etc/mkinitcpio.d/ directory with the following content:

    ALL_config="/etc/mkinitcpio.conf"
    ALL_kver="/boot/vmlinuz-git"

    PRESETS=('default')

    default_image="/boot/initramfs-git.img"

After that you’ll need to change your bootloader conf a bit. I’m using
grub (not grub2 yet) which makes the setup really easy! Just change
your /boot/grub/menu.lst and add something like this:

    title  Git Kernel
    root   (hd0,0)
    kernel /vmlinuz-git root=/dev/sda2 ro quiet acpi_backlight=vendor init=/bin/systemd
    initrd /initramfs-git.img

**PS**: I’m using systemd to init and I need to define the
acpi_backlight to make my hardware to work properly, but probably
you’ll not need these parameters. If you’re using grub, you may find
useful to copy the other configuration of the same file and change
what needs to me changed (title and initrd).

When the compilation ends and your mkinitcpio file is ready you can
continue the process by generating the modules for your kernel:

    sudo make modules_install

This command will create a folder with the compiled modules on
/lib/modules. After that, just copy the generated image file to the
boot directory:

    sudo cp arch/x86_64/boot/bzImage /boot/vmlinuz-git

And create the initial randisk environment for your preset using
mkinitcpio:

    sudo mkinitcpio -p git

DONE! Your kernel is compiled and ready to boot! Just restart you
computer and choose the new item on the boot menu! ￼

### .config tunning

So, your new kernel is running perfectly (I hope so…It’s a release
candidate, we never know what may happen :P), but you’ll want to go
deeply into the kernel options and improve the compiling time and the
disk space for the kernel, so lets tune the .config file to be
specific to our hardware!

**WARNING**: It will take a lot of time to get a good configuration
and you’ll not receive so much benefit from it, but it will be
fun. I promise.

So, let’s get started! Go to the linux kernel directory and run:

    make menuconfig

The fun part starts here because you’ll be seeing an awesome curses
screen with a lot of menus and submenus about a lot of things that you
never heard about, but no despair! Some things you already know, like
your processor for example! If you have an Intel processor is safe to
remove all the AMD related configurations from the .config file and
probably add some intel ones as built in (and vice versa).

Some things you need to have in mind when starting to buil your own
kernel configuration is that you really need to know what hardware
you’re running on your machine. This is really interesting because we
don’t care so much about some pieces of hardware nowadays, and you’ll
need to care about it if you want to build your own configuration
because you can’t remove these modules.

A good way to start is boot with the stock configuration, run lsmod
and backup this into a file. These modules should not be removed
because they are making your machine to work as it is working now, but
some of them should be marked as builtin into the kernel. I saw some
recommendations to not include the WIFI driver as builtin to avoid
some pre-load problems, so I’m keeping my WIFI driver as a module.

Some cool (but not so useful) parts can be found on “General Setup”:

Default hostname – This configuration will be specific, so name your
machine!  Local version – Append an string to the kernel release I
can’t help you so much on this journey because each hardware has its
own dependencies and corner cases, so you will need to compile and see
how it’s going to fit your needs.

### Some tips

If you’re planning to customize your configuration file I really
recommend to use a versioning control (like git) to keep tracking of
your file because you’ll need to revert some changes sometimes
(believe me) and git will help you to make this process less painful.

### Conclusion

We are weird people (me for writting this and you to be interesting in
doing the same thing) but this process will help you to understand
some interesting things about your operating system and feel that
there is no magic happening there, this is just code that you can
change if you want. I was planning to end this article with “there is
no advantage on making this at all” but after remembering all the
process I think that I learned a lot, so it is worth it.



