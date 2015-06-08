---
title: "Instalando o Allegro 4.2.2 no Linux x86"
date: "2009-08-12"
tags: "gamedev,tech,linux,dev"
category: "dev"
---

Como mencionei no
[meu ultimo post](http://pothix.com/blog/development/gamejam "Post sobre o GameJam")
eu parcicipei do GameJam do Itaú cultural e desenvolvi um jogo com
Allegro. Agora com o jogo pronto estou criando arquivos executáveis
para divulgar e tinha me esquecido da diferença de arquitetura no
Linux, assim compilei apenas para meu Linux x64.

Quando me dei conta que não funcionou no computador do trabalho por
que eu tinha um binário x64, eu tive que instalar o Allegro no
computador de lá para poder fazer funcionar também em Linux
x86. Pensei eu:

> "Vai ser moleza, assim como foi instalar o [Allegro
> 4.2.2](http://sourceforge.net/projects/alleg/files/allegro/4.2.2/allegro-4.2.2.tar.gz/download
> "Allegro 4.2.2 download") no notebook x64"

E lá fui eu:

    ./configure
    make

Ué...Deu um problema bizarro com o _FNSTSW_ no make, então não vai ser
tão fácil assim...E lá vamos nós procurar na internet. Procurando
[eu descobri](http://lists.alioth.debian.org/pipermail/pkg-allegro-maintainers/2009-May/000251.html "Pergunta em uma lista de discussão")
que tem realmente um erro em uma parte Assembly do código do Allegro
para x86 que está errada na versão 4.2.2 que provavelmente foi
consertada nas versões futuras, mas nesse caso tive que arrumar na
mão:

No arquivo `src/i386/icpus.s` alterar a seguinte linha (tirar a que tem
um menos e colocar a que tem um mais):


    fninit
    movl $0x5A5A, %eax
    -   fnstsw %eax
    +   fnstsw %ax
    cmpl $0, %eax
    jne is_fpu_not_found
    
E assim eu consegui compilar certinho! :D

Quando tentei rodar meu binário me deparei com o seguinte erro: "error
while loading shared libraries: liballeg.so.4.2: cannot open shared
object file: No such file or directory" ¬¬

Pesquisando na internet novamente eu descobri que estava faltando eu
adicionar o diretório `/usr/local/lib` ao meu `LD_LIBRARY_PATH`:

No meu .bashrc:

    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib
    
OU

Editar o meu arquivo `/etc/ld.so.conf` e incluir `/usr/local/lib` no
final do arquivo e depois rodar o comando `ldconfig` como root ;)

Com isso eu consegui finalmente compilar ojogo e fazer o meu binário
rodar o meu jogo normalmente. :)

Espero que seja útil para mais alguem.



_Old comments by: Rafael Masoni, Victor, marcelo | Not available anymore. :(_
