+++
title="Contributing to Rust"
date=2019-11-22
tags=["english","tech"]
aliases=[
  "post/contributing-to-rust"
]
+++

I'm involved with the Rust community for a while now. I'm one of the main
organizers of the [Rust meetup in São
Paulo](https://www.meetup.com/Rust-Sao-Paulo-Meetup/) and also the [Rust
conference in Latin America (Rust LATAM)](https://rustlatam.org/) for more than
one year now, but did not contribute to Rust source code yet.

This post will show the step by step I did to submit my first pull request to
the Rust compiler.

If you want to go straight to the step by step, without any introduction, jump
to [My step by step to the first
contribution](#my-step-by-step-to-the-first-contribution).

## The dream

I don't know about you, but I always wanted to contribute to core things. I
still want to have a commit on the Linux kernel someday, and it's not the first
time I try to contribute to a programming language.

I read the kernel source code multiple times and also read their contribution
guides, but it's not simple to contribute. It's hard to find issues you can
understand, reproduce, and compile. It may not be true for people out there,
but it was my personal experience.

I also tried to contribute to the Ruby programming language. I was working with
Ruby for many years, so I decided to read its source. I didn't find the code
easy to follow, and the issues are not easy to find and reproduce. For Ruby,
it's even worse, since some things are still in Japanese, especially the
discussions. The language community is not very accessible to contributions
like the rest of the community.

These paragraphs are not to say bad things about these communities. I still
love Linux and the Ruby programming language. I just want to show my previous
attempts and what went wrong. 😉

### The Rust scenario

Different from the Linux kernel and the Ruby programming language, the Rust
programming language is implemented in Rust itself (instead of C), which makes
things even better. 🙂

The community and contribution guides are both **awesome**. You can feel the
enormous amount of work the community puts on documenting stuff so people can
find it easy to fix small things or even suggest and implement significant
features.

The whole process of how the community organizes itself is very open and
encourages everyone to take part in it. This is not something I found on my
previous attempts of contributions.

### How it started

At [Doist](https://doist.com), we (speaking about my team here) try to
encourage people to learn new things every week. You should reserve some time
to try new things and bring some knowledge back to the team. If you don't book
work time for that, you will probably overwork or never have time to improve
your development skills.

Every week we're naming someone to be responsible for describing what he/she
learned during our next weekly meeting. It doesn't mean this is the only person
that has to learn something, but at least one will be responsible for
describing to the rest of the team.

During the past week, I volunteered to take some time to learn something and
report back. What I have in my schedule for months now (I would say more than
one year) is to contribute anything to the Rust compiler. It doesn't matter
what the contribution will be, but it has to be something meaningful and change
the compiler in some way.

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
it's not like other projects I tried and gave up quickly, it shows/points to
everything you need to know.

If we refer to [the build system
section](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md#the-build-system),
we will be quickly introduced to the build script (`x.py`) and to [a complete
guide about how the compiler
works](https://rust-lang.github.io/rustc-guide/building/how-to-build-and-run.html)!
:)

From there, you will understand how the compiler works and how you can use the
python script to build a small piece of it, which is what you want to be able
to fix a bug.


### Finding the issue

I'm particularly interested about the [diagnostic
issues](https://github.com/rust-lang/rust/labels?utf8=%E2%9C%93&q=diagnostic),
so I reached out to the guy who is more familiar to this part of the codebase
([@estebank](http://github.com/estebank)) via
[Zulip](https://rust-lang.zulipchat.com), which is currently the tool of choice
for communication with the compiler team.

I met Esteban at [Rustconf](https://rustconf.com) and [Rust
LATAM](https://rustlatam.org), so it was easy to introduce myself (again).
Everyone I talked to until now was very receptive to help when you're polite
(of course) and asking for help, even if they don't know you, so don't be
afraid to reach out to people.

Esteban described which labels would be suitable for my first issue (in this
case, `d-papercut`), and I started to read one by one to pick mine.

After some time, I decided to investigate [an issue about the suggestion for
the #[repr = "C"] syntax](https://github.com/rust-lang/rust/issues/61286).


### The first compilation

The issue I chose mention [a `.stderr` file on the
codebase](https://github.com/rust-lang/rust/blob/609ffa1a890fd6b8b0364cd7b35bf1d45abf82d0/src/test/ui/repr.stderr),
which is a great way to start. :D

The first thing I did was to look for one of the strings I found there (the
text "`must be of the form`") and change it to something else.

I changed it to `must be of the whatever` and referred back to the
documentation on how to build the compiler.

_As a side note: The way the compiler is compiled is very interesting. It has
three different stages. It downloads the beta compiler to compile itself (Rust
is written in Rust, remember?), and then it uses the generated compiler to
build the compiler again against itself. :) (there's much more, but I recommend
reading the official documentation if you're interested ;) )._

After trying some commands to build the repository and get used to the time it
takes to compile (and how to make the compilation faster by compiling parts of
it), I got my first version of the compiler and was able to compile a sample
program.

I have to say that it's very satisfying to see the change you did there. It
doesn't matter if it's just a string. It proves to me that the first step is
done, and it's realistic to continue. o/

Now that I can build the compiler, I can get back to the issue and modify the
mentioned test.


### Testing the compiler

We will now use [the rustc
documentation](https://rust-lang.github.io/rustc-guide/tests/intro.html) again
to understand how to run the test suite for the compiler.

The documentation helps to understand how the testing organization and
infrastructure works. It also shows the various types of tests you will find
and how to run them. In my case, I had to run the UI tests of the compiler, so
I could run it using the `x.py` script just like I do with everything else:

```
./x.py test --stage 1 src/test/ui
```

_PS. I will not go into the details of the code I used since you can refer to
the documentation I linked and get a much better and detailed explanation._

While trying to understand how the testing infrastructure works, I found a
problem with the documentation, so [I submitted a PR to the compiler
doucumentation](https://github.com/rust-lang/rust/issues/61286) and it was
accepted. 🎉

Now, getting back to the issue. When I ran the test command, it shows me that I
now have a broken test, since I changed the word `form` to the word `whatever`.
\o/

So, let's first fix the test to have the behavior I wanted. In this case, I
want to recommend `#[repr(C)]` to everything instead of a statement that is not
valid. By doing that, the editors can suggest valid code instead of just a
tooltip with and list and `...`.

Now that I have a broken test, I can `checkout` the code file and start looking
for the file to change.


### Understanding the code and changing what's needed

This is the part where we should be more used to. When I say _more used to_, I
mean it's more related to our day-to-day job, whatever it is. It's just another
codebase with a bug that you have to find out. 😉

Let's start debugging it function by function and understanding which code is
being called. We will do that until we find the piece of code that has to be
changed.

While you're going up the stack, you will probably find many other things you
have no idea how/why they are there. In some cases, you may see features of the
language that you're still not familiar with, so you may also take some time to
learn those to continue your journey. That was the case for me with macros. 🙂

After some time, I finally found the place I had to change, and it was simple
for this particular case I was trying to solve.


### Creating the pull request

[To create a Pull Request, we can refer to this section in the Rust
documentation](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md#pull-requests).
I used that to create mine and mention Esteban.

There are some bots to help the community to take care of managing the PRs, so
we (as a community) have many powers to ask for reviews, approve PRs, create a
queue of PRs to merge, etc.

To mention someone to review, I used the `r? @username` function of the
[rust-highfive](https://github.com/rust-highfive) bot, so it can assign the
person who is knowledgeable on that part of the codebase (@estebank in my
case).

After creating the PR, the Rust language infrastructure will run the tests (it
was Travis before, Azure pipelines currently, and may change to Github actions
in the future) and report back in the PR.

After some time (~2 hours), I got the report that I broke the build with my
changes (🤦) because there were other tests in a different part of the code,
expecting that message as a diagnostic for the `[repr = "C"]` syntax. I checked
the code again and just fixed the test.


### PR and discussions

As usual, there was some discussion about the change. The PR usually stays
there for some days until one of the maintainers have enough time to take a
look at it and decide if it's worth changing.

The discussions usually happen on the PR itself, but in my case, there were
some discussions with Esteban via Zulip, as the change was straightforward, and
I had some questions.

It turns out that my change only partially fixes the issue because it will need
something better designed for this case. The idea is to suggest the right
`repr` for the context of the code. This change will take much more knowledge
(and time 😅) than I have now.

Fortunately, the Rust team found the change to be valuable enough to merge in,
even if it doesn't fix the issue altogether, so [the PR was approved
](https://github.com/rust-lang/rust/pull/66206)!


### After the approval

When your PR is approved, the **[@bors](https://github.com/bors)** bot will add
it to the [the queue of PRs to
merge](https://buildbot2.rust-lang.org/homu/queue/rust) and will eventually be
merged to the master branch.

[![Image of the Rust repository on GitHub with the merge of my commit as the latest commit](/images/posts/contributing-to-rust.jpg)](/images/posts/contributing-to-rust.jpg)

You will also be added to the [Thanks
page](https://thanks.rust-lang.org/rust/all-time/) as you're now part of the
Rust repository with you commit 🎉.


## Next steps

I like to do it in baby steps. I planned to try something simple, so I could
understand the basics of contributing to the compiler. It's now done. 🙂

Now that I (and hopefully, you as well) understand the processes to contribute
and have the setup to do it, I can go to the next step and try more issues. The
plan is to focus on the diagnostics part of the compiler (which is the part I
like the most) and solve small issues that may have a high impact on how the
developers are interacting with the language.

When I feel comfortable with the small issues, I can look for something
bigger... but... baby steps. 😉
