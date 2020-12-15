+++
title = "⚡ GitHub CLI (a.k.a gh)"
date = 2020-12-15
draft = true
tags = [
    "english",
]
+++

_This is one of my quick thought posts (⚡). They could be a tweet but I have my
own twitter here with much more freedom._

The GitHub CLI is been a major time saver for me. I was skeptical about its
usage in the beginning but it proved to be very useful.

## Cloning

When I want to download a new repository, instead of typing the whole URL or
going to the browser to find the repository, I just type:

        gh repo clone name-of-the-repository

It works out of the box if the repo is mine. If it's from someone else, I have
to specify the user:

        gh repo clone rust-lang/rust

It works like a charm ✨

## Creating PRs

We create pull requests all the time at Doist, so it's great to have some
automation for that.

I'm usually very descriptive on my commit messages. If the change is simple and
just contains one commit, `gh` creates the description by itself:

        gh pr create -f -a PotHix -r nameOfTheReviewer

I even created a simple bash function to make it quickier when I use the
following arguments:

```
create_pr() {
    local reviewer=$1
    gh pr create -f -a $GITHUB_USER -r $reviewer
}
```

After writing a good commit message, I just type:

        create_pr Doist/integrations

This command creates a PR and adds Doist's Integrations team as the reviewer and
adds me as the assignee.

This has been saving a ton of time for me. Hope it's useful for someone else. :)
