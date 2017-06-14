+++
date = "2017-06-13T13:54:49-03:00"
title = "Wordpress to Middleman, to Hugo, github-pages and HTTPS"
tags = ["tech"]
+++

Yes, it was a journey. I decided to chance my blog engine again.

But this time I decided to post about the whole transition, since I started my
blog, [back in 2008](https://pothix.com/post/primeiro-post-por-aqui/).

I needed a blog at the time but could not spend time creating something, I just
wanted to "buy a blog" and write. Dreamhost was an awesome service for that. In
one hour I bought a domain, installed a Wordpress via one click install and set
up my own email via Google apps (at the time it was free).

Wordpress is a good blog engine, it just works. You have to keep it updated
because of security risks, but it works. I wrote some plugins and customized
themes during the years I used it and it worked just fine. Please, don't say bad
things about Wordpress, it solved more problems and is great for so many
people. :)

After some years I decided it was time to cancel my Dreamhost account. I had
just some small websites there and all of them could become static pages. That's
what I did.

All my website were converted to static web pages and migrated to Github pages,
including this blog. But let's focus on this blog for a while.

## Migrating from Wordpress to Middleman

I was already using markdown for my blog posts because I was posting from Vim
using [Vimpress](https://github.com/pothix/vimpress). So I had to convert all
other posts from HTML to Markdown.

My old layout was not good anymore. I was looking for something responsive and
used the migration to get the courage to change the layout as well. I bought a
Wordpress layout and converted it to `.erb` for Middleman.

I was using Wordpress comment system and I decided to not migrate to
Disqus. Today I know that I could do that, but at the time I decided to just
abandon the old comments. But I wanted to keep the names of everyone that wrote
a comment in the article.

Most of the migration was done
by [a Ruby script](https://gist.github.com/PotHix/e78c75281d4f1c508e89) that I
created. These are the steps needed:

+ Download an `.xml` backup of your Wordpress posts with comments
+ Change the script to use the correct file name and blacklist comments
+ Run the script

The script will convert all posts from HTML to Markdown and create individual
files for every post, following the middleman style.

You just have to check every post and fix images.

In my case, it was harder than that because I was creating a blog from scratch
but using the same content. But at the end, it worth the work.

## Migrating from Middleman to Hugo

For some reason, I decided to not post about my blog engine change this year. I
was using [middleman](https://middlemanapp.com)
since [May 2015](https://pothix.com/post/new-layout-of-pothix-blog/), but
decided to change to [Hugo](https://gohugo.io/).

I promised myself that I would not change my blog engine to Hugo just because it
looks cool. And then Middleman started to work weird, sometimes the `middleman
serve` serves my content as plain text instead of HTML. It was hard to try it
locally before publishing.

It was everything I needed to try a new blog engine (haha). This migration was
simpler. I just had to understand how Hugo works and how the template
language works.

To convert middleman format to Hugo I used a big `sed` command that I can't
reproduce anymore. haha

As usual, I used the migration as an excuse to do more things. Since 2008 I
change my URLs layout many times. So, I used Google Analytics to get these old
URLs and added them as [aliases](https://gohugo.io/extras/aliases/) in Hugo. The
old URLs now work with the current blog.

Some advantages of Hugo:

+ It's just a binary, I don't have to install anything beyond that. (`aura -S hugo-bin` :D)
+ It builds **really* fast, it's not fair to compare with middleman (Go X Ruby)
+ There are some great features, like aliases
+ I really like the live-reloading by default

## HTTPS

I was missing the HTTPS feature, but it was not possible to use it when using
Github-pages, at least not for custom domains.

After reading [this post (pt-BR)](https://www.sergioaugrod.com.br/offtopic/2017/05/14/migrando-do-ghost-para-o-github-pages.html)
I found that it would be possible to use HTTPS, even in Github-pages, and **for free**.

The solution: [Cloudflare](https://www.cloudflare.com)!

Cloudflare has a free plan that is sufficient for many blogs out there. You just
have to create your account and point your `ns` entries to their servers. By
doing that you can even use HSTS! :D

## Conclusion

I'm really happy with the current setting.

+ Hugo is a great platform
+ Github is fast, simple and free
+ My new layout has the features I need
+ It's easy to change

Static pages are the future... again... haha
