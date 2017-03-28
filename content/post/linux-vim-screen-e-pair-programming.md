+++
title = "Linux, Vim, Screen e Pair programming!"
aliases=["2010/03/29/linux-vim-screen-e-pair-programming.html"]
date = "2010-03-29"
tags = ["linux","tech","dev"]
categories = "dev"
+++

Aqui estou eu mais uma vez para falar mais uma das maluquices que eu
fiz um bom tempo atrás mas não tive tempo de postar.

Primeiramente eu vou falar o que muita gente já falou muito bem, que é
sobre screen e pair programming. Mas vou dizer como funcionou para mim.
Alguns posts que eu li antes e depois de começar a brincar com screen e
pair programming, e que eu gostei:

* [Post do Caike sobre Pair programming remoto usando screen]
* [Post do Qmx sobre pair programming usando screen]

Primeiramente vamos começar com umas dicas do post do caike:

Para mim foi necessário alterar as permissões do Screen:

    sudo chmod +s /usr/bin/screen
    sudo chmod 775 /var/run/screen

Agora é só seguir a velha receita dos dois posts:

Primeiro usuário:

* O primeiro usuário acessa o computador host via ssh
* executa o comando **screen -S nomedoscreen**

Segundo usuário:

* Acessa o servidor com o mesmo nome de usuário/senha do primeiro
* executa screen -x

Pronto! As duas pessoas estão compartilhando a mesma tela agora e podem
usar o Vim para programar (claro, qual outro editor seria, não!?).

Nunca consegui utilizar o screen multiusuário (como mencionado no post
do caike) mas isso não é um grande problema. :)

#### Como eu usei

Primeiramente fiz um pair programming normal com o [@mateuslinhares],
onde nós dois ficavamos no mesmo screen conversando (estavamos há menos
de 2 metros de distância), e cada um com seu teclado, podendo intervir a
qualquer momento. Isso foi legal por que não precisávamos ficar
dividindo espaço de um mesmo monitor ou de um mesmo teclado, e ainda
driblava outros problemas que tínhamos na época.

#### Uma nova idéia

Na época desse pair programming estavamos com uma task grande e
trabalhosa, mas podia ser feita individualmente, e provavelmente seria
mais produtiva do que em pair programming, mas tinha uma particularidade
muito interessante. Cada um de nós conhecia melhor uma parte do sistema,
portanto, se mantivessemos contato contínuo isso ia acelerar o trabalho,
pois precisávamos alterar/retirar algumas coisas que podiam ou não ser
importantes para o sistema como um todo. Levando tudo isso em conta me
surgiu uma idéia:

> Por que não fazer tudo com um “semi pair programming”, onde cada um
> trabalhava no seu computador mas visualizando a tela do outro em um
> split.

Tanto eu como o @mateuslinhares estamos acostumados a separar o nosso
vim em vários splits verticais e horizontais, ou seja, um split vertical
do screen não seria o problema.

#### O que fizemos

Decidimos então seguir o seguinte script:

Setup das duas maquinas:

* Vim
* Screen
* Um usuário em comum

##### PotHix :

* com o usuário compartilhado executa um **screen -S pothix** na sua maquina
* Abre um novo split no screen com o comando **ctrl+a s**
* Nesse novo split acessa a maquina do Mateus e executa **screen -x** para acessar o screen que o @mateuslinhares criou na maquina dele
* Volta para o split anterior e trabalha normalmente

##### @mateuslinhares

* com o usuário compartilhado executa um **screen -S mateuslinhares** na sua maquina
* Abre um novo split no screen com o comando **ctrl+a s**
* Nesse novo split acessa a maquina do Mateus e executa **screen -x** para acessar o screen que o PotHix criou na maquina dele
* Volta para o split anterior e trabalha normalmente

Seguindo esse script teremos os 2 utilizando um screen com um split,
sendo que um split é para seu trabalho local e no outro você pode
acompanhar e dar pitacos no trabalho do seu comparsa! :)

#### Benefícios

No caso dessa nossa task isso resolveu muito o nosso problema, por que
conseguimos trabalhar em locais distintos mas sempre em constante
comunicação, o que sempre trazia alguns comentários como:

**PotHix**: Ow… Não tira isso aí não por que vai quebrar tal parada.

ou então:

**Mateuslinhares**: Cara… Olha isso aqui no screen, dá para fazer na sua
parte tambem.

#### Conclusão

Para mim foi muito bom e recomendo a todos para tentarem algo do tipo
quando tiverem chance (a não ser que você use Textmate…nesse caso…boa
sorte! :P)! A unica coisa que eu recomendo é utilizar 2 monitores, assim
você pode deixar a tela do seu comparsa no outro monitor (divida os
monitores verticalmente) e trabalhar com vários splits no seu monitor. :)

É totalmente possível trabalhar com 1 monitor apenas (foi assim
que trabalhamos) mas você obviamente perde um pouco de espaço.

Espero que essas informações sejam úteis para mais alguém.

Qualquer dúvida ou sugestão deixe nos comentários. :)

[Post do Caike sobre Pair programming remoto usando screen]: http://www.caikesouza.com/blog/2009/05/remote-pair-programming-with-screen/
[Post do Qmx sobre pair programming usando screen]: http://qmx.me/pair%20programming
[@mateuslinhares]: http://twitter.com/mateuslinhares




_Old comments by: Willian Fernandes, Luciano Sousa, caike | Not available anymore. :(_
