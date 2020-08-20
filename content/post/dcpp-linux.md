+++
title = "DC++ no Linux"
aliases=[
  "post/dc-no-linux",
  "2009/02/09/dc-no-linux.html",
  "blog/ubuntu/dc-no-linux"
]
date = "2009-02-09"
tags = ["tech","linux"]
categories = "linux"
+++

Hoje finalmente estou conseguindo escrever um post sobre o DC++! Desde
a [Campus Party](http://pothix.com/blog/events/campus-party-2009 "Campus Party")
eu quero escrever esse post mas nunca consigo tempo!

Para quem não conhece, o
[DC++](http://dcplusplus.sourceforge.net/ "DC++ Official page on SourceForge")
é um software para compartilhamento de arquivos, muito interessante,
onde você pode facilmente compartilhar arquivos pela rede local, e por
isso mesmo que foi muito utilizado na Campus Party, onde os
campuseiros compartilharam terabytes e mais terabytes de arquivos!

Atualmente estou utilizando Ubuntu no meu notebook (não tenho mais PC
nem em casa e nem no trampo, portanto o meu Slackware se foi...:() e
vou mostrar aqui como instalar o seu DC++ nele!

Primeiramente vamos instalar as dependencias:

    sudo apt-get install bzr scons build-essential libgtk2.0-dev libglade2-dev zlib1g-dev libbz2-dev libssl-dev

Como é possível notar acima, estamos instalando tambem o
[Bazaar](http://bazaar-vcs.org/ "Bazaar version control"), que é o
software de controle de versão que o DC++ utiliza, infelizmente ainda
não tem os binarios para nenhuma distribuição por que ele ainda está
em alpha, por isso temos que fazer o download direto pelo Bazaar!

    bzr branch lp:linuxdcpp

Agora temos um branch local do DC++ no nosso computador, portanto é só
entrar na pasta e instalar:

    cd linuxdcpp
    scons release=1 PREFIX=/usr/local
    sudo scons install

Veja que criei um "PREFIX" para instalar em /usr/local. =)

Agora seu DC++ já está instalado e você pode executar ele usando o
comando:

    linuxdcpp

E pronto!

Agora é só clicar no botão connect e conectar ao endereço de
compartilhamento e já era! :)

No [site que tirei essas dicas](http://ubuntuforums.org/showthread.php?t=193984 "How to install DC++ on Ubuntu")
eles falam que é bom desabilitar o "Assistive Technology Support" por
que deixa o DC++ muito lento. É só ir em: **Sistema > Preferencias > ATS**

Espero que seja útil para vocês assim como foi para mim no Campus
Party!



_Old comments by: Jorge Pereira | Not available anymore. :(_
