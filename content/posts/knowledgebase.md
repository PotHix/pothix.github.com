+++
title = "My knowledge base bootstrap"
date = 2021-05-01
tags = [
    "english",
]
+++

Note-taking is my current obsession, so it's time to talk about it here. 😃

## How it started

Last year I was talking to my friend [Diego Eis](https://diegoeis.com) about his
note-taking workflow. I knew he was doing that for a long time but I couldn't
get the advantages of doing this. He described his workflow but I was still not
convinced it would be useful for me at the time.

When January came, I saw a post by [Caffo](https://www.rodrigofranco.com/)
talking about [Roam Research](https://roamresearch.com) and how he was using it
to build his blog. He also mentioned how he was organizing the information
there. This reminded me of the whole conversation I had with [Diego
Eis](https://diegoeis.com) and I decided to give [Roam
Research](https://roamresearch.com) a try.

## My background and tool of choice

I decided to pick [Roam Research](https://roamresearch.com) because it seems to
be the easiest tool for the kind of note-taking I want and provides the best
experience for starters.

I had no prior experience with a note-taking process, at least nothing I did on
a daily basis. I had many (yes, not few!) structured notes spread around
different services and media, but none of them connected in any way.

I felt the need to connect ideas more than once when [reading
books](https://pothix.com/tags/books) as it was quite common to see books
linking to the same concept or even the same experiment ([the marshmallow
study](https://en.wikipedia.org/wiki/Stanford_marshmallow_experiment) is a good
example), but I never explored the idea of having a note-taking app to connect
everything.

When I first tried [Roam Research](https://roamresearch.com), I realized how big
was the potential for that tool in my workflow. The tool pointed me to the
[Zettelkasten method](https://en.wikipedia.org/wiki/Zettelkasten) and everything
was set for success.

My initial plan was to try [Roam Research](https://roamresearch.com) during the
trial and then just use my own markdown files locally, it would certainly be
enough. I was proved wrong when I saw how useful Roam is and how many concerns
it removes from my note-taking experience. I'm not going into detail about [Roam
Research](https://roamresearch.com) here (maybe it deserves its own post?), but
just to name a few advantages it brings:

- I don't have to care about files, their names, titles, folders, etc. I just
  write notes on a web page
- The sync is done. I don't have to think about the syncing mechanism, it is
  like any other web app. (I still do my own backups periodically, though)
- They have a markdown format for export and it works great. I can just take
  notes and not be concerned about migrating my files at some point.
- The community is amazing and there are many plugins available. They do much
  more than what I want to do, but I learned a lot just by following people.
  This is especially important for someone with no experience in note-taking.
- It comes with a workflow already. Roam gives you a page for daily notes every
  day and you can just start there and use `[[]]` to link to other pages.

As expected, Roam also has its problems:

- Almost everything is done in the frontend, there's no API
- No mobile client and their mobile version is almost unusable
- You have to avoid creating big lines of notes or you may find very bad bugs.

The Pros totally overcome the Cons IMO.

## The problems I want to solve

I already mentioned the use-case of my books, so I could keep consuming
(reading, listening) and be able to link ideas between them in my notes. This
was the initial use case, but certainly not the only one.

Having a note-taking app would address the following use cases I had:

### Owning my content

There is something I have in my mind for a long time now and I couldn't find a
way to do: **I want all my content back. I want to own all of it**.

I keep thinking about how much content I'm generating for other platforms:

- Writing my reviews on Goodreads. Giving them free content.
- Posting tweets on Twitter. Again free content.
- Post on Linkedin (controlled already, I was posting to my blog first)
- etc.

Instead of creating content for other platforms, I would like to internalize all
of this and create content on my own platform. With the content done, I could
just post the link on other platforms. I want to use social media to spread
**my** content, instead of just giving my content to them.

A note-taking app will be the central point to write anything, a place to refer
to if I need to find anything I wrote at some point. When the writing work is
done, I can just copy it to the right media. If it's public, it's going to my
blog first.

### A log of my life

Since ~2012, I keep a LaTeX file containing stories of my life that I think is
worth writing about. Some of them are happy stories and some are sad ones. Some
could be public today, some may be when I'm not here anymore, and some should be
kept private.

I love to look back and see what I was doing in a particular date and what I was
thinking at the time. The past doesn't matter much, but seeing how much I
evolved makes me feel good.

Now that I have a son and a daughter, it makes even more sense to reflect on my
life until now, so I can understand them better. It's hard to understand
problems when you don't have them anymore and they were solved long ago.

### Structure the way I consume content

Taking notes when listening to audiobooks was life-changing to me. If was the
difference between listening to infotainment content to actually learning and
applying. I combined the note-taking approach with the need (that I created for
myself) to review the book after finishing it so I could:

- take notes (while reading)
- review (after finishing)
- create actionable tasks (right after reviewing)

I wanted to apply the same workflow for other content. I read 100+ articles
every year, but I'm sure I can't even remember 10 of them to link with knowledge
I already have. The process takes more time, so I have to be picky about the
articles I really want to read (no more 1k+ articles on Pocket).

I want to apply the same workflow for videos, podcasts, and other media I
consume.

## It's time for the import

The real story begins now. I decided to use [Roam
Research](https://roamresearch.com) as my tool of choice and became a believer
subscriber, now it's time to start the import process.

A knowledge base (or "second brain") only makes sense if you have all your
information there. I would not be able to link the ideas while reading books if
my book notes are in a different note-taking app. The same is valid to all the
content I have and moments of my life I want to refer to.

Now that I decided this is the process I want to use from now on, I started the
migration of **all** the content I currently have to Roam Research.

Here is how I approached it:

1. Started migrating my 1000+ notes from Google keep to Roam research (most of
   them were useless). My Google keep is now clean.
2. Went through my hundreds of Google Docs files one by one and migrated to Roam
   the ones that were just structurally organized notes (project ideas lost,
   university notes, course notes, etc.). I used that time to also tidy up my
   Google Drive account.
3. Found an old export from a software called
   [NoteCase](https://www.notecasepro.com/) that I used ~2010 (when it was still
   free) . It was exported in HTML format and I imported everything to Roam as
   is. Later in the process, I split the whole thing into separate pages, topic
   by topic.
4. Went to my Git repository containing one big LaTeX document (3k+ lines) and
   migrated it to roam. The exported document had good formatting but I still
   had to do some manual tweaking to get it in shape inside Roam.
5. Went to my Goodreads account and exported all the data there (I was creating
   content for them for years!) and created [a Rust project to migrate them to
   my
   blog](https://github.com/PotHix/pothix-codes/tree/master/rust/goodreads-to-hugo)
   (I'm using all the chances I have to play with Rust).  The project generated
   pages like this: https://pothix.com/deepworkbook/.
6. Now that I had all the content in markdown on my blog, I imported the whole
   blog on [Roam Research](https://roamresearch.com) and started fixing the
   formatting (removing front-matter, etc.) and linking to other content there.
7. As I wanted my note-taking to reflect my daily life, I exported everything
   from Twitter and [created a Rust project (again!) to migrate my tweets to
   Roam](https://github.com/PotHix/pothix-codes/tree/master/rust/twitter-export-to-roam).
   I like the result and took the chance to delete all tweets I had on my
   account as they're now safe, linkable, and only available to me.
8. With all the digital content imported, I started the import of analog ones.
   There were one year of notes from a 2003 agenda I have. It was tiresome but a
   great experience to read all the stories there, especially because it was the
   year I started working and bought my first computer. This agenda alone added
   350+ pages to Roam.
9. Migrated the other notebook I had for drafts and other things. I keep it
   since 2015.

I finished the process some days ago. Countless hours in the past 4 months but
it's worth it IMO. I went from 0 `.md` files in 2020 to 4500+ now and all the
content is linkable and searchable on the same platform.

Here is a screenshot of my graph as it is right now. Every point is a page and
lines are the connections between them.

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FPotHix-KB%2FjAx4SbAt4U.png?alt=media&token=548bc7c3-5442-40bb-bacf-03c3c4083915)

## Linking step

The next step is to review most of the content and link the ideas to one another
(that's why I have all the content there after all). I've been doing that for my
book reviews for a while now and it's being an amazing experience. There were
some ideas I knew would be quite easy to connect but I'm finding many others
that I was not expecting to find.

I don't think the "linking step" will have an end. There's the heavy burden of
checking the content I know must be linked to others (books, courses, etc), but
I will be always processing new notes and linking from now on after some time it
will not be that time-consuming anymore.

Now that I'm into the process of taking daily notes, I usually do the links in
place. The linking process is very straightforward in Roam, you just type `[[`
and it will auto-complete. It's almost natural.

I usually take notes of the following events along with its links:

- When writing how is the day going, linking to people or to past experiences.
- What I have in mind, linking to future plans or a topic
- Meeting notes, linking to people and topics
- Notes about articles I read, adding a summary, linking to the author, etc.
- Notes about a book I'm writing and the references I'm collecting
- etc.

## Current state and conclusion

I'm feeling relieved to finally have finished the import. This post was on hold
until this process was finished and now I'm finally feeling good to write it. 🙂

From now on, I don't see a huge effort being put into this system, just the
normal daily effort of doing a mind dump. I hope to keep receiving the results
of having all my content/knowledge centralized in one place.

I'm convinced this note-taking process will be something I'm going to carry with
me for a long time. Hopefully, it will be even part of my legacy. There's a good
chance this will not the last post on the topic. 😉
