+++
title = "Configurando seu git para começar a usar"
aliases=[
  "2008/12/21/configurando-seu-git-para-comecar-a-usar.html",
  "blog/development/configurando-seu-git-para-comecar-a-usar"
]
date = "2008-12-21"
tags = ["tech","linux","dev"]
categories = "dev"
+++

Meu ultimo post foi sobre como subir um projeto para o
[GitHub](http://github.com ""), mas me veio agora uma vontade
repentina de falar como deixar seu git legalzinho para começar a criar
repositórios e contribuir com códigos! Serão apenas configurações
básicas, mas que são bem úteis quando você estiver usando o Git
ativamente!

Antes de mais nada precisamos instalar o Git, portanto é só baixar ele
no [repositório oficial](http://git.or.cz/#download) e fazer a
instalação referente ao seu sistema operacional.

* No meu Slackware já veio o Git instalado belezinha, portanto foi moleza! No máximo eu atualizei com o SlackPkg.
* No Ubuntu se eu não me engano eu precisei instalar, mas foi moleza, só baixar o .deb oficial e usar o dpkg -i :)

Vamos as configurações:

Primeiramente precisamos de configurar o nosso nome e e-mail:

    git config --global user.name "PotHix"
    git config --global user.email "PotHix@pothix.com"

Algora alguns Alias para facilitar:

    git config --global alias.st status
    git config --global alias.co checkout
    git config --global alias.ci commit
    git config --global alias.br branch

Agora algumas cores para facilitar a leitura quando digitarmos os comandos:

    git config --global color.status auto
    git config --global color.branch auto
    git config --global color.diff auto

Podemos já criar um projeto simples e enviar para o
[GitHub](http://github.com "") assim como eu fiz no
[post anterior](http://pothix.com/blog/git/iniciando-seu-primeiro-projeto-no-github "")
mas agora já usando os nossos alias para ficar mais fácil! :)

Com Git podemos fazer várias outras coisas que vou falando aos poucos
em outros posts, esse aqui é só para mostrar como deixar seu git mais
legal para começar.



_Old comments by: Thiago Scherrer, Adelar S.Q. | Not available anymore. :(_
