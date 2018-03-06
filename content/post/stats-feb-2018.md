+++
title = "Stats for Feb, 2018"
date = "2018-02-07"
tags = ["stats","personal","english"]
draft = true
+++

February time! Let's see what we can get from my metrics 😀

### Books

**Note**: I write a review for each book I read. You can find them on [my Goodreads account](https://goodreads.com/pothix).

I'm quite satisfied with my reading list for this month:

[![List of books read this month](/images/stats/2018/feb/goodreads.png "List of books read this month")](https://www.goodreads.com/pothix
"")

5 books read in a month and a **4.6 average rating**. That's what I call a good reading month.

[The Art of Learning: A Journey in the Pursuit of Excellence](http://amzn.to/2F9ki3C). This was another great recommendation by [Amir](https://twitter.com/amix3k). The author was a chess prodigy as a kid and an international chess master in the age of 16. He also was high skilled in Martial arts. In this book he shows what he extracted from his process of learning during all those years in physical and mental arts. You can read [my review on Goodreads](https://www.goodreads.com/review/show/2269391156).

[The Richest Man in Babylon](http://amzn.to/2tdJzYS). This book is a series of fiction stories using Babylon as the central topic. It's a good book but Rich Dad, Poor Dad ruined it for me. Reason below.

[Rich Dad, Poor Dad](http://amzn.to/2CWDdwu). It's a great book. When I was reading it, I asked some friends why they did not recommended it before. There are some great ideas there (depending on you political opinions, you may not like it) and I saw many of them being applied in practice in my own life. It was almost a 5 stars review, but the ending was really boring. I felt he was trying to add more pages to the book.

[The Art of Invisibility](http://amzn.to/2taeLbk). This is the book that makes you paranoid about security (if you care about it). I recommend you to read it if you feel secure using the internet.

[Anything You Want](http://amzn.to/2tgAdM1). An amazing book. Short, straight to the point, and with killer hints on how to Derek Sivers dealt with his business. I really recommend this one.

[Gather 'Round the Sound](http://amzn.to/2oF2kje). This was a free audiobook by Audible. It was nice to listen but nothing astonishing.


### Articles

As usual, I'm using that same export file from
[Pocket](https://getpocket.com) and a script that look like the one I
used last month. Here is the script with the actual data:

```
var pocket = {"unread":1352,"unread_pct":4.14,"read":1008,"read_pct":6.15};

var uls=document.body.getElementsByTagName("ul");
unread = uls[0].children.length;
pocket["unread_pct"] = +((1 - pocket["unread"] / unread) * 100).toFixed(2);
pocket["unread"] = unread;
read = uls[1].children.length;
pocket["read_pct"] = +((1 - pocket["read"] / read) * 100).toFixed(2);
pocket["read"] = uls[1].children.length;
console.log("# Result: " + JSON.stringify(pocket))

# Result: {"unread":1420,"unread_pct":4.79,"read":1020,"read_pct":1.18}
```

It means I have **1420 articles unread** and **1020 articles
read**. Comparing with my results from the last month (**1352 unread**
and **1008 read**), I got around **4.8% more unread articles** and **1%
more read articles**.

It seems that my unread articles list is increasing. My list of unread
increased by just 1%. I'm still reading but not enough to take care of
the unread list.

I should probably consider not adding articles there anymore. I just
have to consider if the feeling of adding articles "for future
reading" is worth keeping the system. More on that in the next months.

### Coding

Here are the charts from [Wakatime](https://wakatime.com/i/PotHix)
since the last post. I will start with editors this time:

[![Editors used during this month on Wakatime](/images/stats/2018/feb/wakatime-editors.png "Editors used during this month on Wakatime")](https://wakatime.com/@PotHix "")

My Vim configuration is fixed and it's back to 15%. :)

[![Hours of coding on Wakatime this month](/images/stats/2018/feb/wakatime-coding.png "Hours of coding on Wakatime this month")](https://wakatime.com/@PotHix "")

Unfortunately, the screenshot is not that good and I'm just seeing
that some days after taking it. I will keep it here.

It's interesting to look at this chart. I had one week of vacation,
that you can easily see in the middle of the chart, but after that, I
had 3 days to catch up to a lot of non-coding work to do before going
full-throttle again. I'm really interested to see if this is a pattern
in the next holidays.

[![Languages used during this month on Wakatime](/images/stats/2018/feb/wakatime-languages.png "Languages used during this month on Wakatime")](https://wakatime.com/@PotHix "")

Finally I have two programming languages in the top instead of `markdown`. :P

I'm not writing on Emacs these days, this is the reason I don't have
so much markdown. `Python` is my first language but I had some `Ruby`
as well. I'm quite happy with the results. Hope to have more `Rust` or
maybe `Elixir` in the next posts.

### Speaking

I had one presentation at Impacta tecnologia this month. The title was
[Criando um snake game do zero com Ruby e
Gosu](http://www.impacta.com.br/eventos/03-02-2018-De-um-arquivo-vazio-ate-um-snake-game-funcionando-usando-Ruby-e-Gosu). I
built a simple game from scratch, teaching the simple flows of how to
do that using Ruby. It was really nice for me, hope everyone enjoyed
as much as I did.

You can always check my list of talks [here](/talks).

I said that I submitted talks for two conferences last month and both
were rejected. One of them was a great fit for the conference, IMO. I
should probably improve my proposals and try again in the future. :)

### Completed tasks

Here is the comparison of the tasks for the last month (first) and the
tasks for this month (second). It was extracted from
[Todoist](https://todoist.com).

[![Amount of tasks completed last month](/images/stats/2018/jan/tasks-completed.png "Amount of tasks completed last month")](/images/stats/2018/jan/tasks-completed.png)
[![Amount of tasks completed this month](/images/stats/2018/feb/tasks-completed.png "Amount of tasks completed this month")](/images/stats/2018/feb/tasks-completed.png)

It looks stable again! 😀

### Podcasts

Here is my
[Podcast Addict](https://play.google.com/store/apps/details?id=com.bambuna.podcastaddict&hl=en) stats:

[![Amount of time spent listening to Podcasts this month](/images/stats/2018/feb/podcasts.jpg "Amount of time spent listening to Podcasts this month")](/images/stats/2018/feb/podcasts.jpg)

**6 days and 3 hours** of podcast time is a personal record for me. Of
course, I did not use 147 hours of my time to listen to Podcasts, I
usually speed-up them, so I would guess it was around 60-70 hours. 😀

As usual, here is the list of Podcasts and their times:

[![Amount of time spent listening to Podcasts, ordered by title](/images/stats/2018/feb/podcast_titles.jpg "Amount of time spent listening to Podcasts, ordered by title")](/images/stats/2018/feb/podcast_titles.jpg)

Just remember that this is an "all-time list", and I'm tracking time
instead of the episode which makes short podcasts not to appear as
"most listened" ones. I listen to [CBN
podcasts](http://audioglobo.globo.com/cbn) almost every day, but they
are just some minutes long.

I would also want to highlight that I **started listening to
[Philosophize this podcast](https://philosophizethis.com)** and highly
recommend you to try it. I decided to listen to 10 episodes in a row,
starting from episode 1. I usually don't read about philosophy because
the literature is boring as hell, but this podcast explains all the good
parts of it and makes it enjoyable to listen.

### Hours working

Here is the data from my time tracking software,
[Toggl](https://toggl.com) comparing the last month (first) and this
month (second):

[![Hours working using Toggl last month](/images/stats/2018/jan/toggl-time-working.png "Hours working using Toggl last month")](/images/stats/2018/jan/toggl-time-working.png "")
[![Hours working using Toggl](/images/stats/2018/feb/toggl-time-working.png "Hours working using Toggl")](/images/stats/2018/feb/toggl-time-working.png "")

I think I'm improving! I started to compute the number of hours I'm
working in a day. Instead of working until I finish my tasks, I
decided to set up 8 hours to work, and I have to **work smarter** to be
able to include all tasks in this schedule. I highly recommend
this strategy if you want to focus on your work and avoid
over-working.

We had 21 work days this month, and I worked for 181 hours, which mean
that **I worked 13 hours more than I should**. It was the same number
of hours of the last month, but this time it looks more uniform in the
chart.

[![Deep vs Shallow work](/images/stats/2018/feb/toggl-time-working-deep-shallow.png "Deep vs Shallow work")](/images/stats/2018/feb/toggl-time-working-deep-shallow.png "")

What I can take from this chart:

* I had fewer meetings this month; this is definitely a good metric. 😀
* Had some time invested in hiring, but it's probably done already! 😀
* Shallow work decreased from 60% to less than 50%, I'm thrilled to see that

"Read/Reply Twist" is still consuming a lot of time. I changed my
workflow to process all [Twist](https://twistapp.com) threads quickly
and add [Todoist](https://todoist.com) task for them. After that, I can
close Twist and focus on my tasks when I feel comfortable to research
what needs to be done and reply to them. This workflow is not showing
its results yet, but maybe we will have something next month. 😉

I will prepare a post about my workflow using **Todoist** and
**Twist** soon.

Now, let's continue to my personal projects:

[![Hours working on personal projects using Toggl](/images/stats/2018/feb/toggl-time-personal-projects.png "Hours working on personal projects using Toggl")](/images/stats/2018/feb/toggl-time-personal-projects.png "")

That was a good improvement considering I did not have any time
working on personal projects last month.

I decided to add my freelance to this chart so it will not interfere
with my metrics from Doist. Here I have my freelance work and my
talks.

Here is my data from [RescueTime](https://www.rescuetime.com/ref/1403570):

[![Goal of productive hours on RescueTime](/images/stats/2018/feb/rescuetime-productivetime.png "Goal of productive hours on RescueTime")](/images/stats/2018/feb/rescuetime-productivetime.png "")
[![RescueTime pulse](/images/stats/2018/feb/rescuetime-pulse.png "RescueTime pulse")](/images/stats/2018/feb/rescuetime-pulse.png "")

I found out that something was not good with my reports. It was
probably related to my change to Firefox quantum. I decided to get
back to Chrome for a while, and I will try Firefox quantum again as
soon as the third party plugins improve.

You can see in the chart the difference when it started reporting the
websites again instead of just showing "firefox" as neutral time in gray.

### Physical activity

I'm using my Mi band data to calculate my average steps:

[![Activity data for this month by Mi-Fit app](/images/stats/2018/feb/activity.jpg "Activity data for this month by Mi-Fit app")](/images/stats/2018/feb/activity.jpg "")
[![Activity data comparison for this month by Mi-Fit app](/images/stats/2018/feb/activity_comparison.jpg "Activity data comparison for this month by Mi-Fit app")](/images/stats/2018/feb/activity-comparison.jpg "")

I got back to the average of **6.5k** steps. Looking into the graph,
it was almost the same as November (I was traveling in December, it
should not count).

I'm back to the gym this month, and it's reflecting in my weight:

[![Weight this month](/images/stats/2018/feb/physical-activity-weight.png "Weight for this month")](/images/stats/2018/feb/physical-activity-weight.png "")

Here is my sleep data for this month:

[![Amount of sleep for this month](/images/stats/2018/feb/sleep.jpg "Amount of sleep for this month")](/images/stats/2018/feb/sleep.jpg "")

As we can see in the chart, it's almost the same but a little bit more deep sleep. 👍

Considering the whole user base from mi-band:

[![Sleep comparison with the user base](/images/stats/2018/feb/sleep_deep_comparison.jpg "Sleep comparison with the user base")](/images/stats/2018/feb/sleep_deep_comparison.jpg "")

My goal is to change this chart for the last month. I want to be
**above average for the sleeping earlier chart** and hope to have
**more deep sleep**.

### TV Shows

According to [tvshowtime](https://www.tvshowtime.com) I watched 22
episode this month:

[![TV shows watched this month according to tvshowtime](/images/stats/2018/feb/tvshows.jpg "TV shows watched this month according to tvshowtime")](/images/stats/2018/feb/tvshows.jpg "")

We finished the first season of **Billions**, finished the 4th season
of **Vikings**, and started **Punisher**. 😀

I spent **19 hours** of my life watching TV shows this month.


### Words written and errors

I'm using [Grammarly](https://grammarly.com) to improve my English and
track the number of words and errors when I'm writing. Unfortunately,
they only send weekly emails, but I will try to keep this metric for a
while.

Here are my stats for this month:

+ **71248** words written (**93129** last month)
+ **2039** corrections made (**1380** last month)
+ **12320** unique words (**11979** last month)

I subscribed to Grammarly Premium; maybe this explains the increase in
my number of corrections made, let's wait for the next month to
confirm.

### Locations

Let's explore my locations. Last month first and **this month right after it**:

[![General view of my locations data last month](/images/stats/2018/jan/location-general.png "General view of my locations data last month")](/images/stats/2018/jan/location-general.png "") .
[![General view of my locations data this month](/images/stats/2018/feb/location-general.png "General view of my locations data this month")](/images/stats/2018/feb/location-general.png "")

Just visited some places more but no new cities or countries. 😞

[![Location time and distance last month](/images/stats/2018/jan/location-time-distance.png "Location time and distance last month")](/images/stats/2018/jan/location-time-distance.png "") .
[![Location time and distance this month](/images/stats/2018/feb/location-time-distance.png "Location time and distance this month")](/images/stats/2018/feb/location-time-distance.png "")

I'm back to my normal life with just a few hours spent in vehicles. 😀

[![Kms to the moon](/images/stats/2018/feb/location-moon.png "Kms to the moon")](/images/stats/2018/feb/location-moon.png "")

### Expenses

Here we go for what I was expecting! My expenses for this month! 😀

[![Expenses by category this month](/images/stats/2018/feb/expenses.jpg "Expenses by category this month")](/images/stats/2018/feb/expenses.jpg "")

This chart **represents all my income for this month**. I was finally
able to receive the money for my work! It was hard to work for many
months without receiving any payment but finally I could manage to set
up my company in the right way to receive the money. It is a long
story and I should write about it in the future.

I received the money for my full-time job, my freelance, and for a
presentation I did in a private company. It was the first time I
received money for a talk in my entire life, after 40+ talks. 😀

Now looking at the pie chart, I can realize that I'm traveling a lot. I
don't think it's a bad thing at all. I usually take care of my
expenses when traveling so I can do frugal travels, but the airplane
tickets are usually expensive. I also think the chart is like that
because I don't spend that much money in my day-to-day life, so when I
have expenses that are not common, it dominates the entire chart.

I'm not considering the money in transit from my company to my
personal account (waiting for money exchange, taxes payment and so
on). So, without considering it, my total savings **increased by
f*cking 13.46%!** Now I have **85.70%** of my goal.

I'm feeling really good to see my savings growing again! 😀


### Time to write this blog post

Some people are asking me about how much time it takes to collect all
the data and write the blog post, so I decided to add this metric

**It took 4 hours and 02 minutes to write this post**


### Conclusion

Back to the old routine and now with a cash flow again. 🙂

I'm finally engaging in the same optimized routine I had in the past,
and I'm glad to see that happening again. 🚀
