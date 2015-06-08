---
title: "Facilitando a instalação de pacotes no Slackware"
date: "2008-11-11"
tags: "slackware,linux,tech"
category: "linux"
---

Estava escrevendo outro post e chegando em um ponto onde eu instalaria
um pequeno Software utilizando o
[SlackBuilds](http://www.slackbuilds.org "Slack Builds") me fez
escrever esse post sobre algumas facilitações de instalação para
Slackware.

Nesse post eu vou referenciar 4 facilitadores para instalação de
pacotes no Slackware: SlackBuilds, LinuxPackages, Slackpkg, Slapt-get
e Checkinstall.

### SlackBuilds

Primeiramente vou comentar sobre um dos que eu mais uso e que mudou a
minha vida ( heheh ), que é o [SlackBuilds](http://www.slackbuilds.org
"Slack Builds")!

SlackBuilds são scripts que facilitam a instalação de softwares
diretamente pelo seu fonte, ao invés de usarmos o velho `./configure
&& make && make install`.

Quando eu preciso instalar algo, o primeiro lugar que eu visito é o
[site do SlackBuilds](http://www.slackbuilds.org "Slack Builds") para
procurar se tem o que eu estou procurando, depois procuro em outro
lugar.

Para usar o SlackBuilds é simples!

* Primeiro você encontra o seu pacote no site.
* Agora você faz o download do pacote do SlackBuilds, que geralmente está no formato `nomeDoPacote.tar.gz`
* E faz o download do source do que você vai instalar, que geralmente está no formato: `nomeDoPacote-versao.tar.gz`
* Agora você descompacta o seu pacote SlackBuilds da forma tradicional: `tar xvf nomeDoPacote.tar.gz`
* Agora ele criou uma pasta do seu SlackBuilds com o nome de `nomeDoPacote`.
* copie os fontes para a pasta do seu SlackBuilds: `cp nomeDoPacote-versao.tar.gz nomeDoPacote`
* Agora entre na pasta do seu SlackBuilds: `cd nomeDoPacote`
* E como root execute o seu arquivo de SlackBuilds: `./nomeDoPacote.SlackBuilds`
* Se tudo der certo nesse passo (pode ser que tenha alguma dependência, o que fará você tentar novamente o passo 1 para a dependência) ele vai compilar tudo para você e vai gerar um pacote .tgz do Slackware no seu `/tmp` ! :)
* Agora é só correr para o abraço! Acessar o seu `/tmp` e instalar o pacote com o bom e velho `installpkg`

### Linux Packages

Como segunda opção para facilitar a instalação no Slackware temos o
[Linux Packages](http://linuxpackages.net "Linux Packages") que tem
muitos pacotes tgz para você baixar e instalar facilmente com o
gerenciador de pacotes do Slackware.

### Slackpkg

Para instalações mais automatizadas temos também o
[Slackpkg](http://piterpunk.info02.com.br/artigos/tutorial-slackpkg.html)
que foi criado pelo [Piter Punk](http://piterpunk.info02.com.br/)
como um script para atualização de pacotes mais
facilmente quando surgiam exploits ou bugs, e acabou se extendendo a
instalação de pacotes e outras features interessantes.

Eu utilizo o Slackpkg para atualizar pacotes e para instalar pacotes
padrão da distro, e para isso é muito bom, mas não pense que ele vai
instalar aquele pacote xyz que você estava procurando, pois ele não é
um apt-get.

### Slapt-get

[Slapt-get](http://software.jaos.org/ "Página Oficial do Linux Packages")
(pode-se fazer o download no [Linux Packages](http://www.linuxpackages.net/pkg_details.php?id=12307)),
esse sim tenta ser um apt-get! Ele faz quase as mesmas coisas que o
apt-get faz, mas não resolve dependencias.

Ele tambem tem um arquivo de mirrors que fica localizado em
`/etc/slapt-get/slapt-getrc`. E em termos de comandos não muda muito
do apt-get, e você pode usar o `slapt-get --install nomeDoPrograma` ou
`slapt-get --update`.

### Checkinstall

O [checkinstall](http://asic-linux.com.mx/~izto/checkinstall/download.php)
é utilizado para quando você estiver instalando um programa a partir
do seu fonte você possa gerar um pacote da sua distribuição no final
da instalação e instalar por ele, assim você terá mais controle pelo
seu gerenciador de pacotes e tambem para que da próxima vez seja mais
fácil instalá-lo.

A instalação segue padrão até o momento final:

    $ ./configure
    $ make

E agora ao invés do nosso # make install usaremos:

    # checkinstall -S

E assim ele vai criar um pacote Slackware no diretório e instalar. :)

Bem isso é só para dar uma idéia do que se pode fazer para deixar suas
instalações do Slackware mais rápidas.
