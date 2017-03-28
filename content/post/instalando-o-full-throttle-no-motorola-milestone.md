+++
title = "Instalando o Full Throttle no Motorola Milestone"
aliases=["2011/03/03/instalando-o-full-throttle-no-motorola-milestone.html"]
date = "2011-03-03"
tags = ["android","games","motorcycle"]
categories = "android"
+++

[![Foto do full throtle rodando no meu notebook toshiba](/images/posts/full_throtle_pothix.jpg "Full throtle rodando no meu toshiba")](/images/posts/full_throtle_pothix.jpg "")

Logo depois que eu comprei a minha
[Dragstar 650](https://picasaweb.google.com/lh/photo/HIT3xHsxwbk29ZWpW4x0wA?feat=directlink),
me deu uma grande vontade de voltar a jogar full throttle (por que será, né?), e
eu comecei a procurar uma forma de fazer isso.

Eu tenho o jogo (o CD-ROM mesmo) ripado no meu computador, e agora só faltava emular ele.

Procurando na internet eu achei o [scummvm](http://www.scummvm.org/) que emula
os games da [LucasArts](http://www.lucasarts.com/) em várias plataformas! Baixei
o .deb e comecei a jogar no Ubuntu. Rodou bonitinho e estava gostando pra caramba!

Depois de jogar um pouco eu me toquei que eu não tenho tanto tempo para parar na
frente do computador e ficar jogando, e não é nada prático ficar levando meu
notebook para lá e para cá, portanto eu precisava de uma maneira mais portátil
de jogar o game, e consequentemente isso me levou a pensar em como fazer o game
funcionar no meu Android (um motorola milestone).

Procurando no [site do scummvm eu encontrei um build para Android
(um .apk, bonitinho)](http://www.scummvm.org/downloads/), mas ao tentar instalar no
Milestone ele não funcionou, devido as modificações na versão do NDK, pois a
versão oficial do build que está no site é um pouco antiga. :(

[Procurando nos fóruns por ae](http://forums.scummvm.org/viewtopic.php?t=8137&amp;postdays=0&amp;postorder=asc&amp;start=30)
eu [encontrei uma versão feita em cima de um commit mais recente](http://anddev.at.ua/load/scummvm_svn55436/1-1-0-7)
do antigo svn (agora eles estão usando Git e o projeto está no
[GitHub](http://github.com) \o/) do scummvm.

Baixei o .apk e instalei no Android. Após algumas configurações do SDL tudo
funcionou beleza e o scummvm abriu bonitinho! Agora é só colocar o meu full
throttle ripado no SD e falar para o scummvm dar o load.

Seja bem vindo ao mundo dos polecats novamente! :D



_Old comments by: Tino Gomes | Not available anymore. :(_
