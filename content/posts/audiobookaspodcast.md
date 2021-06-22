+++
title = "Audiobooks as podcasts"
date = 2021-06-22
draft = true
tags = [
    "english",
    "tech",
]
+++

I love to [listen to audiobooks (article in pt-BR)](/audiobooks), and I'm was an
[Audible](https://audible.com) subscriber for many years, just pausing my
subscription because I have way too many books (~150) already and need some time
to clear the queue. 🙂

Audible is the best service to listen to audiobooks, no doubts here from my
side, but sometimes I get audiobooks from other medias. As an example, I have 3
books from [Pragmatic Programmers](https://pragprog.com/categories/audio-books/)
downloaded as `mp3` files and I must find my way on how to listen to them.

I'm a also a big fan of podcasts, so I have a great podcasts app ([Podcast
Addict](https://podcastaddict.com/)) set up and ready to roll. I'm going to
describe how I use my podcasts app to listen to my audiobooks when needed.

## What I did in the past

Things were much more difficult in the past as I couldn't find software that
could play these files in the way I wanted and in the right order. I'm not
focusing on PragProg books but will consider other audio files.

The problem was the difference between the `mp3` audio tags and the file name.
Sometimes the tags and the file names were different and the software usually
lists tracks by tag and not a file name.

To quickly fix this problem, I had my own set of scripts.

The first one is a quick shell script to remove spaces from files to make them
easy to manipulate:

```
ls | while read -r FILE; do mv -v "$FILE" `echo $FILE | tr ' ' '_'; done
```

and the second is a line of shell script using `id3lib` to add the file name to its metatags:

```
for i in *.mp3; do id3tag --song="$i" $i; done```
```

Now that I had the right metatags, I could just transfer the files to my
cellphone and add them to Podcast Addict. The process was mostly the same I'm
doing now, so let's describe the current process.

## What I do now

I don't do any manipulation to the files and just use them as is! 🙂

The step by step is:

1. I get the audio files and save them to my Dropbox account
1. When all files are uploaded, I check the Dropbox app on my phone and go to
   their directory
1. Download all files to the device. Keep in mind that it may take a while to
   download everything. Dropbox is extremely slow to do this, probably limit
   processing in the cellphone.
1. Select all files, click the menu, and use the "Save to Device" option.
   Dropbox lets you choose the directory to which the files will be saved.
1. I choose my "Audiobooks" directory
1. Go to Podcast Addict, click the "+" button in the top right, and select "Virtual"
1. Select my "Audiobooks" directory and ask the app to import all files by filename (instead of metadata)

Now the audiobook is available as a "podcast" and I can just press and hold the
audiobook cover and "Add unplayed episodes to playlist" to listen to my books
right from my playlist as I do with Podcasts. 🎶
