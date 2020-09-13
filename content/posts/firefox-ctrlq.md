+++
title = "Firefox Quantum ctrl-q"
date = "2017-12-05"
tags = ["tips","english"]
aliases=[
  "post/firefox-quantum-ctrl-q"
]
+++

This will be a quick post to help people that are doing the same
search as I was doing some minutes ago: "firefox disable ctrl+q".

I'm using [Firefox Quantum](https://www.mozilla.org/firefox/new/) for
some weeks now (will probably post about it in the future) and the
ctrl+q "feature" really annoys me.

It's not the first time that I hit ctrl+q by accident just to see the
entire browser and tabs being closed without warning. I was looking on
Google and could not find anything on how to disable it. There were
some extensions but none of them work on Firefox Quantum, so I decided
to dig into the internal configurations.

Looks like there is a configuration called `browser.showQuitWarning`
that helps with this problem. It does not disable the ctrl+q but shows
a warning and you can just cancel it in case it was an accident.

It's easy to enable it:

* Type `about:config` in the address bar
* It will say that it's a place for advanced users, so you have to `accept the risk!`
* search for `browser.showQuitWarning`
* click on it and change it to `true`

Firefox Quantum is really better than Chrome nowadays, hope it helps
with the Quit problem.
