+++
title = "Stats for Jan, 2018"
date = "2018-02-07"
tags = ["stats","personal","english"]
+++

I'm excited to write the post about my performance for the first month
of the year. I think I will have some great news at the end of this
post, related to my expenses.

Let's get started! 😀

### Books

I decided to listen to my podcasts this month, so I did not listened
to that many audio books. The only book I read this month was a
physical book:

[![List of books read this month](/images/stats/2018/jan/goodreads.png "List of books read this month")](https://www.goodreads.com/pothix
"")

[Hiding in unnatural happiness](http://amzn.to/2FcD6PU) is a book I
received from a monk in York. It was the first time I heard about
Krishna, Bhagavad Gita, and some other things. It was an interesting
read but 3 stars is enough for it.

### Articles

As usual, I'm using that same export file from
[Pocket](https://getpocket.com) and that time I changed the script to
calculate, it will save me some time in the next month:

```
var pocket = {unread: 1296, unread_pct: 1.00, read: 946, read_pct: 1.00};
var uls=document.body.getElementsByTagName("ul");
unread = uls[0].children.length;
pocket["unread_pct"] = +((1 - pocket["unread"] / unread) * 100).toFixed(2);
pocket["unread"] = unread;
read = uls[1].children.length;
pocket["read_pct"] = +((1 - pocket["read"] / read) * 100).toFixed(2);
pocket["read"] = uls[1].children.length;
console.log("var pocket = " + JSON.stringify(pocket))

var pocket = {"unread":1352,"unread_pct":4.14,"read":1008,"read_pct":6.15}
```

It means I have **1352 articles Unread** and **1008 articles
Read**. Comparing with my results from the last month (**1296 unread**
and **946 read**), I got around **4% more unread articles** and **6%
more read articles**.

A big increase this month but it's great to see the read percentage
higher than the read one.

### Coding

Here are the charts from [Wakatime](https://wakatime.com/i/PotHix)
since the last post. I will start with editors this time:

[![Editors used during this month on Wakatime](/images/stats/2018/jan/wakatime-editors.png "Editors used during this month on Wakatime")](https://wakatime.com/@PotHix "")

Looks like my Vim configuration is not working, just fixed that but my
metrics were not collected. 😞

[![Hours of coding on Wakatime this month](/images/stats/2018/jan/wakatime-coding.png "Hours of coding on Wakatime this month")](https://wakatime.com/@PotHix "")

It doesn't look correct, unfortunately. Some hours are missing here. 😞

[![Languages used during this month on Wakatime](/images/stats/2018/jan/wakatime-languages.png "Languages used during this month on Wakatime")](https://wakatime.com/@PotHix "")

As usual, `markdown` and `Python` are present. I tried some `Rust` as
well and did some `Ruby` coding because of my presentation and some
freelance coding.

### Speaking

No presentations this month. I will not post a chart for that
anymore. I don't have a goal related to presentations this year.

I submitted talks for two conferences this month, maybe I will have
some good news next month. 👀

### Completed tasks

Here is the comparison of the tasks for the last month (first) and the
tasks for this month (second). It was extracted from
[Todoist](https://todoist.com).

[![Amount of tasks completed last month](/images/stats/2017/dec/tasks-completed.png "Amount of tasks completed last month")](/images/stats/2017/dec/tasks-completed.png)
[![Amount of tasks completed this month](/images/stats/2018/jan/tasks-completed.png "Amount of tasks completed this month")](/images/stats/2018/jan/tasks-completed.png)

It looks stable again! 😀

### Podcasts

Here is my
[Podcast Addict](https://play.google.com/store/apps/details?id=com.bambuna.podcastaddict&hl=en) stats:

[![Amount of time spent listening to Podcasts this month](/images/stats/2018/jan/podcasts.jpg "Amount of time spent listening to Podcasts this month")](/images/stats/2018/jan/podcasts.jpg)

**6 days and 3 hours** of podcast time is a personal record for me. Of
course I did not use 147 hours of my time to listen to Podcasts, I
usually speed-up them, so I would guess it was around 60-70 hours. 😀

As usual, here is the list of Podcasts and their times:

[![Amount of time spent listening to Podcasts, ordered by title](/images/stats/2018/jan/podcast_titles.jpg "Amount of time spent listening to Podcasts, ordered by title")](/images/stats/2018/jan/podcast_titles.jpg)

Just remember that this is an "all-time list" and I'm tracking time
instead of the episode which makes short podcasts to not appear as
"most listened" ones. I listen to [CBN
podcasts](http://audioglobo.globo.com/cbn) almost every day, but they
are just some minutes long.

I would also want to highlight that I **started listening to
[Philosophize this podcast](https://philosophizethis.com)** and highly
recommend you to try it. I decided to listen to 10 episodes in a row,
starting from episode 1. I usually don't read about philosophy because
the literature boring as hell, but this podcast explain all the good
parts of it and makes it really enjoyable to listen to.

### Hours working

Here is the data from my time tracking software,
[Toggl](https://toggl.com) comparing the last month (first) and this
month (second):

[![Hours working using Toggl last month](/images/stats/2017/dec/toggl-time-working.png "Hours working using Toggl last month")](/images/stats/2017/dec/toggl-time-working.png "")
[![Hours working using Toggl](/images/stats/2018/jan/toggl-time-working.png "Hours working using Toggl")](/images/stats/2018/jan/toggl-time-working.png "")

I think I'm improving! I started to compute the number of hours I'm
working in a day. Instead of working until I finish my tasks, I
decided to set up 8 hours to work and I have to **work smarter** to be
able to include all tasks in this time schedule. I really recommend
this strategy if you want to focus on your work and avoid
over-working.

We had 21 work days this month and I worked for 181 hours, which mean
that **I worked 13 hours more than I should**. It was the same number
of hours of the last month but this time it looks more uniform in the
chart.

[![Deep vs Shallow work](/images/stats/2018/jan/toggl-time-working-deep-shallow.png "Deep vs Shallow work")](/images/stats/2018/jan/toggl-time-working-deep-shallow.png "")

What I can take from this chart:

* I had less meetings this month, this is definitely a good metric. 😀
* Had some time invested in hiring but it's probably done already! 😀
* Shallow work decreased from 60% to less than 50%, I'm really happy to see that

"Read/Reply Twist" is still consuming a lot of time. I changed my
workflow to process all [Twist](https://twistapp.com) threads quickly
and add [Todoist](https://todoist.com) task for them. After that I can
close Twist and focus on my tasks when I feel comfortable to research
what needs to be done and reply to them. This workflow is not showing
its results yet, but maybe we will have something next month. 😉

I will prepare a post about my workflow using **Todoist** and
**Twist** soon.

Now, let's continue to my personal projects:

[![Hours working on personal projects using Toggl](/images/stats/2018/jan/toggl-time-personal-projects.png "Hours working on personal projects using Toggl")](/images/stats/2018/jan/toggl-time-personal-projects.png "")

That was a good improvement considering I did not have any time
working on personal projects last month.

I decided to add my freelance to this chart so it will not interfere
with my metrics from Doist. Here I have my freelance work and my
talks.

Here is my data from [RescueTime](https://www.rescuetime.com/ref/1403570):

[![Goal of productive hours on RescueTime](/images/stats/2018/jan/rescuetime-productivetime.png "Goal of productive hours on RescueTime")](/images/stats/2018/jan/rescuetime-productivetime.png "")
[![RescueTime pulse](/images/stats/2018/jan/rescuetime-pulse.png "RescueTime pulse")](/images/stats/2018/jan/rescuetime-pulse.png "")

I found out that something was not good with my reports. It was
probably related to my change to Firefox quantum. I decided to get
back to Chrome for a while and I will try Firefox quantum again as
soon as the third party plugins improve.

### Physical activity

I'm using my Mi band data to calculate my average steps:

[![Activity data for this month by Mi-Fit app](/images/stats/2018/jan/activity.jpg "Activity data for this month by Mi-Fit app")](/images/stats/2018/jan/activity.jpg "")
[![Activity data comparison for this month by Mi-Fit app](/images/stats/2018/jan/activity_comparison.jpg "Activity data comparison for this month by Mi-Fit app")](/images/stats/2018/jan/activity-comparison.jpg "")

I got back to the average of **6.5k** steps. Looking into the graph,
it was almost the same as November (I was traveling in December, it
should not count).

I'm back to the gym this month and it's reflecting in my weight:

[![Weight this month](/images/stats/2018/jan/physical-activity-weight.png "Weight for this month")](/images/stats/2018/jan/physical-activity-weight.png "")

Here is my sleep data for this month:

[![Amount of sleep for this month](/images/stats/2018/jan/sleep.jpg "Amount of sleep for this month")](/images/stats/2018/jan/sleep.jpg "")

As we can see in the chart, it's almost the same but a little bit more deep sleep. 👍

Considering the whole user base from mi-band:

[![Sleep comparison with the user base](/images/stats/2018/jan/sleep_deep_comparison.jpg "Sleep comparison with the user base")](/images/stats/2018/jan/sleep_deep_comparison.jpg "")

My goal is to change this chart for the last month. I want to be
**above average for the sleeping earlier chart** and hope to have
**more deep sleep**.

### TV Shows

According to [tvshowtime](https://www.tvshowtime.com) I watched 22
episode this month:

[![TV shows watched this month according to tvshowtime](/images/stats/2018/jan/tvshows.jpg "TV shows watched this month according to tvshowtime")](/images/stats/2018/jan/tvshows.jpg "")

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

I subscribe to Grammarly Premium, maybe this explains the increase in
my number of corrections made, let's wait for the next month to
confirm.

### Locations

New cities were added this month:

[![New cities](/images/stats/2018/jan/location-cities.png "New cities")](/images/stats/2018/jan/location-cities.png "")

The missing city is Durham.

Here are the general data:

[![General view of my locations data](/images/stats/2018/jan/location-general.png "General view of my locations data")](/images/stats/2018/jan/location-general.png "")

Not so useful, but here is the time spent on vehicles:

[![Location time and distance](/images/stats/2018/jan/location-time-distance.png "Location time and distance")](/images/stats/2018/jan/location-time-distance.png "")

It's probably the time spent in taxis from home to the airport and
also related to the trip we made in North Yorkshire by van.

[![Kms to the moon](/images/stats/2018/jan/location-moon.png "Kms to the moon")](/images/stats/2018/jan/location-moon.png "")

This trip removed 12k km from my distance to the moon. 👍

### Expenses

My expenses for this month:

[![Expenses by category this month](/images/stats/2018/jan/expenses.jpg "Expenses by category this month")](/images/stats/2018/jan/expenses.jpg "")

This chart **represents all my income for this month**. Yes! You read
that right, I finally received some freaking money after six months! 🎉

This money is still not related to my current job but I already
received my payment, just need to go through the bureaucracy to be
able to pay the taxes and receive that in my personal account.

I will definitely write about this whole process soon.

This month is finally back to normal! My total savings **increased by
1.9%** and now I have **75.10%** of my goal.

Next month will be **huge!**


### Time to write this blog post

Some people are asking me about how much time it takes to collect all
the data and write the blog post, so I decided to add this metric

**It took 3 hours and 02 minutes to write this post**


### Conclusion

I'm back to Brazil after one full month working
from [York](https://goo.gl/maps/zx1s3AeFo982). I have to say that it
was really great to work from a different place for some time.

This was the last month of the year so expect a yearly review from me
soon. 😀
