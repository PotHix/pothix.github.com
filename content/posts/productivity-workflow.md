+++
title = "My Current Productivity Workflow"
date = "2019-08-15"
tags = ["personal", "english", "productivity"]
aliases=[
  "post/my-current-productivity-workflow"
]
+++

From time to time, I receive questions about my productivity workflow, so I
decided to write it down here. Keep in mind it's a living thing and may change
with time, but what I'm documenting here is what I'm using right now.

## Tool

As you probably know, [I work for Doist](/post/doist-pothix) for some time now,
and I'm a Todoist user since 2007, so the my tool of choice is quite obvious.

I love how [Todoist](https://todoist.com) brings simplicity to creating and
managing tasks. Things become even better when you add filters to the mix. 😉

The organization for my top level projects looks like this:

+ **Personal**: Anything personal like money, investments, random thoughts, etc.
+ **MyCompany**: Bureaucracy of having a BR company, things to pay, people to reach, etc.
+ **Work**: Everything related to my full time job. It's probably the one with more sub-projects and tasks
+ **Hobbies**: I have many, so I have a project for each. Examples: Drums, MTG, Cardistry, Photography, etc.
+ **Me & Wife**: A shared project with my wife. Anything we do together we add there.
+ **Others**: projects I could not fit in any other category. Example: todoist integrations

Most of these top level projects have have their own sub-projects.

## Process

I use due dates to guide my life inside todoist. Every day I open Todoist and
find what I have to do during that day.

When I have something in mind it goes to my `Inbox` project. It doesn't matter
if I'm at the computer or walking on the street, I just open todoist and add it
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

**Everything** I have to do is added to Todoist. I don't keep anything in my
mind because I don't want anything asking for attention when I have to focus.
If there's something to do on Monday, I can rest assured that Todoist will
notify me about that in the right day and time.

## Routine

I love routines, but it's important that I'm able to have full control over
them, and that's exactly what I have. I built my current routine based on my
schedule, my wife's schedule, the times I feel more productive, and other
studies I did to myself through the years.

Every weekday I have at least 8 tasks that are fixed and define my routine:

+ [06:00] Wake up and prepare breakfast
  + I have some notes on this one. Sometimes I want to prepare a different
    breakfast and never remember how to do it, so it's there
+ [08:00] Walk the dog
+ [10:30] Start the deep work session
+ [12:30] Go to the Gym
+ [14:00] Record body data
  + I try to quantify myself as much as possible. This is just a reminder to add my weight to the tracking app
+ [17:00] Start the deep work session
+ [19:00] Relax after a good day of work

These are the things **I want to do**. Sometimes people say things like: "You
let your task app say what you have to do", but is quite the opposite. I plan
what I want for my days and I use my task list to keep me focused on what I
want.

Some of these tasks trigger integrations that help me get laser focused on what
I want to do. A good example is the `Start the deep work session`, as it
triggers the "Focus time" of [rescuetime](https://rescuetime.com) and block
sites I consider not productive.

## Reccuring tasks

I have some recurring tasks that are not part of my routine and they are not
related to work. It's also important to make time for the things you care
about, not just work-related tasks.

Here are some of them:

+ Check a Slack group of friends I want to keep in touch
+ Check the Discord of the conference/community I'm currently a core organizer
+ Remember to track my progress on Goodreads and write reviews

Track my reading progress help me to stay on track. Writing reviews help me to
retain more information by reviewing it to myself.

## Filtering to avoid distractions

I use Todoist filters a lot!

Filters are very useful to... hm... filter non-important tasks from your current
focus mode i.e. if you're doing deep work, you don't need to know your routine.

I like to consume books, [my average is 30 books a
year](https://www.goodreads.com/author/show/15679564.Willian_Molinari), and
every time I consume a book that mentions productivity I try the method with
filters.

Let's break down my filters and explain their usage 🙂

### Peak, trough, recovery

* Peak -- _`@peak & today & (assigned to: me | !assigned)`_
* Trough -- _`(@trough | (!@peak & !@recovery)) &  today & (assigned to: me | !assigned)`_
* Recovery -- _`(@recovery | @peak) & today & (assigned to: me | !assigned)`_

As you can see, I also rely on Todoist labels to mark the tasks I want to have
in each of these chunks.

These filters came from the book [When](https://www.goodreads.com/review/show/2254843906).
I used the [Daily when tracker](https://www.danpink.com/wp-content/uploads/2018/01/time-sheet.pdf) to check when was my peak, trough, and recovery times:

![A sheet of paper with something that looks like a chart showing the times I feel more productive](/images/posts/productivity_dailywhentracker.png)

I also use the concept of [Deep work](https://www.goodreads.com/review/show/1601212243) described by the book with the same name.

This is the reason why I have the task "_Start the deep work session_" in the
morning and at the end of the afternooon.

### Deep work filters

Based on the same [Deep work](https://www.goodreads.com/review/show/1601212243)
book mentioned above, I also use `@deepwork` labels on Todoist so I can filter
the right tasks depending on my current mode.

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

### Priority filters

I also have some filters based on the tasks I set priorities, so I can quickly
see what should be a priority for my day instead of just reacting to what is
going on. It doens't work all the time because [urgent and
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

I mentioned the trigger I have for rescuetime's Focus mode but it's not the only automation I have. Here are some others:

### Shopping list

I keep a shopping list in Todoist shared with my wife. Every time we see that
something is missing and have to be bought, we try to add it there right away.

I have the location reminder enabled for Todoist in on my phone, so it reminds
me to check that list every time I'm nearby a local supermarket, which happens
almost every day because of my daily routine.

Every time I check a task, IFTTT sends a message to a group chat in Telegram,
informing my wife that it's done so she will not buy it again. Sometimes we
forget to check the list, so it's helpful to get a reminder that it was bought
already.


### Weekly snippets

Every week at Doist, we post a list of important tasks we did during the past
week and what we plan to do during the next.

I add a "`@snippet`" label to every task I want to report. When a task with a
"`@snippet`" label is completed, IFTTT creates a new task in a project called
"`Snippets`" with the completion date and the task project in the task title.

When I want to report that, I go the the "`Snippets`" project, click on the menu,
**Export as a Template**, and **Export as file**. I have a note in the same
project with a command the does the job of formatting that:

```
cat ~/Downloads/Snippets.csv | grep -v project_note | grep "task," | awk -F "," '/1/ {print "- " $2}'; rm /home/pothix/Downloads/Snippets.csv
```

So I can just post it to [Twist](https://twist.com).


## How a tipical day looks like

I wake up early (because that's what I want for myself, I don't have to),
prepare the breakfast, and take some time to eat and chat with my wife. We try
to not waste our time together looking at cellphones.

After breakfast I check my Todoist and what has to be done for the day, just to
be sure there's nothing pressing for the next 1-2 hours. If it's OK, I take
these 1-2 hours for myself. I'm now writing this blog post. ;)

After that, the [routine I described](#routine) starts. There are many other
tasks that are not part of my routine, so I use filters to focus on what I
think fits better for that time.

At the end of the day, I postpone my tasks (if any) or just let them become
overdue to be postponed quickly via Todoist on the next day. I usually don't
have anything pressing from 6-8 a.m. so I don't have to check my plans for
tomorrow every night.

## Final notes

I've been doing this since 2007, when I started looking for a productivity tool
and found Todoist. It's a lot of practice to have a working system/process.

I used different tools along the way (Remember the milk, Toodledo, Habitica,
Thingking Rock, Google keep, and the list goes on) but I always came back to
Todoist because I really like it. It's not by coincidence that I'm working for
Doist, I think about that since the beginning, but decided to apply for it in
2017.

**I love Todoist and I recommend it, but keep in mind that it's not about the
tool, but your mindset, and how you organize your process.**

Keep in mind that **persistence is important**. Your process will certainly
fail (as the one I described do), but you will improve it and make it (and
yourself!) better in the process. If it's not working, just think about it and
adjust it to match your way of doing things.

Stay focused and productive 😉


_PS:_ ⏱  _It took me 2h27 to write this blog post_
