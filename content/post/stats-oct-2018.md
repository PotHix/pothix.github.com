+++
title = "Stats for Oct, 2018"
date = "2018-11-14"
tags = ["stats","personal","english"]
draft = true
+++

After long and tough three months, I'm back with my stats posts!

### Books

I usually don't count how many books I read, I just track and check at
the end of the month. When I saw that I read five books read this
month, my face was like 😱. All of them received a 4-star review, so
the result is quite good.

[![List of books read this month](/images/stats/2018/oct/goodreads.png "List of books read this month")](https://www.goodreads.com/pothix
"")

+ [Managing Oneself](https://amzn.to/2LdZT3q): This is a great
  book. It's not life-changing, but there are many great tips to
  improve your life. It was almost 5 stars for me. [Check my review to
  find my notes](https://www.goodreads.com/review/show/1622218584).
+ [A Filosofia Explica as Grandes Questões da
  Humanidade](https://amzn.to/2uuv1RO): This book is in pt-BR, if you
  speak Portuguese and want a light (and quite funny) introduction to
  philosophy book, this may be the one.
+ [The Hard Thing About Hard Things: Building a Business When There
  Are No Easy Answers](https://amzn.to/2Jm6rZ2): A good book for
  CTOs. It was also an excellent reading for me since I saw many of those
  problems happening during my career 😅. I'm not sure if I'm the
  right audience, but it's a good book overall. [Here is my review and
  notes](https://www.goodreads.com/review/show/2285173161).
+ [Blood, Sweat, and Pixels: The Triumphant, Turbulent Stories Behind
  How Video Games Are Made](https://amzn.to2NT4qXs): If you like
  games, especially what is under the hood (not just to play them) you
  will have a good time reading this book. I'm a big fan of games and
  always try to build my own just for fun. The gaming industry is
  tough, you will understand why by reading this book.
+ [Zero to One: Notes on Startups, or How to Build the
  Future](https://amzn.to/2NSlbCf): A good one but I think I had high expectations. I recommend reading anyway, especially if you want to build a startup in the future (or already have one).

**Note**: I write a full review for all books I read. Sometimes I
mention some of them here, but you can find all of them on [my
Goodreads account](https://goodreads.com/pothix).


### Articles

I'm still experimenting with [an integration between Pocket and Google
Spreadsheets via IFTTT](https://ifttt.com/p/pothix). I'm adding a tag
to the articles I read and want to include in my list of _articles
read_ for the month.

[![Articles read this month](/images/stats/2018/oct/pocket-articles.png "Articles read this month")](/images/stats/2018/oct/pocket-articles.png "")

I use a `SUMIF` to sum all lines containing the YEARMONTH tag and it
shows I got **27 articles read**.

Let's compare this with the old method:

```
var pocket = {"unread":1539,"unread_pct":2.47,"read":1146,"read_pct":4.36}

var uls=document.body.getElementsByTagName("ul");
unread = uls[0].children.length;
pocket["unread_pct"] = +((1 - pocket["unread"] / unread) * 100).toFixed(2);
pocket["unread"] = unread;
read = uls[1].children.length;
pocket["read_pct"] = +((1 - pocket["read"] / read) * 100).toFixed(2);
pocket["read"] = uls[1].children.length;
console.log("# Result: " + JSON.stringify(pocket))

# Result: {"unread":1573,"unread_pct":2.16,"read":1173,"read_pct":2.3}
```

It means I have **1573 articles unread** and **1173 articles
read**. Comparing with my results from the last month (**1539 unread**
and **1146 read**), I got around **2.16% more unread articles** and
**2.3% more read articles**.

1173 _(read this month)_ - 1146 _(read prev. month)_ = **27** _(the number in the spreadsheet)_

It seems my spreadsheet tracking is working as expected. 🎉 I have to
think if it's a good thing to lose the number of articles added, but
I'm not sure if it's bringing that much value in the current
situation.

### Coding

Here are the charts from [Wakatime](https://wakatime.com/i/PotHix)
since the last post. I will start with editors this time:

[![Editors used during this month on Wakatime](/images/stats/2018/oct/wakatime-editors.png "Editors used during this month on Wakatime")](https://wakatime.com/@PotHix "")

Emacs is superior this month. I don't remember seeing any uptrend during the month though. 🤔

[![Hours of coding on Wakatime this month](/images/stats/2018/oct/wakatime-coding.png "Hours of coding on Wakatime this month")](https://wakatime.com/@PotHix "")

It's better than the other months. It's interesting to see that Sunday
was one of the days I programmed the most. 🤔 Usually, it's related to
my presentations (rehearsing live coding) or writing this blog post,
which makes `markdown` to be on the top of the list of languages. 😅

[![Languages used during this month on Wakatime](/images/stats/2018/oct/wakatime-languages.png "Languages used during this month on Wakatime")](https://wakatime.com/@PotHix "")

And now we have a surprise! **Rust** is the most used language this
month with **more than 32% of my usage**. 😱

The reason for that is my gaming with Rust presentation this month. I
plan to do some live coding, in the same way, I did for Python,
Javascript, and Ruby in the past. It is taking almost all my spare
time, but it's also a ton of fun.

Thanks to my monthly posts and lengthy posts on
[Twist](https://twistapp.com) (that I write in Emacs), **Markdown** is
in the second position.

**Python** is my first language nowadays and **Ruby** is used when I
work as a freelancer full-stack developer (for the same company, for
more than 2 years now).

### Speaking

This month I spoke about the same topic as [my
book](https://desconstruindoaweb.com.br) at [Impacta
tecnologia](https://www.sympla.com.br/desconstruindo-a-web__262326).

Still related to this presentation: this month also marks the
milestone of 1000 copies of my book sold, which is incredible. I promised
to write about it, hope to have a post soon.

### Completed tasks

Here is the comparison of the tasks for the last month (first) and the
tasks for this month (second). I extracted it from
[Todoist](https://todoist.com).

[![Amount of tasks completed last month](/images/stats/2018/jun/tasks-completed.png "Amount of tasks completed last month")](/images/stats/2018/jun/tasks-completed.png "")
[![Amount of tasks completed this month](/images/stats/2018/oct/tasks-completed.png "Amount of tasks completed this month")](/images/stats/2018/oct/tasks-completed.png "")

This time I could take the screenshot at the right time so we can
compare. It seems stable, but I can see an improvement there. It is quite unreliable to use the number of tasks as it can be "drink water" or "implement a complex system", but I'm OK with that. 😀

### Podcasts

Here is my
[Podcast Addict](https://play.google.com/store/apps/details?id=com.bambuna.podcastaddict&hl=en) stats:

[![Amount of time spent listening to Podcasts this month](/images/stats/2018/oct/podcasts.jpg "Amount of time spent listening to Podcasts this month")](/images/stats/2018/oct/podcasts.jpg)

**1 days and 8 hours** of podcast time. A little bit less than the last month, but as usual, the decrease of time listening Podcast correlates a lot with the number of books read (listen). 👍

Here is the list of Podcasts and their times:

[![Amount of time spent listening to Podcasts, ordered by title](/images/stats/2018/oct/podcast_titles.jpg "Amount of time spent listening to Podcasts, ordered by the title")](/images/stats/2018/oct/podcast_titles.jpg)

I'm not entirely comfortable with this list. It doesn't tell a true story. I listen to many good and small podcasts, and they are not part of this list because the long ones usually take their place. As an example, I listen to [CBN
podcasts](http://audioglobo.globo.com/cbn) almost every day, but they
are just some minutes long.

I'm keeping this list here because it shows some of the Podcasts I
follow, but I will probably find the best way to do that. I will
probably export a file every month and post it here. 👍

### Hours working

Here is the data from my time tracking software
([Toggl](https://toggl.com)) comparing the last month (first) and this
month (second):

[![Hours working using Toggl last month](/images/stats/2018/jun/toggl-time-working.png "Hours working using Toggl last month")](/images/stats/2018/jun/toggl-time-working.png "")

[![Hours working using Toggl](/images/stats/2018/oct/toggl-time-working.png "Hours working using Toggl")](/images/stats/2018/oct/toggl-time-working.png "")

June 21st I was at [AWS Summit São Paulo 2018](https://aws.amazon.com/pt/summits/sao-paulo/).

I had 19 work days tracked this month, and I worked for 160 hours,
which mean that **I worked 8 hours more than I should** (more than I
had last month, which was 5 hours). It's quite bad since I worked 1
day more than I should. **The goal is to reach 8 hours and remove
those bars that exceed the 9h threshold**. Currently, it's not a huge
problem, but I want to be able to stabilize it.

Let's check Deep work versus Shallow work:

[![Deep vs Shallow work](/images/stats/2018/oct/toggl-time-working-deep-shallow.png "Deep vs Shallow work")](/images/stats/2018/oct/toggl-time-working-deep-shallow.png "")

Last month I was discussing each item of the Deep work, but I will get
back to discussing Shallow work only since it's what concerns me the
most. Deep work is useful, sometimes it's not coding, but it's related
and meaningful work.

For shallow work, we have:

+ **Meeting time** is stable (and productive), considering two 1-1
  meetings (1 hour each) and four weekly meetings (around 40 minutes
  each)
+ **Read/Reply Twist** is stable but still consuming much time,
  more than 2 hours every day.
+ **Lunch/Break** is now complete! I'm spending around 26 hours in
  lunch/break. Considering that I had 19 days of work, it's less than
  1.5 hours. I should stop and stretch more than I'm doing now.

Let's check the Twist usage by hour (previous month first, this month
after):

[![Twist usage by time of the day](/images/stats/2018/jun/rescuetime-twist-time-by-hour.png "Twist usage by time of the day")](/images/stats/2018/jun/rescuetime-twist-time-by-hour.png "")
[![Twist usage by time of the day](/images/stats/2018/oct/rescuetime-twist-time-by-hour.png "Twist usage by time of the day")](/images/stats/2018/oct/rescuetime-twist-time-by-hour.png "")

No significant changes, and as I said in my previous review, I'm not that
satisfied with this chart. The perfect chart for me would have a small
peak at 9-10, almost no usage between 10-13, a giant peak between 14
and 16 and less usage from 16 to 21. That performance is what would be more
productive to me according to the [daily when
tracker](https://www.danpink.com/wp-content/uploads/2018/01/time-sheet.pdf).

Now, let's continue with my personal projects, last month first and this
month last:

[![Hours working on personal projects using Toggl](/images/stats/2018/jun/toggl-time-personal-projects.png "Hours working on personal projects using Toggl")](/images/stats/2018/jun/toggl-time-personal-projects.png "")

[![Hours working on personal projects using Toggl](/images/stats/2018/oct/toggl-time-personal-projects.png "Hours working on personal projects using Toggl")](/images/stats/2018/oct/toggl-time-personal-projects.png "")

What an improvement! It's probably related to my presentation since I'm
rehearsing it a lot. 😅

Here is my data from [RescueTime](https://www.rescuetime.com/ref/1403570):

[![Goal of productive hours on RescueTime](/images/stats/2018/oct/rescuetime-productivetime.png "Goal of productive hours on RescueTime")](/images/stats/2018/oct/rescuetime-productivetime.png "")
[![RescueTime pulse](/images/stats/2018/oct/rescuetime-pulse.png "RescueTime pulse")](/images/stats/2018/oct/rescuetime-pulse.png "")

My pulse is worst this month. I'm still tracking my Telegram usage since it's the most used application of the _Very distracting_
category. Here is the comparison from the previous month to the
current one:

[![Time spend on Telegram according to Rescuetime](/images/stats/2018/jun/rescuetime-telegram-time.png "Time spent on Telegram according to RescueTime")](/images/stats/2018/jun/rescuetime-telegram-time.png "")
[![Time spend on Telegram according to Rescuetime](/images/stats/2018/oct/rescuetime-telegram-time.png "Time spent on Telegram according to RescueTime")](/images/stats/2018/oct/rescuetime-telegram-time.png "")

It seems the usage increased. I don't know why yet.

Comparing Telegram usage by time of the day, we have (last month
first, **this month second**):

[![Time of the day I used Telegram according to Rescuetime](/images/stats/2018/jun/rescuetime-telegram-time-by-hour.png "Time of the day I used Telegram according to RescueTime")](/images/stats/2018/jun/rescuetime-telegram-time-by-hour.png "")
[![Time of the day I used Telegram according to Rescuetime](/images/stats/2018/oct/rescuetime-telegram-time-by-hour.png "Time of the day I used Telegram according to RescueTime")](/images/stats/2018/oct/rescuetime-telegram-time-by-hour.png "")

It's not that used in my peak times, but it seems to be the opposite
of Twist usage. I have to work on that.

### Physical activity

I'm using my Mi band data to calculate my average steps:

[![Activity data for this month by Mi-Fit app](/images/stats/2018/oct/activity.jpg "Activity data for this month by Mi-Fit app")](/images/stats/2018/oct/activity.jpg "")
[![Activity data comparison for this month by Mi-Fit app](/images/stats/2018/oct/activity_comparison.jpg "Activity data comparison for this month by Mi-Fit app")](/images/stats/2018/oct/activity-comparison.jpg "")

This month I have almost **8k steps** compared to 7k from the previous month. 🎉

Let's check my weight:

[![Weight this month](/images/stats/2018/oct/physical-activity-weight.png "Weight for this month")](/images/stats/2018/oct/physical-activity-weight.png "")

It's nice, but it doesn't show what I want. If you look by the 90 days
perspective using [MyFitnessPal](https://myfitnesspal.com), we have a
better picture of that:

[![Weight in the last 90 days via MyFitnessPal](/images/stats/2018/oct/physical-activity-weight-myfitnesspal.png "Weight in the last 90 days via MyFitnessPal")](/images/stats/2018/oct/physical-activity-weight-myfitnesspal.png "")

My plan to lose a little bit of weight is finally on the way. 👍

Here is my sleep data for this month:

[![Amount of sleep for this month](/images/stats/2018/oct/sleep.jpg "Amount of sleep for this month")](/images/stats/2018/oct/sleep.jpg "")

Good to see it's improving every month. 🙃


### TV Shows

According to [tvshowtime](https://www.tvshowtime.com), I watched just 1
episode this month:

[![TV shows watched this month according to tvshowtime](/images/stats/2018/oct/tvshows.jpg "TV shows watched this month according to tvshowtime")](/images/stats/2018/oct/tvshows.jpg "")

It's probably related to the last episode of **Sense 8**.

I forgot to get my data from [trakt.tv](https://trakt.tv) at the beginning of this month. The current version already includes some other TV shows. I will keep last month's version here for reference.

[![TV shows watched this month according to trakt](/images/stats/2018/oct/tvshows-trakt.jpg "TV shows watched this month according to trakt")](/images/stats/2018/oct/tvshows-trakt.jpg ")

The most important part is in blue:

* **TV Shows**: 31d 22h 50m
* **Movies**: 10d 15h 22m


### Words written and errors

I'm using [Grammarly](https://grammarly.com) to improve my English and
track the number of words and errors when I'm writing. Unfortunately,
they only send weekly emails, but I will try to keep this metric for a
while.

Here are my stats for this month:

+ **47147** words written (**38747** last month)
+ **595** corrections made (**385** last month)
+ **10973** unique words (**11213** last month)

It seems that I'm writing more but not with a better vocabulary 😞. I'm
not sure if it's related to the fact that I'm not tracking everything
I type in [Twist](https://twistapp.com) anymore. 🤔

### Locations

Let's compare the previous and this month, the previous first and
**this month right after it**:

[![General view of my locations data last month](/images/stats/2018/jun/location-general.png "General view of my locations data last month")](/images/stats/2018/jun/location-general.png "") .
[![General view of my locations data this month](/images/stats/2018/oct/location-general.png "General view of my locations data this month")](/images/stats/2018/oct/location-general.png "")

One new city popped out, and according to Google locations, it's São Paulo 🤔.

A little bit more time in a vehicle. It seems that I'm getting out of
the cavern more nowadays 😅

[![Location time and distance last month](/images/stats/2018/jun/location-time-distance.png "Location time and distance last month")](/images/stats/2018/jun/location-time-distance.png "") .
[![Location time and distance this month](/images/stats/2018/oct/location-time-distance.png "Location time and distance this month")](/images/stats/2018/oct/location-time-distance.png "")

Still many kilometers to "reach the moon":

[![Kms to the moon](/images/stats/2018/oct/location-moon.png "Kms to the moon")](/images/stats/2018/oct/location-moon.png "")

### Expenses

It's time to check my expenses! 💰

This month I spend 29% of my earnings, which is still below my
expectations (40%). This 29% are distributed into the following
categories (in pt-BR):

[![Expenses by category this month](/images/stats/2018/oct/expenses.jpg "Expenses by category this month")](/images/stats/2018/oct/expenses.jpg "")

I see more general expenses (_Compras_) than I would like. Gifts and
donations ( _Presentes / Doações_) are quite high this month because
of my parents in law health insurance. I decided to add it to the
_donations_ category because I'm already using the Family one
(_Família / Filhos_) to track the expenses with my dog. 😅

We spent a lot with Doctors and medicines this month (_Saúde_), but I hope it
will not be a recurrent expense.

My total savings **increased by 1.32%** this month, and now I have
**95.35%** of my goal.

### Time to write this blog post

It's an important metric to understand if it worth taking the time to
write it. So:

**It took 3 hours and 40 minutes to write it**

It was a good time considering my average. 🎉

### Conclusion

It was quite hard to take the time to write down this post, but I'm
glad I did it. I feel excellent when I read my accomplishments every
month. ☺

See you next month. 🖖
