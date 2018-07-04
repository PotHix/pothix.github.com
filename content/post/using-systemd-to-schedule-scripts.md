---
title: "Using Systemd to Schedule Scripts"
date: 2018-05-27
draft: true
---

systemctl --user daemon-reload

systemctl --user stop pcm_movies.timer
systemctl --user start pcm_movies.timer

systemctl --user list-timers

reference: https://niels.kobschaetzki.net/post/2015-11-11-creating-systemd-timers-instead-of-a-personal-crontab/
