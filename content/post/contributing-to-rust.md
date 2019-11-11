---
title: "Contributing to Rust"
date: 2019-11-10
draft: true
---

I've been involved with the Rust community for a while now. I'm one of
the main organizers of the [Rust meetup in São
Paulo](https://www.meetup.com/Rust-Sao-Paulo-Meetup/) and also the
[Rust conference in Latin America (Rust
LATAM)](https://rustlatam.org/) for more than one year now, but did
not contribute to Rust source code yet.

This post will show the step by step I did to submit my first pull
request to the Rust compiler.

## The dream

I don't know about you, but I always wanted to contribute to core things. I
still want to contribute to the Linux kernel some day and it's not the first
time I try to contribute to a programming language.

I read the kernel source code multiple times and also read their contribution
guides, but it's not simple to contribute. It's hard to find issues you can
understand, reproduce, and compile. I may not be true for people out there, but
it was definitely my experience.

The Ruby programming language was my second attempt. I was working with Ruby
for many years, so I decided to read its source. I didn't find the code to
easy to follow and the issues are not easy to find and reproduce. For Ruby it's
even worse, since some things are still in Japanese. The language community is
not very accessible to contributions as the rest of the community.

## The Rust scenario

Different from the Linux kernel and the Ruby programming language, the Rust
programming language is implemented in Rust itself (instead of C), which makes
things even better. :)

The community and the contribution guides for are both **awesome**. You can
feel the huge amount of work the community puts on documenting stuff so people
can find it easy to fix small things or even suggest and implement big
features.

The whole process of how the community is organized is very open and encourages
everyone to take part on it. This is not something I found on my previous
attempts of contributions.

## How it started

At [Doist](https://doist.com), we (speaking about my team here) try to
encourage people to learn new things every week. You should reserve some time
to try new things and bring some knowledge back to the team. If you don't
reserve work time for that, you will probably overwork or never have time to
study.

Every week we're naming someone to describe what new this person learned in the
next weekly meeting. It doesn't mean this is the only person that has to learn
something, but at least one will be responsible to describe what new he/she
learned.

During the past week I volunteered to take some time to learn something new and
report back. What I have in my schedule for months now (I would say more than
one year) is to contribute anything to the Rust compiler. It doesn't matter
what the contribution will be, but it has to be something meaningful.

With some work hours reserved (around 3 hours of work during the week) and some
of my free time, I was ready to start!

## My step by step to the first contribution

_PS. I will link to a lot of documentation here, it's possible that they will
change the links and it will break, but hope the whole context helps if the
links are not 100% functional after some time_


### Understanding the structure

The first step was to read the
[CONTRIBUTING.md](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md)
file. There's **a lot** of good stuff there. Seriously, it seems obvious, but
it's not as other projects I tried and gave up quickly, it actually
shows/points to everything you need to know.

If we refer to [the build system
section](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md#the-build-system),
we will be quickly introduced to the build script (`x.py`) and also be pointed
to [a whole guide about how the compiler
works](https://rust-lang.github.io/rustc-guide/building/how-to-build-and-run.html)! :)

From there you will understand how the compiler works and how to build a single
piece of it, which is what you want to fix a bug.


### Finding the issue

I'm particularly interested about the [diagnostic
issues](https://github.com/rust-lang/rust/labels?utf8=%E2%9C%93&q=diagnostic),
so I reached out to the guy who is more familiar to the codebase working on it
([@estebank](http://github.com/estebank)) via
[Zulip](https://rust-lang.zulipchat.com), which is currently the tool of choice
for communication with the compiler team.

I met Esteban at Rustconf and Rust LATAM, so it was easy to introduce myself
(again), but everyone I talked to until now were very receptive to help when
you're polite asking for help (of course), even if they don't know you.

Esteban described which labels would be good for my first issue (in this case,
`d-papercut`) and I started to read one by one to pick mine.

After some time, I decided to investigate [an issue about the suggestion for
the #[repr = "C"] syntax](https://github.com/rust-lang/rust/issues/61286).


### The first compilation

The issue I chose mention [a `.stderr` file on the
codebase](https://github.com/rust-lang/rust/blob/609ffa1a890fd6b8b0364cd7b35bf1d45abf82d0/src/test/ui/repr.stderr),
which is a great way to start. :D

The first thing I did was to look for one of the strings I found there (the text "`must be of the form`") and change it to something else.

I was changed it to `must be of the whatever` and referred back to the documentation on how to build the compiler.

_As a side note: The way the compiler is compiled is very interesting. It has
three different stages. It downloads the beta compiler to compile itself (Rust
is written in Rust, remember?), and then it uses the generated compiler to
build the compiler again against itself. :) (there's much more, but I recommend
reading the official documentation if you're interested ;) )._

After trying some commands to build the repository and get used to the time it
takes to compile (and how to improve it), I got my first version of the
compiler and was able to compile a sample program.

I have to say that it's very satisfying to see the change you did there. It
doesn't matter if it's just a string. It proves to myself that the first step
is done and it's realistic to continue. o/

Now that I can build the compiler, I can get back to the issue and modify the
mentioned test.


### Testing the compiler

It's time to [refer to the documentation](https://rust-lang.github.io/rustc-guide/tests/intro.html) again to understand how to run the test
suite for the compiler.

The documentation helps to understand how the testing organization and
infrastructure works. It also shows the various types of tests you will find
and how to run them. In my case, I had to run the UI tests of the compiler, so
I could run it using the `x.py` script just like I do with everything else:

```
./x.py test --stage 1 src/test/ui
```

_PS. I will not go into the details of the code I used since you can refer to the
documentation I linked and get a much better and detailed explanation._

While trying to understand how the testing infrastructure works, I found a
problem with the documentation, so [I submitted a PR to the compiler
doucumentation](https://github.com/rust-lang/rust/issues/61286) and it was
accepted. 🎉

Back to the issue, when I ran the test command, I could see the broken test,
now that I changed the word `form` to the word `whatever`. \o/

So, let's first fix the test to have the behavior I wanted. For this case, I
want to recommend `#[repr(C)]` to everything instead of a statement that is not
valid.

Now that I have a broken test, I can checkout the code file and start looking
for the file to change.


### Understanding the code and changing what's needed

This is the part where we should be more used to. It's time to go function by
function, understanding which code is being called and why, until we find the
piece of code that has to be changed.

While you're going up the stack, you will probably find many other things you
have no idea how/why they are there. In some cases, you may find features of
the language your not familiarized with, so you may also take some time to
learn those to continue your journey. That was the case for me with macros. :)

After some time, I finally found the place I had to change and it was simple
for this particular case I was trying to solve.


### Creating the pull request

[There's a section in the documentation with tips on how to create your pull
request](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md#pull-requests),
so I used that to create mine and mention Esteban.


