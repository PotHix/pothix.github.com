+++
title = "My 2021 Productivity Workflow"
date = "2021-05-12"
tags = ["personal", "english", "productivity"]
+++

_This post is the updated version of [the one I wrote in 2019](/workflow2019).
Instead of changing the previous one, I decided to create an updated version
based on that._

From time to time, I receive questions about my productivity workflow and I
think it will be useful to have it written down somewhere. This post will
describe how I'm dealing with it in 2021.

## Tool

As you probably know, [I work for Doist](/post/doist) for some time now,
and I'm a Todoist user since 2007, so the my tool of choice is quite obvious.

I love how [Todoist](https://Todoist.com) brings simplicity to creating and
managing tasks. Things become even better when you add filters to the mix. 😉

The organization for my top level projects looks like this:

+ **Personal**: Anything personal like money, investments, random thoughts, etc.
+ **Aulë Software**: It's my company name. This project holds bureaucracy of having a BR company, things to pay, people to reach, etc.
+ **Work**: Everything related to my full time job. It's probably the one with more sub-projects and tasks
+ **Hobbies**: I have many, so I have a project for each. Examples: Drums, MTG, Cardistry, Photography, etc.
+ **Me & Wife**: A shared project with my wife. Anything we do together we add there.
+ **Calendars**: Projects I use do bring tasks from my calendar to my Todoist.
+ **Others**: Projects I could not fit in any other category. Example: Todoist integrations

Most of these top level projects have have their own sub-projects.

## Process

I use due dates to guide my life inside Todoist. Every day I open Todoist and
find what I have to do during that day.

When I have something in mind it goes to my `Inbox` project. It doesn't matter
if I'm at the computer or walking on the street, I just open Todoist and add it
there so I can do the triage later.

I try to apply the [Getting Things Done](https://gettingthingsdone.com/) idea,
but my own version of GTD looks like [Zen To
Done](https://zenhabits.net/zen-to-done-ztd-the-ultimate-simple-productivity-system/)
to be honest. The principles are the same in the end, but the methods differ.

Both methods say you have to process your `Inbox` at least once a day, and
that's exactly what I do. Every task I add to my `Inbox` in project on Todoist
will be processed and added to the right project with a possible due date so it
will pop up in my Today list in the future.

It doesn't matter much if I will finish all of the tasks or not, but they are
there to remember me what I planned for that day and what is important to keep
focused on. If I can't finish at the end of the day I postpone for the next or
find a due in the future where this task will it makes more sense to do it.

I tried many times to use a label for next actions instead of using dates, but
it requires a time consuming periodic review and I was never very good at it.
From time to time I give a try to the "Next actions" via label though.

**Everything** I have to do is added to Todoist. I don't keep any task hanging
around in my mind because I don't want anything asking for attention when I have
to focus. If there's something to do on Monday, I can rest assured that Todoist
will notify me about that in the right day and time.

## Recurring tasks

There are two types of recurring tasks for me: daily tasks and other recurring
tasks

### Daily recurring tasks

I have some recurring tasks to be sure I do the things I have to do every day.
It's important to make time for the things you care about, sometimes they are
work-related tasks but you also have other things in life to take care of.

Here are some of them:

+ Check a Slack group of friends I want to keep in touch
+ Check the Discord of the conference/community I'm currently a core organizer
+ Remember to track my progress on Goodreads and write reviews
+ Be sure my Inbox is processed
+ Check my board of tasks at work
+ Review all code review tasks that require my attention (to not block others)

These are usually tasks that I have to remind myself to do. Every time I miss
some event or forget to do something it becomes a recurring task so it will not
happen again.

### Other recurring

These are tasks that are recurring but they are not present every day. Some
examples of tasks:

+ Bills to pay (usually once a month)
+ Review my life insurance (usually once a year)
+ Send [a random email to my future self](https://futureme.org) (every 6 months)
+ Download free HTML templates from themeforest (every month)

It's been almost 5 years since I started downloading the free themes from
themeforest every month and I have a good collection of them for personal
projects. I've been doing this consistently during these years, thanks to this
process.

You may have better things to do with your recurring tasks, these are just
examples that are important to me.

## Filtering to avoid distractions

I use Todoist filters a lot!

Filters are very useful to... hm... filter non-important tasks from your current
focus mode i.e. if you're doing deep work, you don't need to know your routine.

The method I use the most at the moment (and recommend) is the peak, trough,
rebound one mentioned on [When: The Scientific Secrets of Perfect
Timing](/when). The others are also useful but not my main workflow nowadays.

Let's break down my filters and explain their usage 🙂

### Peak, trough, recovery

* Peak —  _`(@peak | p1 | (@Gcal & due before: +4 hours & !overdue)) & today & (assigned to: me | !assigned)`_
* Trough —  _`(@trough | (!@peak & !@recovery)) &  today & (assigned to: me | !assigned)`_
* Rebound —  _`(@rebound | @peak | p1 | p2) & today & (assigned to: me | !assigned)`_

As you can see, I also rely on Todoist labels to mark the tasks I want to have
in each of these chunks.

I used the [Daily when
tracker](https://www.danpink.com/wp-content/uploads/2018/01/time-sheet.pdf) to
check when was my peak, trough, and recovery times:

![A sheet of paper with something that looks like a chart showing the times I feel more productive](/images/posts/productivity_dailywhentracker.png)

As you can see, my peak time is usually in the morning, so I use the **peak**
filter in the morning to be sure I use my energy in the right way. I wrote a
good article about this at the [Doist blog](https://blog.doist.com/daily-schedule/).

The **peak** filter lists all the tasks with the **@peak** label or the ones
that are priority 1 for me today. I also list any tasks related to my calendar
by filtering the tag **@Gcal** and retrieving the ones that must be done in the
next 4 hours. I sort the tasks by priority and do them in order whenever
possible.

The **Trough** label is used right after lunch, when I know I usually don't have
enough energy. I use this time to do everything that don't require that much
concentration to finish (email, team discussions, simple code reviews, etc).

The **Rebound** filter is used when I have part of my energy back and it's time
to get that final boost before ending my day of work.

Rebound is a bit more complicated because my days are not very simple to
organize nowadays as a parent of twins. Sometimes it happens in the afternoon,
but sometimes it happens after 22:00, when babies are sleeping.

### Deep work filters

For some time I used a simple version of the "peak, trough, rebound" method and
just labeled my tasks as deep and shallow work, based on concept of [Deep
work](/deepworkbook) by Cal Newport.

If you don't know the concept, it basically tells you to reserve chunks of your
day to work on things without distractions. It means: no cellphones, no social
media, no chatting, no email, etc.

I usually have the following filters as favorites:

* Deep @ Work -- _`(today | overdue)  & (assigned to: me|!assigned) & @deep_work & ##Work`_
* Shallow @ Work -- _`(today | overdue)  & (assigned to: me|!assigned) & !@deep_work & ##Work`_

The "`Deep @ Work`" filter gets all tasks from projects under my "`Work`"
project that should be done `today` and have the "`@deepwork`" tag.

The "`Shallow @ Work`" filter is almost the same but it takes everything
**without** the "`@deepwork`" label. Everything else without this label is
considered shallow work.

This is a simpler way to achieve the same idea of deep work, without having to
worry about energy levels or dealing with it "in your head".

### Priority filters

I also have some filters based on the tasks I set priorities, so I can quickly
see what should be a priority for my day instead of just reacting to what is
going on. It doesn't work all the time because [urgent and
important](https://miro.medium.com/max/1120/1*tDk8uelQtJnpx33rIQVjjA.png)
things sometimes pop up, but it gives me a clear view of what my priorities
are.

Here are the filters I have:

+ Priority today -- _``(today | overdue) & (assigned to: me|!assigned) & p1_
+ Priority @ Work -- _`(today | overdue) & (assigned to: me|!assigned) & (p1 | p2 | p3) & ##Work`_

These two helps me when I just want to focus on the work I have to do today.
Sometimes I have personal things that are also priority, so I keep both
together, but I mostly use the `Priority @ Work`.

## Integrations and automation

There are some automation you can use based on Todoist. You don't have to be a
programmer to set this up and I totally recommend the usage of
[IFTTT](https://ifttt.com) and [Zapier](https://zapier.com) if you're using
Todoist.

### Shopping list

I keep a shopping list in Todoist shared with my wife. Every time we see that
something is missing and have to be bought, we try to add it there right away.

In the past, I used the location reminder for Todoist in on my phone, so it
reminds me to check that list every time I'm nearby a local supermarket. It's
still enabled but the pandemic changed everything and I'm not going to the
supermarket anymore (doing everything online).

Every time I check a task, IFTTT sends a message to a group chat in Telegram,
informing my wife that it's done so she will not buy it again. Sometimes we
forget to check the list, so it's helpful to get a reminder that it was bought
already.

### Automatic sharing on Twitter

I'm currently using Todoist to track the articles I wanted to read. Some years I
used [Pocket](https://getpocket.com), but I found it was serving as a bookmarks
app instead of a list of things I want to get done. Do you know what app is
perfect to add things you want to get done? Yes, TODOIST! :)

I have a list of articles on Todoist and schedule them for reading when I have
enough time (**trough**? 🙂). If I think the article may be useful to someone, I
add a **@twitter** tag and complete the task when I finish reading (and [make my
notes](/knowledgebase)).

I have an applet on IFTTT that gets all completed tasks on my "🗒️ Read" project
and adds it to [Buffer](https://buffer.com) if it has a **@twitter** label. By
doing that I keep an informative social presence.

## How a typical day looks like

The day is much more chaotic than [what it was in 2019](/workflow2019). I wake
up when it's time to wake up (depending on how much I was able to sleep and if
the babies are sleeping or not) and prepare some breakfast. After breakfast I
go to my office (at home) and start working.

I click my **peak** filter and start checking tasks one by one and interacting
with my team while we still have a timezone overlap. I try to squeeze as much
deep work as I can in these ~2 hours while things are manageable.

Around noon I go for lunch and get back for my **trough** section. Things tend
to be lighter at this time of the day. Sometimes my wife needs help with the
babies and I take some time to stay with them (the power of async. I just work a
bit more at night).

In the afternoon (~16:00) I start my **reboud** and switch to the right filter.
Again, I try to squeeze as much deep work as I can here but it's usually not
easy and sometimes I have to do it in small chunks, which is not recommended
(and I totally see why, but that's what we have for the moment).

At the end of the day, I postpone my tasks (if any) or just let them become
overdue to be postponed quickly via Todoist on the next day. I usually do the
planning for the week every Friday, so everything should be ready for the next
day.

### Calendar

I use Google Calendar since I started using Gmail (~2004?) and the integration
with Todoist is very useful for me.

Todoist has a 2-way-sync integration with Google calendar, but I don't care much
about using it that way. What I do is to bring everything I have on Google
calendar to my Todoist so I can better plan my day only relying on one tool.

I mentioned I have a **Calendars** project and I use it as an umbrella to 2 other
projects. These projects have the name of two of my calendars: my personal
calendar and work calendar.

I use the option to sync "A specific project" and just sync one of those empty
projects. I never add anything there, their role here is to bring my calendar
events to Todoist tasks with dates and times.

I have a policy of disabling all the notifications when doing focused work and
totally recommend it. The only problem is that you also miss some important
notifications. When I integrated my calendar with my Todoist, I was able to know
exactly what I have to do and can do my peak work without worrying if there's
something important I'm missing.

## Conclusion

I've improving my process since 2007, when I started looking for a productivity
tool and found Todoist. It requires a lot of practice to have a working
system/process.

I used different tools along the way (Remember the milk, Toodledo, Habitica,
Thingking Rock, Google keep, and the list goes on) but I always came back to
Todoist because I really like it. It's not by coincidence that I'm working for
Doist, I think about that since the beginning, but decided to apply for it in
2017.

**I love Todoist and I totally recommend it! It's worth mentioning that it's not
about the tool, but your mindset, and how you organize your process.**

Something important to keep in mind that **persistence is important**. Your
process will certainly fail (as the one I described do), but you will improve it
and make it (and yourself!) better in the process. If it's not working, just
think about it and adjust it to match your way of doing things.

Stay focused and productive 😉

## Final notes

If you read my [previous post](/workflow2019), you may be wondered what happened
with the [routine section](/workflow2019#routine). The answer is simple: Twin
babies. 🙂
