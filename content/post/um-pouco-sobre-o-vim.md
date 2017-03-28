+++
title = "Um pouco sobre o Vim"
aliases=["2009/08/14/um-pouco-sobre-o-vim.html"]
date = "2009-08-14"
tags = ["dev","tech","vim"]
categories = "dev"
+++

Aqui começa uma série de artigos sobre por que eu gosto de usar o VIM
para programar.

Uma das primeiras coisas que eu gostaria de comentar é sobre a quebra
de paradigma que você deve ter quando começa a usar um editor como o
vim que tem vários modos de operação, ou seja, não é mais apenas
digitar, pois cada modo de operação tem o seu modo de agir. Os modos
de operação são os seguintes:

* Inserção
* Visual
* Normal
* Comandos

#### Modo de inserção

O modo de inserção é um modo simples para se inserir texto sem nada
muito complexo, você se sentirá usando um notepad se usar somente o
modo de inserção.

#### Modo visual

Com o modo visual você pode selecionar facilmente trechos de texto,
linhas inteiras e blocos de texto. Um exemplo bem legal de uso de blocos no Vim
[pode ser visto no blog do TaQ](http://eustaquiorangel.com/posts/selecoes_de_blocos_com_o_vim "Uso de blocos no Vim").

####  Modo normal

Agora sim as coisas ficam legais! No modo normal, que é o modo que
você mais fica no Vim, você pode fazer as coisas mais interessantes!

Ok, falei...falei...e não mostrei o por que o modo normal é tão
poderoso né? Bem, são coisas como essas:

* Dentro de aspas podemos dar um ci" e ele já excluiria todo o conteúdo que está dentro das aspas e deixaria você em modo de inserção para inserir um novo conteúdo
* Parar em cima do número 20 e quer adicionar 7? Apenas faça `ctrl+a` e ele fará a soma em cima desse número
* E se ao invés de soma vc quiser a subtração dos valores acima? Apenas faça `ctrl+x` e ele fará a soma em cima desse número
* É claro que você não vai ficar repetindo esse monte de coisas que você fez aí em cima se tiver várias ocorrências e você não quiser fazer um "find and replace", por que você pode usar o . (ponto) para fazer a sua ultima ação novamente.
* Quer trocar as linhas de posição? Moleza! ddp ( sendo dd para excluir uma linha, que fica no buffer, e p para colar a linha do buffer )
* Está no começo da linha e quer ir para aquele parentese? f( e pronto, você já estará lá!
* Quer ir para um caracter antes do parentese? t( ta na mão! :)

Enfim...Tem muitas outras coisas legais a se fazer sem que você precise tirar a sua mão do teclado.

#### Modo de comandos

E o modo de comandos é onde você tem uma segunda linguagem de
programação alem da que você está usando pra programar, e lá você pode
tanto usar comandos de loop como:

    for i in range(1,10) | put ='192.168.0.'.i | endfor

**OBS**: créditos ao Sergio [nesse post](http://vivaotux.blogspot.com/2009/02/gerando-listas-no-vim.html "Post sobre loop no vim")

Que imprime uma faixa de IPs de 192.168.0.1 até 192.168.0.10.

Ou você pode alterar as funcionalidades e opções do editor utilizando
`:set` ou outras comandos interessantes.

#### Use o Vim como ele foi feito para ser usado

Outra quebra de paradigma que deve ser usada é usar "**hjkl**" para se
movimentar pelo texto, sempre usando os dedos indicadores sobre o "j"
e o "f" que é o padrão de digitação, e você vai ser que você vai
precisar tirar a mão do teclado para fazer outras coisas poucas vezes,
e pelo menos para mim as coisas parecem bem mais fáceis. Isso lhe
força a sempre usar `esc` (ou `ctrl+[`) após fazer alguma coisa,
deixando o modo normal livre para uso.

#### Customização

O Vim pode ser facilmente incrementado com plugins, temas e outras
coisas que tornam ele bem customizável, e você pode deixar ele com a
sua cara. Atalhos são facilmente configuráveis no seu .vimrc, assim
como configurações como highlight de busca, espaçamento para scroll, e
mais muuuiiitas opções que obviamente não caberão nesse post.

#### Concluindo

A idéia desse post é falar que para se usar vim você precisa estar
disposto a mudar muita coisa que você sabe, e a curva de aprendizado
não é uma das mais fáceis, mas quando você está no meio dela você
percebe o quanto é legal e acaba se viciando no negócio! hehe

Como o Vim é bem configurável pode acontecer de você ficar tentando
implementar ele para ficar igual ao seu antigo paradigma ( modo de
inserção para sempre ), mas isso não vai de ajudar muito e vai te
abstrair toda a força do Vim.

É isso! Nos próximos posts sobre vim pretendo postar dicas,
referências legais e falar bem mais aprofundadamente de algumas
ferramentas.



_Old comments by: Ramon Soares, Alex Gregianin j | Not available anymore. :(_
