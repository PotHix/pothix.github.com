---
title: "Ativando numlock na Inicialização do Fluxbox no Slackware"
date: "2008-11-13"
tags: "slackware,tech"
category: "slackware"
---

Æ!!

Pessoal, estava eu pesquisando na internet como conseguir fazer o meu numlock já iniciar ativado quando meu fluxbox inicia e encontrei várias dicas, sendo umas para XFCE e outros sistemas não sendo Slackware, portanto decidi escrever como fiz no Slackware.

Primeiramente precisamos do [numlockx ](http://ktown.kde.org/~seli/numlockx/ "Numlockx")que é o programinha vai ativar o num facilmente.

Podemos instalar [ele](http://slackbuilds.org/repository/12.1/system/numlockx/ "Numlockx no SlackBuilds") via [SlackBuilds](http://pothix.com/blog/slackware/facilitando-a-instalacao-no-slackware "Slack Builds") que eu uso muito!

Após baixar o **numlockx.tar.gz** e o **numlockx-.version.tar.gz** vamos seguir os procedimentos do SlackBuilds:

<code>$ tar xvf numlockx.tar.gz
$ mv numlockx-version.tar.gz numlockx
$ cd numlockx
# ./numlockx.SlackBuilds</code>

Pronto! Seu pacote já está no seu /tmp ! :)
Agora só instalar com o pkgtool:
<code>
#installpkg numlockx.tgz</code>

Agora é só inserir a seguinte linha no seu ***~/.xinitrc*** :
<code>
exec numlockx &amp;</code>

E da próxima vez que inicar o seu Slack seu num vai acender automágicamente! :P

Há braços
