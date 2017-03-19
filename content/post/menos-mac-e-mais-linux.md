+++
title = "Menos mac e mais Linux"
date = "2012-07-19"
tags = ["dev","linux","tech"]
categories = "dev"
+++

**TL; DR** Usei mac por mais de 6 meses e decidi voltar ao Linux. Na minha opinião
mac não é ruim, mas Linux é melhor.

A idéia desse post não é fazer um flame war, muito menos justificar porque eu
voltei para o Linux (afinal, eu não devo nada pra ninguém), e sim falar um
pouco do que eu vi de vantagens e desvantagens no Mac e porque eu resolvi
voltar a usar Linux.

Bem, como muitos sabem eu comprei um Mac no meio do ano passado, era um
Macbook pro de 13 polegadas, i7, 4GB de RAM e etc. Como eu imaginava, era uma
maquina boa e estável para trabalhar, fazer minhas pesquisas e levar na
mochila (era muito mais leve e compacto que meu antigo Toshiba Satellite).

Antes de usar Mac eu estava usando o Toshiba Satellite que eu mencionei acima
usando Ubuntu como sistema operacional, e tudo estava indo bem sem contar o
peso que era levar o computador para a faculdade sempre.

Enfim, um colega foi para um evento fora do país e eu pedi para que comprasse
um Macbook pro para mim, e assim foi feito, estava com um Mac. Refiz tudo que
tinha do Linux para utilizar no estilo Mac, ou seja: Formatei todo o meu HD
para usar o formato do Mac, comecei a utilizar time machine, alterei uma boa
parte dos meus config files para aceitar Mac também e etc.

E lá começa meu uso do Mac, comecei a instalar as ferramentas que eu estava
utilizando na época. Primeiro começando com as ferramentas de desenvolvimento,
peguei um Xcode com um colega para não precisar baixar e a única coisa que ele
fez foi bugar e não deixar nem instalar nem desinstalar (sim, procurei na internet
tinham algumas soluções que supostamente resolviam mas não resolveram)....
Enfim, foi a primeira coisa que eu instalalei, então foi só instalar o sistema denovo
e boa! Baixei o Xcode (mais de 1GB!!!!1!!!um!!), para poder compilar tudo que eu precisava
e tudo estava indo bem, só não parecia muito natural algumas coisas para quem
está acostumado a usar Linux, mas tava indo bem.

Nessa época eu estava terminando o meu TCC, que eu estava escrevendo com LaTeX,
portanto fui instalar um pacote do LaTeX no Mac, e lá se vão mais 1GB de pacotes...
Tudo bem, instalei e funcionou beleza.

Como já tinham dito, foi meio chatinho configurar o MySql mas funcionou de boas. O
homebrew ajuda bastante na tarefa de instalar coisas, é um slackbuilds do futuro,
tem várias receitas para resolver os casos de coisas que precisam ser instaladas,
e funciona bem.

Depois do ambiente todo feito o uso era bem tranquilo, e eu sentia que era bem
confortável para usar em coisas que não eram diretamente ligadas com programação.
Assistir minhas séries era bem legal, tinha alguns softwares que facilitavam
acompanhar algumas séries (TvShowsApp) e até baixar as legendas automaticamente
(Subsmarine), o que era bem comodo.

Eu tenho trabalhado bastante com HTML5 ultimamente portanto eu mantinha umas 5
versões de navegadores na maquina, e no Mac isso foi bem simples de fazer, apenas
arrastando os navegadores para a pasta de Apps e já era.

A resolução do Mac no meu monitor externo era fantástica comparada com a que eu
tinha antes no Toshiba, apesar de eu não usar muito o monitor externo. O som e
vídeo funcionam muito bem, como era de se esperar e apresentações, skype calls
e outras coisas eram bem simples e naturais de se fazer.

Algumas das aplicações que eu usava no Linux estavam disponíveis no Mac, como o
Vim por exemplo, que apesar de ter que instalar o Macvim ele ficava disponível
no terminal também. Tive que fazer algumas modificações para que o Vim funcionasse
como eu esperava, mas no fim das contas ele estava funcionando normalmente.
O GIMP no Mac é **bem** ruim, e deixa bastante a desejar, até porque ele sobe o
X para poder ser executado e foge completamente do padrão do Mac, o que já era
esperado, afinal não portaram o GIMP para rodar, apenas emularam o X e rodaram
sobre a plataforma do mac (não é só isso, mas o que eu quis dizer é que não é
um GIMP feito para mac específicamente, só fizeram ele rodar lá), e isso é bem
triste.

O tempo passou e eu tive a oportunidade de ir para San Francisco no OpenStack
Summit, e eu pensei em trocar de computador, e por coincidência um colega estava
perguntando se alguem estava vendendo um Macbook de 13" (!!), não perdi tempo,
negociei e vendi por um preço muito bom (tendo em vista que comprei fora do país
e vendi por aqui). E comecei a consultar valores de outros computadores para
a substituição. Durante essa coleta de preços eu até cheguei a cogitar comprar o
Macbook Air, mas eu estava certo de que mac para mim já deu o que tinha que dar,
e agora era hora de voltar ao bom e velho Linux.

No fim das contas eu comprei o computador que possuía o melhor custo X benefício
para o que eu precisava, que é o Acer S3-951-6432, que possui tela de 13", SSD de
256, 4GB de memória, processador i7, leitor de cartão da Realtek, placa wireless
Atheros e uma placa de vídeo intel 3000.

Dessa vez eu queria usar Linux de verdade, conhecendo tudo o que eu estava utilizando
no sistema, portanto resolvi começar a usar [Arch Linux](http://www.archlinux.org/), e comecei a saga de instalar
cada pacote, desde o sudo, passando pelo ifconfig, X, Awesome e por aí vai. A princípio
decidi ficar sem Gnome e configurar o Awesome para funcionar como eu queria, mas no fim
das contas eu acabei resolvendo instalar Gnome para facilitar as coisas de vez em quando.

Com o [Arch Linux](http://www.archlinux.org/) eu consigo ter controle de tudo que está rodando e fico sempre no bleeding
edge de quase todos os softwares devido a filosofia de rolling updates dele. Aproveitei
também para começar a compilar meu próprio kernel, removendo módulos desnecessários e
adicionando outros que são necessários para meu hardware como builtin.

Não precisei ficar me preocupando com as ferramentas de desenvolvimento, tudo estava fácil
de arrumar, e não tive problema algum, foi só instalar o gcc e mandar bala! Para o LaTeX,
foi só instalar alguns poucos megas de TexLive e tudo estava funcionando. Pude voltar a usar
o bom e velho GIMP, juntamente com o Inkscape e tudo parecia mais feliz.

Alguns podiam comentar que eu poderia ter usado o Photoshop no Mac, mas eu to de boas de
pirataria, e o GIMP resolve todos os meus problemas...Não quero ficar gastando dinheiro
com software que não seja realmente necessário.

### Conclusão

O Mac não é um sistema ruim, é funcional e bem estável. O que eu constatei com isso
tudo é que o Mac apenas não é um Sistema operacional para mim, eu gosto mesmo é de
usar software livre, contribuir, customizar, conhecer coisas novas, tentar tunar meu
hardware para funcionar melhor, usar Window manager esquisito, compilar o kernel e etc.

Outra barreira que caiu foi o Mac nunca travar, ele travou como qualquer outro SO que eu
já usei, além de ser um SO muito mais lento do que eu esperava. Muitas pessoas me
disseram que isso era coisa do Lion ou que era porque eu tinha só 4 GB de RAM, mas
nenhum dos dois argumentos são válidos para mim, se o Lion é uma bosta o problema não é meu,
é só mais um motivo para eu parar de usar porcarias, e se eu preciso de 8GB de RAM para poder
ficar com um notebook usável, eu prefiro mil vezes usar Linux com 4 GB e ser feliz.

A minha opinião final foi que é totalmente possível trabalhar no Mac e programar todas as
coisas que se programa no Linux, a diferença é que no Linux é tudo mais natural de fazer
mas nada que compilar no mac ou usar o slackbuilds...digo....homebrew... para fazer isso
não resolva, portanto ele ficou no mesmo patamar do Linux, cada um com suas vantagens e
desvantagens, e as vantagens do Linux me atraem mais do que as do Mac.

Ah, e não me venha com historinha que "O legal do Mac é a experiencia" que é conversa
de frutinha. :P



_Old comments by: Daniel Libanori, TaQ, David Paniz, Eduardo Resende, Letícia Figueira, Lucas Caton, Magnun | Not available anymore. :(_
