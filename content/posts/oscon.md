+++
title = "OSCON 2015"
date = "2015-07-27"
tags = ["events","english"]
aliases=[
  "post/oscon",
  "2015/07/27/oscon.html"
]
+++

**TL;DR** I've been at OSCON this year (thanks to
[Locaweb](http://locaweb.com.br)) and this post will summarize my
impressions about the conference. I spoke at Locaweb Tech-Talks about it and
[you can find my slides
here](https://docs.google.com/presentation/d/1yR7aEIVJdznAASNvaNW0AjUDmgA5qvOstOHhSP1JLDM/pub?start=false&loop=false&delayms=3000)
(in portuguese).

[OSCON (Open Source Conference)](http://oscon.com) is one of the most
important open source conferences of our time and happened in Portland
this year as usual.  Portland is a great city, the one I liked the
most until now, it doesn't have high car traffic, MAX (the train) took
us for most of the places we wanted to know, nice people all over the
place, great convention center and a lot of other benefits.

### July, 20

The conference started at 9:00 am of July 20, 2015 with the first day of
tutorials. In the first day I followed the **Kubernetes tutorial** and it was cool.
I had the chance to talk with Google guys about it and try Google
Computing Engine, which was very nice.

### July, 21

The second day was filled with more tutorials and I chose RUST and Cassandra.

#### RUST

Was a good tutorial with a lot of exercises and good tips of the
language. I really liked it and I'll probably give
[Rust](http://rust-lang.org/) a try on the next months.

#### Cassandra

I was expecting a different thing from this one. It was based on how
to use [cassandra](http://cassandra.apache.org/), create tables and so
on and I was expecting tips on how to create and scale it and maybe a
little bit about the caveats we may found on the way. But it wasn't
bad at all, I've learned a little bit on how to use it and as a gift I
tried a little bit of spark as well.

At the end of this day the Expo hall opened for everyone, cool things there
(including some T-shirts... T-shirts everywhere).

### July, 22

Let the conference begin! :)

It started with the keynotes at 9:00 and I would like to highlight one of them.
All keynotes [are avaiable on
youtube](https://www.youtube.com/playlist?list=PL055Epbe6d5YhDchEvY3O4nIuSLYyrx7K)
btw. :)

#### Facebook open source at scale (Keynote)

I like to understand the open source culture behind these big
companies. It is really interesting to know that there are only *2*
people to handle all the facebook open source process shocked me a
litte bit. They have a great open source review and publishing process
and all the softwares they release are running in their production
environment. So, why do they do open source software? Because it's
good for the company, helps them to make better software and bring
smart people to work with them.

And then the multiple sessions started, a lot of great subjects in the agenda
and you have to choose one (!!!).

#### Roller Coaster Tycoon with genetic algorithms and Go

The speaker
[Kevin Burke](https://kev.inburke.com/kevin/roller-coaster-tycoon-genetic-algorithms/)
spoke about his hobbie of playing with
[roller coaster tycoon](https://en.wikipedia.org/wiki/RollerCoaster_Tycoon)
game maps with Go and Genetic Algorithms in order to create de best
roller coaster ever! It is not there already but the presention was
really cool to follow.

#### You type "google.com" into your browser bar and press enter: What happens next?"

The speaker for this talk is
[Graeme Mathieson](https://twitter.com/mathie). I was planning to
spoke about it before de last edition of
[DevInSampa](http://devinsampa.com.br/) (2012? Btw, it could happen
again...) but didn't had the guts to make it yet and there it is,
someone made it before me. The pace of the presentation was not good
but the content was cool (it was his first presentation). At least it
made me think more about this topic and _maybe_ I'll try to speak
about it soon.

After the lunch I tried to attend to **Evolution of information
security threats** presentation but the room was full, so decided to
go to [Matrix](http://matrix.org/) guys presentation.

#### Fixing the fragmentation problem for real-time communications

Matrix's is really interesting, the main idea is to make a
protocol for messages, just like the email protocols do for our
email, we may use our client and store our own email but it is not
possible with today's messaging like hangouts, whatsapp, telegram,
skype and so on. They had a live demo piloting a quadricopter via
chat, it was really cool.

#### High adventures in sniffing my own metadata

The speaker is [Josh Deprez](http://matrix.org/) from Google
Australia. He described his work using a Go program (home made) to
analize his own internet traffic and which information he got on
it. The presentation itself was cool to follow but the discoveries
wasn't so much interesting. :P

#### Building the $9 computer, or how I learned to stop worrying and love embedded Linux

This is the
[C.H.I.P project](https://www.kickstarter.com/projects/1598272670/chip-the-worlds-first-9-computer)
owner **Dave Rauchwerk** speaking about the story behind the
project. This guy is hilarious and a real hacker, he made a gif camera
just for the lulz and tried a product with it!  Unfortunately it was
too expensive, to be viable for selling, so he decided to create
C.H.I.P to make the camera cheaper and C.H.I.P became the product by
itself.

#### Continuous delivery and large microservice architectures: Reflections on Ioncannon

This last one was really interesting **Kevin Scaldeferri** from
[New Relic](http://newrelic.com) spoke about how they grown from a big
and monolythic Rails application to 250 microservices. In short, it
was a mess in the beginning, a lot of techlologies and deploy tools
until they organized and found a standard for the language and deploy
tools, it is really better now, but the old Rails app is still there.

### July, 23

A new day with an typical American breakfast at Denny's and starting
with keynotes at 9:00 AM again.

#### Making architecture matter (Keynote)

[Martin Fowler](http://www.martinfowler.com/) spoke about architecture
in general, there was some good quotes. One of the arguments that
really make sense is that the today's "Architect" is that guy that
don't write code (!?). How can a professional that doesn't write code
talk about how to write code? Another good point was about the user
perspective about architecture it can't see it anywhere but still need
to pay for it! We need to argue using economic principles in order to
be able to create a good architecture for our softwares because
economics always win.

We have a lot of examples of products that were the market leader for their
segment and it could not evolve anymore to the point that it was swallowed by
another competitor. This is a sign of bad architecture.

#### You code like a sysadm

hm... This talk was not so good but it left a message for everyone:
"Bad code is still better than no code at all"

And obviously: Good code is better than bad code.

So, instead of not doing something because you think your code is not good
enough, do it and improve as soon as possible.

#### When Performance Counts: C++ in the 21st Century

The speaker threw some good arguments that haven't came to my mind until this
day: "Why is C++ getting more attention these days?", we have C++11 being
created and more people talking about it. In his words, the world was not in
need for performance anymore, we had big computers and most of time the other
languages (java, in his examples) are doing a good job to create what is needed
without the need to manage memory by hand. But today we have some other
hardwares that need this performance back, like tablets, mobile devices, cloud
applications that pays based on cpu time and so on. Good catch man! :)

#### Creating an open source office: Lessons from Twitter

I made a bad choice based on the presentation title and changed rooms as fast as
I could to follow this one.

Some notes on the presentation:

* Ensure projects have owners or give it to the community: this is the
  twitter example of
  [Twitter bootstrap](http://getbootstrap.com/2.3.2/)
* Always say Thank you for your project collaborators
* Lessons from [mesos](http://mesos.apache.org/)
  * Apple uses mesos for Siri
  * Open source foundations force good pactices on you (incubated aurora)
* Lessons for [twencache](https://github.com/twitter/twemcache)
  * Keep track with the upstream if you fork something
  * Share your code with some peers to gauge interest
  * open source project with collaborators is better

A good lesson that I got from this presentation is that community
doesn't come for free. Companies like Twitter have their own community
managers, conference speakers, conference organizers, documentation
writers and their developers to make everyone engaged with the
project. Throw something on github and expect collaboration is not the
best idea for OSS.

Your employess may become open source celebrities sometimes, and if they became
popular they may leave the company. It is not so good for the company but the
same popular projects may attact new talents as well. :)

Troll's are everywhere and youy will always hear that your project is stupid and
useless. The best way to deal with it is to take it as a compliment because
people care enough to say it.

#### Mesos the OS for your datacenter

David Greenberg from [Two sigma](http://www.twosigma.com/) spoke about how they
built their own [mesos](http://mesos.apache.org/) framework.

Mesos has a high level API to do things and you don't need to care about the
resources. It provide an algorith called
[DRF](https://www.cs.berkeley.edu/~alig/papers/drf.pdf) for a fair allocation of
resources.

There are several built frameworks for mesos like Marathon, Aurora, Jenkins and
some more. It's easy to build your own framework (netflix, twitter, apple and
two sigma have it). A good reason to build your own is to deal with some exotic
workload, this default frameworks are built for small tasks.

For me, mesos is the future and I'll definitely be looking for it.

### July, 24

This was the last day of the conference and it started with 3 keynotes. After the
keynotes there was two sessions more and the conference ending at the main ballroom.

#### Hacking Conway's Lay (Keynote)

> organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations
> —M. Conway[2]

When rebuilding a system it's really important to think about your team because
it will be part of its architecture like conway's law says. So when a decision
is made to build a new system without changing the way people work you will face
the same problems the other system had but with a different code.

Doesn't matter if you're using microservices but your team is still monolithic.

> To solve technical problems, you often have to go outside the technical domain.
> Raffi Krikorian

Good points that ended the presentation:

* It's not all about the code!
* Small teams can do big things.
* Full stack teams keeps your architecture flexible.
* Don't fight Conway's Law, work with it.

A lot of good lessons learnt from this one. :)

#### Build a botnet?

The speaker ([Bryan Smith](http://fossetcon.org)) did a great (and funny :P)
presentation around the topic. And some things are really scary when speaking
about botnets. The most scary thing for me was its price, you can use a botnet
for an hour spending only $5... it is really low and probably will get a service
out of business for that time. There are some softwares avalable if you want to
build your own botnet these days (accorting to Bryan, if you want to build a
botnet you're probably a scumbag... LOL), here are some of them:

* citadel
* kreios C2
* Andromeda V2.6 - leaked
* Kaiten IRC bot
* SDBot - GPL
* DSNX Bots
* Q8 Bots

I'll not post links here but you can google them if you really want it. :P

The most funny part of the presentation was its end when the speaker laptop got
rebooted when trying to bring the botnet up. LOL

#### Freedom and responsibility @Netflix: Centralized team in a decentralized world

One of the best presentations of the
conference. [Mike McGarr](http://www.mikemcgarr.com/about.html) spoke
about his team (tools team) role at
[Netflix](http://techblog.netflix.com/) and the hacker culture there.

One of the team roles is to increase the rate of innovation and reduce
the impact of change by providing good tools for the other teams. Their clients
are the other teams engineers, it's not a simple internal system it's a product!

Netflix has a
[great culture](http://www.slideshare.net/reed2001/culture-1798664) and each
team as a subset of this culture.

Netflix has a lot of good tools but the engineers may choose to not use it and
build their own in case it doesn't fix their problems. For this reason there are
4 deploy tools running on Netflix actually.

They have no Ops team, you build it, you support it! And in order to remove part
of the constant interruptions, the team uses a "responder rotation" when each
time (day, week, month?) a new engineer will be in charge of solving problems
and helping the other teams.

They (like many of us) don't like ticket systems, but they use it anyway (like
many of us?). For this case the tip is: Make creating a ticket easy, minimize
fraction by making it as easy and fast as possible.

Hackatons are made between the team in order to keep the innovation process
flowing and making space for innovation. Another good thing to think about is to
always hire beyond your needs, it makes more space for innovation (not all
people working on day to day tasks) and it will be really helpful when the
project is on fire and the team needs more intensity on it.

Communication is really important for the teams and they do not set a limitation
for important communications like framework versions and DC migrations. For this
task they use hipchat, email, banners and everything that may call the
engineers' attention.

#### Situation normal, everything must change

This was the last keynote and maybe the best one, and I highly recommend you to
[watch it](https://www.youtube.com/watch?v=Ty6pOVEc3bA).

Simon Wardley used the fact that OSCON is moving to speak about situation
awareness and what could happen when you're not prepared for a new thing.

His arguments are that we're using the wrong maps to try to understand our
problems. In business we use [SWOT](https://en.wikipedia.org/wiki/SWOT_analysis)
for example, which is really bad to understand to understand the whole picture,
it was really funny to see his comparisons with
[the battle of the 300](https://en.wikipedia.org/wiki/Battle_of_Thermopylae)
using a SWAT map instead of land map. LOL

The speaker shows some maps he uses for his business, and it looks really better
than just a SWOT. :)

Again, I really recommend you
[watch this talk](https://www.youtube.com/watch?v=Ty6pOVEc3bA). I liked it. :)

### Conclusion

The best conference I ever attended. Everything was great: hotel, Portland
Conference Center, the city in general, the food, the conference content and so
on. It definitely worth the 14 hours plane travel to be there.

I would live in a city like Portland, it is one of the best cities I ever
visited. I'm sad to know that the next OSCON will happen in Austin instead of
Portland. :(
