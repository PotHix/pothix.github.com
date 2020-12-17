+++
title = "Chrome: Invalid HTTPS in development"
date = 2020-12-17
tags = [
    "english",
    "tech",
]
+++

It's not the first time I had to use HTTPS for local development and had to do
the whole setup of self-signed certificates. It's a painful process that doesn't
have a good ROI for the developer.

One day, after being sick of doing this every time, I decided to do some
research for an easy way to workaround this. That was when I found the
`thisisunsafe` hack.

If you're using Chrome (or `chromium`) you can type `thisisunsafe` when you
access your development app complaining about HTTPS certificates. Chrome will
then bypass the HTTPS checks and just let you use it. 🎉

You may be asking yourself: "Where do I type this? The address bar?". It may
look weird, but you type it anywhere in the page. You don't even see what you
typed. It's not user-friendly on purpose. :)

This was life-changer for me. No more self-signed certificates.

_PS: keep in mind that this trick **must only be used for your development
environment**! Do not use it for real sites on the internet._

I wish I had something like that for Firefox, but unfortunately I couldn't find
an alternative that is quick and dirty like that. Meanwhile, I will just use
`chromium` when developing an app that needs this.
