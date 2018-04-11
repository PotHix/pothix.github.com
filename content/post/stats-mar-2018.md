+++
title = "Stats for Mar, 2018"
date = "2018-04-11"
tags = ["stats","personal","english"]
draft = true
+++

March is gone and it's time for metrics! 📊

### Books

**Note**: I write a review for each book I read. You can find them on [my Goodreads account](https://goodreads.com/pothix).

Just one book this month, but a 5 stars one:

[![List of books read this month](/images/stats/2018/mar/goodreads.png "List of books read this month")](https://www.goodreads.com/pothix
"")

[When: The Scientific Secrets of Perfect
Timing](https://amzn.to/2v3yIBB). This book is about optimization
based on time and energy. What is the best time to do some activity
based on statistics? I found it to be really amazing and could confirm
many of the assumptions with my own data. I would recommend everyone
who likes to improve their performance to read this book and draw
their conclusions.

### Articles

As usual, I'm using that same export file from
[Pocket](https://getpocket.com) and a script that look like the one I
used last month. Here is the script with the actual data:

```
var pocket = {"unread":1420,"unread_pct":4.79,"read":1020,"read_pct":1.18}

var uls=document.body.getElementsByTagName("ul");
unread = uls[0].children.length;
pocket["unread_pct"] = +((1 - pocket["unread"] / unread) * 100).toFixed(2);
pocket["unread"] = unread;
read = uls[1].children.length;
pocket["read_pct"] = +((1 - pocket["read"] / read) * 100).toFixed(2);
pocket["read"] = uls[1].children.length;
console.log("# Result: " + JSON.stringify(pocket))

# Result: {"unread":1446,"unread_pct":1.8,"read":1050,"read_pct":2.86}
```

It means I have **1446 articles unread** and **1050 articles
read**. Comparing with my results from the last month (**1420 unread**
and **1020 read**), I got around **1.8% more unread articles** and **2.8%
more read articles**.

The percentages are better this month and this is a good thing. I'm
happy to see that I read 30 articles this month. 🙂

### Coding

Here are the charts from [Wakatime](https://wakatime.com/i/PotHix)
since the last post. I will start with editors this time:

[![Editors used during this month on Wakatime](/images/stats/2018/mar/wakatime-editors.png "Editors used during this month on Wakatime")](https://wakatime.com/@PotHix "")

Vim and Emacs usage following the same patterns.

[![Hours of coding on Wakatime this month](/images/stats/2018/mar/wakatime-coding.png "Hours of coding on Wakatime this month")](https://wakatime.com/@PotHix "")

This was a very particular month since I had the [Doist
retreat](https://twitter.com/amix3k/status/977808357376626689) (an
AMAZING experience which deserves a post) and one week vacation. Not
so much coding done.

[![Languages used during this month on Wakatime](/images/stats/2018/mar/wakatime-languages.png "Languages used during this month on Wakatime")](https://wakatime.com/@PotHix "")

`Python` is my first language but I had some `Ruby` as well. Unfortunately, there's no mention to `Rust` or `Elixir` this month. 😞

### Speaking

No speaking this month but I helped organize a workshop about agile
methodologies and how it could help our work at Doist. It was a nice
experience.

### Completed tasks

Here is the comparison of the tasks for the last month (first) and the
tasks for this month (second). It was extracted from
[Todoist](https://todoist.com).

[![Amount of tasks completed last month](/images/stats/2018/feb/tasks-completed.png "Amount of tasks completed last month")](/images/stats/2018/feb/tasks-completed.png)
[![Amount of tasks completed this month](/images/stats/2018/mar/tasks-completed.png "Amount of tasks completed this month")](/images/stats/2018/mar/tasks-completed.png)

Almost 190 tasks in the week I returned to work. 😅

### Podcasts

Here is my
[Podcast Addict](https://play.google.com/store/apps/details?id=com.bambuna.podcastaddict&hl=en) stats:

[![Amount of time spent listening to Podcasts this month](/images/stats/2018/mar/podcasts.jpg "Amount of time spent listening to Podcasts this month")](/images/stats/2018/mar/podcasts.jpg)

**3 days** of podcast time is above average for me. As usual, here is
the list of Podcasts and their times:

[![Amount of time spent listening to Podcasts, ordered by title](/images/stats/2018/mar/podcast_titles.jpg "Amount of time spent listening to Podcasts, ordered by the title")](/images/stats/2018/mar/podcast_titles.jpg)

Just remember that this is an "all-time list", and I'm tracking time
instead of the episode which makes short podcasts not to appear as
"most listened" ones. I listen to [CBN
podcasts](http://audioglobo.globo.com/cbn) almost every day, but they
are just some minutes long.

### Hours working

Here is the data from my time tracking software,
[Toggl](https://toggl.com) comparing the last month (first) and this
month (second):

[![Hours working using Toggl last month](/images/stats/2018/feb/toggl-time-working.png "Hours working using Toggl last month")](/images/stats/2018/feb/toggl-time-working.png "")

[![Hours working using Toggl](/images/stats/2018/mar/toggl-time-working.png "Hours working using Toggl")](/images/stats/2018/mar/toggl-time-working.png "")

It seems quite stable this month.

I had 12 tracked working days this month, and I worked for 107 hours,
which mean that **I worked 11 hours more than I should** (it was also 11 in
the last month with more days tracked 😞).

Let's check Deep work versus Shallow work:

[![Deep vs Shallow work](/images/stats/2018/mar/toggl-time-working-deep-shallow.png "Deep vs Shallow work")](/images/stats/2018/mar/toggl-time-working-deep-shallow.png "")

What I can take from this chart:

* I had more meetings than usual but not too bad
* Shallow work is still 55% (better than 64% from February)
* The Shallow work task (the most generic I have) is still the big
  black box. I'm trying to not split the tracking too much or it will
  be too much work to keep tracking but maybe it will be good to
  separate lunch time and other common things just to check the time
  slacking.

"Read/Reply Twist" is still consuming a lot of time, almost 2 hours
every day. I'm still fighting to implement my process of checking it
in the morning, add tasks and just review in the afternoon. I should
probably avoid checking it in the morning but it's still hard for me.

Now, let's continue to my personal projects, last month first and this month last:

[![Hours working on personal projects using Toggl](/images/stats/2018/feb/toggl-time-personal-projects.png "Hours working on personal projects using Toggl")](/images/stats/2018/feb/toggl-time-personal-projects.png "")

[![Hours working on personal projects using Toggl](/images/stats/2018/mar/toggl-time-personal-projects.png "Hours working on personal projects using Toggl")](/images/stats/2018/mar/toggl-time-personal-projects.png "")

That's not much to compare here but at least it seems stable. 👍

Here is my data from [RescueTime](https://www.rescuetime.com/ref/1403570):

[![Goal of productive hours on RescueTime](/images/stats/2018/mar/rescuetime-productivetime.png "Goal of productive hours on RescueTime")](/images/stats/2018/mar/rescuetime-productivetime.png "")
[![RescueTime pulse](/images/stats/2018/mar/rescuetime-pulse.png "RescueTime pulse")](/images/stats/2018/mar/rescuetime-pulse.png "")

My pulse is the same as the last month but the goal is bad, which is expected.

Still following my Telegram usage, here is the comparison from the previous month to the current one:

[![Time spend on Telegram according to Rescuetime](/images/stats/2018/feb/rescuetime-telegram-time.png "Time spent on Telegram according to RescueTime")](/images/stats/2018/feb/rescuetime-telegram-time.png "")
[![Time spend on Telegram according to Rescuetime](/images/stats/2018/mar/rescuetime-telegram-time.png "Time spent on Telegram according to RescueTime")](/images/stats/2018/mar/rescuetime-telegram-time.png "")

It seems quite stable, let's wait for the next month.

I'm still trying to understand if I have a particular moment where I use Telegram the most, here is the difference from the last month to the current one:

[![Time of the day I used Telegram according to Rescuetime](/images/stats/2018/feb/rescuetime-telegram-time-by-hour.png "Time of the day I used Telegram according to RescueTime")](/images/stats/2018/feb/rescuetime-telegram-time-by-hour.png "")
[![Time of the day I used Telegram according to Rescuetime](/images/stats/2018/mar/rescuetime-telegram-time-by-hour.png "Time of the day I used Telegram according to RescueTime")](/images/stats/2018/mar/rescuetime-telegram-time-by-hour.png "")

Nothing outstanding but 10:00 is still the time I most use Telegram. It's not
that good since it should be my peak time. I will have to improve my
morning routine. 👍

### Physical activity

I'm using my Mi band data to calculate my average steps:

[![Activity data for this month by Mi-Fit app](/images/stats/2018/mar/activity.jpg "Activity data for this month by Mi-Fit app")](/images/stats/2018/mar/activity.jpg "")
[![Activity data comparison for this month by Mi-Fit app](/images/stats/2018/mar/activity_comparison.jpg "Activity data comparison for this month by Mi-Fit app")](/images/stats/2018/mar/activity-comparison.jpg "")

The chart shows that it's almost the same as the last month (**6.5k** steps), which is not that bad.

I'm going to the gym almost every day. My goal is to improve my muscles and take care of my left arm after the Ban kart and Hill Sacks lesion. As I'm not doing cardio exercises, my weight is still good:

[![Weight this month](/images/stats/2018/mar/physical-activity-weight.png "Weight for this month")](/images/stats/2018/mar/physical-activity-weight.png "")

Here is my sleep data for this month:

[![Amount of sleep for this month](/images/stats/2018/mar/sleep.jpg "Amount of sleep for this month")](/images/stats/2018/mar/sleep.jpg "")

As we can see in the chart, it's almost the same as the last month, and I'm happy with that. 👍

Considering the whole user base from mi-band:

[![Sleep comparison with the user base](/images/stats/2018/mar/sleep_deep_comparison.jpg "Sleep comparison with the user base")](/images/stats/2018/mar/sleep_deep_comparison.jpg "")

This chart only considers the last 7 days. My goal [previous month](/post/stats-jan-2018) was to improve my "Fell asleep score" and it's really better now.

My new routine considers sleeping at 22:30 and waking up between 6 and 6:30. As you can see, it's working really well. 😀

We just have to ignore the deep sleep for the last 7 days. ✌️

### TV Shows

According to [tvshowtime](https://www.tvshowtime.com) I watched 3
episode this month:

[![TV shows watched this month according to tvshowtime](/images/stats/2018/mar/tvshows.jpg "TV shows watched this month according to tvshowtime")](/images/stats/2018/mar/tvshows.jpg "")

I forgot to add it to the app before it was too late. These 3 episodes are related to **Punisher**. 😀

I spent **3 hours** of my life watching TV shows this month... But I
also watched some movies. I'm not tracking films yet because I
usually don't watch that much. Last year I watched less than 10
movies. In case I decide to start watching more movies I will consider
tracking them.

### Words written and errors

I'm using [Grammarly](https://grammarly.com) to improve my English and
track the number of words and errors when I'm writing. Unfortunately,
they only send weekly emails, but I will try to keep this metric for a
while.

Here are my stats for this month:

+ **72766** words written (**71248** last month)
+ **3451** corrections made (**2039** last month)
+ **14352** unique words (**12320** last month)

The corrections made keep increasing, I'm sure this is happening because of Grammarly premium. It offers some "advanced" corrections.

### Locations

Let's explore my locations. Last month first and **this month right after it**:

[![General view of my locations data last month](/images/stats/2018/feb/location-general.png "General view of my locations data last month")](/images/stats/2018/feb/location-general.png "") .
[![General view of my locations data this month](/images/stats/2018/mar/location-general.png "General view of my locations data this month")](/images/stats/2018/mar/location-general.png "")

Just visited some places more but no new cities or countries. 😞

Let's see the time commuting, last month first and this month second:

[![Location time and distance last month](/images/stats/2018/feb/location-time-distance.png "Location time and distance last month")](/images/stats/2018/feb/location-time-distance.png "") .
[![Location time and distance this month](/images/stats/2018/mar/location-time-distance.png "Location time and distance this month")](/images/stats/2018/mar/location-time-distance.png "")

Long hours spent on vehicles this month. I decided to visit my parents, and it requires at least 12 hours on a bus 😬. My time walking is almost the same.

[![Kms to the moon](/images/stats/2018/mar/location-moon.png "Kms to the moon")](/images/stats/2018/mar/location-moon.png "")

### Expenses

It's time to check my expenses! 💸

[![Expenses by category this month](/images/stats/2018/mar/expenses.jpg "Expenses by category this month")](/images/stats/2018/mar/expenses.jpg "")

The chart seems to be back to normal. The "Moradia" (kind of a
mortgage) section increased because I was not considering it in the
previous months.

I'm also not considering the money in transit from my company to my
personal account (waiting for money exchange, taxes, accountant,
etc.). So, without considering it, my total savings **increased by
3.20%!** Now I have **87.93%** of my goal.

### Time to write this blog post

Some people are asking me about how much time it takes to collect all
the data and write the blog post, so I decided to add this metric

**It took around 4 hours**

It actually was 3:21 in my tracking software, but I spent a little bit
more than that.


### Conclusion

It's confirmed that I finally have my old routine back. It took almost
10 months to get used to the new job and feel comfortable about my
tasks to be able to focus on other things as well. This is a useful
metric per se. :)

I have a great trip scheduled for March, and it will probably impact my
metrics. Let's see how it goes! :)

See you next month. 🖖
