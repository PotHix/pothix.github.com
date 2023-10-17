+++
title = "StrangeLoop 2023"
date = 2023-10-12
tags = [
    "english",
    "tech",
]
+++

I've been following the StrangeLoop conference for about 10 years now. Watching
some of the talks online, talking to friends who had the chance to attend in
the past, and following the news from time to time.

This year's edition would be the last one. When a friend of mine told me that,
I decided to make an effort to participate. It is a long trip to get to [St.
Louis](/places/stlouis) (~16 hours, door to door), but it would be worth it.

Below are my notes from the talks I attended. These are mostly raw notes, so
you're reading them raw as they come from my understanding watching the talk. I
didn't have that much time to review everything. 😅

## First day:

### [How to have a meaningful career](https://www.youtube.com/watch?v=_egQrM13qyM)

Nice talk. I like these kinds of talks that inspire you more than teach you one
or two commands or tricks in your favorite programming language.

- Everyone is an expert in something. I'm an expert in my own journey.
- Give yourself grace, even in hard moments.
    - To give myself some grace, I took a sabbatical.
- It's the "L"s that make us
    - The guy was ranting about HTTP to the guy who wrote the specifications
- Luck = opportunity+being prepared
- Scott hanselman (Microsoft) once had a presentation and two people showed up because Linus was speaking nearby.
- Two things can be good at the same time, you may be there for the money and be passionate about it.
- Technical resilience: do the job and persist
- Your task is not to foresee, but enable it -- Antoine de St Exupery
- Growth happens when you're stretching not when you're drowning. It's OK to deal with things that are more than you can handle, but just the right amount.
- She is speaking at the last conference she loved and attended for so many years.
- If you find meaning, and it's important to keep moving in that direction.

### [Playing with Engineering](https://www.youtube.com/watch?v=6Ao8GS488hA)

Another inspiring talk, especially for people who have kids. She shows that
engineering can be fun in many different ways, and this is her research.

- Talk by AnnMarie Thomas
- Playful learning lab
- Professors in STEM don't have training into actually teaching and the psychilogof it.
- Play is about process, not the outcome. Play involves freedom of choice. it's often social.
- Instead of using a soldering iron, she teaches her daughter with dough that conducts electricity
-  You can find sounds in everything. Looking for sounds in the house.
- "OK go sandbox" playlist on Spotify
- **Play is about process, not the outcome.**
- How can I create an engineering culture hat my kids want to be in?

### [The Attacker Has Expensive Radio Equipment, But Your Android Phone Is Resilient](https://www.youtube.com/watch?v=T7MnpMhlEU0)

Stop what you're doing and disable 2G from your phone right now. 😅 Yomna shows
the problems with radio protocols, especially the old ones. Your phone probably
still supports the old protocols, so there's a good chance you're still
vulnerable. The talk was nice.

- A view on implementing android radio security 
- Cell towers, BTS, etc.
- GSM (2g) LTE (4g). We will call GSM.
- AOSP (Android open source project)
- OEM (Original equipment manufacturers), companies who ship hardware with android
-  Bands of frequencies are pre-programmed in the SIM card, they are searched first.
- IMSI is the unique identifier of your SIM card. Must be kept private.
- TMSI is a temporary location identifier when connecting to a tower.
-  The phone is not always connected, it's mostly on idle mode waiting for the trigger to "wake up".
- In 2G, some clients even use a NOCIPHER, to not have encryption.
- Atlas of surveillance. org
- Swearing trojan from China (2017) - Link I read in the internet: https://www.linkedin.com/pulse/chinese-hackers-use-fake-cellphone-tower-spread-stu-sjouwerman/
- Broadcast of SMS may not be authenticated and attacks happen.
- Phones that still accept 2G are vulnerable. Android has a "Allow 2G" option that can be disabled.
- In AOSP, the hardware/interfaces/radio/1.6 directory contains the code to handle versions.
- yomna.net

### [Lessons from building GitHub Code Search](https://www.youtube.com/watch?v=CqZA_KmygKw)

This is probably the talk I liked the most. Luke was able to clearly describe
the problem they had, and why the architecture was not enough for it. He showed
the research they did and how they approached the problem step by step.

On each of those steps, he described what the problem was and how they evolved
the infrastructure to deal with it.

The solution looks great, and the lesson for me is to think about your solution
in a scalable way. Do it to solve a smaller version of the problem and iterate
over it to fix bigger problems. Be sure you can change/rewrite/add more small
pieces of the solution.

- Talk by [Luke Francl](https://github.com/look)
- https://github.com/look/lessons-from-ghcs
- Blackbird is the name of the search engine
- The goal of the system is to ask programmer's questions
- We rewrote it in rust 🦀
- Blackbird crawler is written in Go
- We use Kafka for message queue
- The cost for the CS cluster costs 4.5MM
- Lessons
    - purpose built software **can** make sense. Creating a search engine from scratch is complicated, but was worth it.
    - Every level f scaling bring new challenges
    - Designing for change is hard. It takes a lot of effort to make your system easy to change. If you can, design your system to be malleable.

### [Risks and Opportunity of AI in incident management](https://www.youtube.com/watch?v=K7c03xKzzzo)

I went to this talk to understand what was the idea behind the topic. I found
it to be too abstract. It was more related to ideas on how to use AI and how it
can contribute. Not really my kind of talk.

- Emily Arnott
- Maybe in an incident response, we should ask questions that are not formhumaes. Some very specific questions.
- Everything that is pulling you away from your plans must be planned accordingly.
- Challenges
    - It is time sensitive
    - expertise requeriment
    - coordination and communication
- Things to be careful about
    - black box
        - They don't know anything specific 
    - hallucinations
        - Some answers don't really make sense. Give everything another layer of sanity check.
    - Desynchronization
        - The model is not updated every day.
- Build a blameless culture for incidents
- Empower engineers with strategic perspective on how to use AI to enhance themselves
- Train engineers in AI operations and let them experiment with it.
- You need a robust and resilient process
- The benefits of AI has nothing to do with downsizing, it just helps a bit
- Risks
    - Technical debt with AI
    - Weird new bugs
    - Alienated engineers who can't use the new tools
- blameless.com/author/emily-rnott


### [Written comedy with generative models](https://www.youtube.com/watch?v=M2o4f_2L0No)

I don't have that many notes on this one, but it was **A-M-A-Z-I-N-G**. I
really recommend you to watch this video. It's not the kind of talk you learn a
ton of new tricks, but it's the kind of "programming art" that really brings
back everything that brought me to programming.

The talk was interesting and fun. Definitely worth watching.

- Is predictive text a makov chain?
- small models, small data and simple n-gram models
- Tokenization

### [The level of human involvement behind remote desktop protocol brute-force attack](https://www.youtube.com/watch?v=PxX5cYUKzY8)

This talk was less technical and more about the human interaction on the
attach. The did the setup of a honeypot and did some research on it. It was
nice to see the results of such a technique, but not very technical.

- Andreanne bergeron
- They used honeypots for RDP and collected 13 million attempts 
- 3427,611 attacks. 1.5k IPs
- 50% of the attacks came from Asia (Russia was clarified as Asia, and most are from Russia). Russia, HK, and Panama.
- They created a fake company to the honeypot and attackers used specific usernames related to that company.
- Users did some research before doing the brute force and tried specific Digital Ocean tooling names.


## Second day

### [Playable quotes for gameboy games](https://www.youtube.com/watch?v=z9JYOZWLMlo)

I really liked this one too. You can see the results at [tenmile.quote.games](https://tenmile.quote.games/)

They added a way to record playing games in NES emulators. They were able to do
that adding one line of code to the emulator to inject code that inspects
memory. The fact that they can add metadata to the screenshot of the game and
use it to import the quote and replay it is awesome. Such a great and fun
research. Definitely worth watching.

- Stenographically encoded pixels in the image. Its a zip file of 5 different things.
- A quote has the game rom, buttons pressed, save state, and a readme.
- Interactive tour m2.quote.games
- They used Binaryen to change memory

### [Economics of programming languages](https://www.youtube.com/watch?v=XZ3w_jec1v8)

Talk by the creaor of Elm. I was always curious about the creation of new
languages and how to earn money from it. It was interesting to see his
perspective on the topic (from experience) and analysis on different
programming languages and companies. Definitely an interesting topic and talk.

- Working on a programming languages was all intrinsic motivation
- Who pays for these?
- Progress and poverty book recommendation
- Traffic aquisition cost is very significant for Google. Its important for the company to be everywhere
- The open source way
    - You solve a problem yourself and give it away
    - Other things slowly come "for free" with people and intrinsic motivation. A lit of work to get to that though
- Independent languages
    - Recruiting
    - Consulting: which also takes the time from language work
    - Research grants
    - Editor licences
    - Hosting
    - Donations
- Design incentives
    - Add features? Yes: less conflict, NO: less complexity
- Patronage
    - Your job serves the purpose of a powerful person. What is it? What if it changes?
    - Working hard is not enough if you're not aligned to "the goal"
- Donations
    - People donate for their own personal reasons
    - "ill donators approve this?"
- Hosting
    - People use the service because is suits their needs.
    - "Will it be easier to make websites"
- For authors: "The open source way" is for businesses
- For language users: What are the goals of this language? What is the situation of the author? The trade offs suit your needs?

### [Unmasking the Godfather - Reverse Engineering the Latest Android Banking Trojan](https://www.youtube.com/watch?v=jNQmc2REwFg)

It is literally a reverse engineering of a trojan. Not many notes on this one,
but it was interesting to see the trojan working and how it tricks the user to
enable some kinds of features it needs. A bit eye openining on the technology
side and also in the user side.

- The malware keeps asking for accessibility services, create fake HTML pages when they detect important pages, steal credentials for the user

### [A Long Strange Loop](https://www.youtube.com/watch?v=suv76aL0NrA)

It was a great talk for me, personally. I organized conferences in the past and
plan to do it again. Listening to his experience during these 10+ years was
quite insightful.

The talk was also very emotional because it's something he is doing for more
than 10 years out of love. You can clearly see that. Leaving it behind is a bit emotional.

I also have a feeling that it is becoming harder and harder to make the
conference sustainable, given the history of past conferences he shared. The
pandemic made this even worse too.

Well, it was great to watch this and be able to be part of the crew given a
standing ovation to the organizers.

- Started in 2009
- 2008, peak time for meetup
- "I am a strange loop - Douglas Hofstadter"
- He wanted to connect people in a place he liked. His Uncle id that before.
- Important talk feedback
    - Every talk in the conference was in the list of favorite talks
    - multi-tracks are good
    - match expectations 
- Thrown for a loop (2013)
    - There was a teatrical piece and a presentation by Douglas Hofstadter.
- "The people are here. This is the conference"
- The grant program was very rewarding. They paid for people's hotel, conference, etc.
- Risks
    - signing contracts in advance
    - natural disasters
    - human disasters (terrorism, etc.)
- What is he future?
    - We have a big carbon footprint to fly everyone here
- Virtual conferences
    - When you are in a virtual conference, you don't have your "third place", you're usually at home or work.
    - Doing talks is hard, doing remote talks is even harder.
    - Maybe VR an help a bit n the future, but I'm not sure.
    - Is there something in between?
        - There are places for people to meet locally, it would be a way to unite them. Maybe a local conference? Company?
        - Async conference. People make local conferences and share with other groups. 💭 that's an interesting idea I'm going to think about
- Why is it ending?
    - It achieved everyone I want t to achieve.
    - It got harder and riskier to do these events. Is this the year I'm going to go bankrupt?
    - Strange Loop has a point of view, and etsmy point of view. If someone takes the conference, it will be a different conference. I can totally let you know everything I know if you want to do something like this.
    - It's OK for things to end.

### [Making Hard Things Easy](https://www.youtube.com/watch?v=30YWsGDr8mA)

This is the talk by Julia Evans. I've been following her work for many years,
as I wrote the [Desconstruindo a web](https://desconstruindoaweb.com.br/) book,
which has a similar idea of her zines.

It was a fun talk and I learned a lot of small things that can go wrong with
tools we use all the time. Definitely recommended.

- DNS shouldn't be so hard. Everyone is having the same probueover and over again.
- Bash does not stop. set -e to make it stop when there's an error
- shellcheck
- Share tools you're using to reduce cognitive load
- Finding the right references is not easy
- Understanding the whole process is a great activity to do with coworkers

### Drawing comics at work (no video yet)

This is a talk by the creator of the Xkcd comics. It was a fun talk. Did not
learn a lot, but it was interesting to learn more about how xkcd came to life
and became something most developers know and love. There are also some cool
stories behind the scenes.

- He had a talk at Google and got questions about Python by Guido and algorithms by Donald Knuth
- He is a physicist and was contracting with NASA before XKCD
- He created the "someone is wrong in the internet" as a satire for himself and other people doing the same.
- The playballs comic was a thought that became comic. Someone actually did it nd he tried too!
- I got Serena Williams to try to drop a drone
- I got responses from experts in many fields and many fun people.
- Chris Hatfield was interviewed by Monroe
- "You can write a good book even if your keyboard layout is not optimal" 😂

## Post-conference

There's one famous happy hour they do after the first day when people visit the
city museum, which is amazing.

They also had some sort of happy hour after the second day of the conference,
and I used this time to meet new people. 

I met a few people and randomly joined a group that was forming to discuss
local-first software. We discussed CRDT, [automerge](https://automerge.org/),
the ideas shared by [Martin Kleppmann on his talk about collaborative text
editing](https://www.youtube.com/watch?v=Mr0a5KyD6BU) and
[Upwelling](https://www.inkandswitch.com/upwelling/), and some personal
experiences with projects we're working on.

It was fun that I joined this group because I could share some experiences from
Todoist, which is a local-first app for many years.

## Conclusion

It was a great conference. I'm glad I had the chance to attend it. It was
expensive and I'm glad [the company I work for](/doist) help me to attend
these, otherwise, it would be quite complicated for me to go there. ❤️
