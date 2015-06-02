---
title: "Aprendendo com o código do Quake"
date: "2012-07-18"
tags: "development"
category: "development"
---

Desde que eu terminei a faculdade eu venho lendo bastante coisa útil (foi muita 
coisa inútil durante 4 anos...) e aprendendo bastante coisa. Nos ultimos meses
eu li vários code reviews dos códigos do Quake e do Doom.

Os review foram feitos por Fabien Anglard e estão todos disponíveis no site dele 
[http://fabiensanglard.net](http://fabiensanglard.net).

O primeiro artigo que eu li foi sobre o 
[code review do código do Quake 2 de 1997](http://fabiensanglard.net/quake2/index.php).
Esse quake foi o ultimo que fez Software Rendering e o cara que analizou o código
explica direitinho como foi feito, explicando todos os problemas que os 
desenvolvedores enfrentaram e porque eles chegaram aquela implementação. Para 
quem é programador e curte Quake é uma ótima leitura.

Uma coisa muito interessante que vi na leitura desse artigo foi que eu acabei 
estudando várias outras coisas para poder entender o artigo, como:

* BSP trees: [http://downloads.gamedev.net/pdf/gpbb/gpbb59.pdf](http://downloads.gamedev.net/pdf/gpbb/gpbb59.pdf)
* Octree: [http://en.wikipedia.org/wiki/Octree](http://en.wikipedia.org/wiki/Octree)
* Memory management: [http://www.ualberta.ca/CNS/RESEARCH/LinuxClusters/mem.html](http://www.ualberta.ca/CNS/RESEARCH/LinuxClusters/mem.html)
* Radiosity: [http://freespace.virgin.net/hugo.elias/radiosity/radiosity.htm ](http://freespace.virgin.net/hugo.elias/radiosity/radiosity.htm) (esse artigo é animal)

E outras coisas do mesmo genero.

Com o lançamento do código do DOOM 3 open source, mais um code review foi 
escrito: [http://fabiensanglard.net/doom3/](http://fabiensanglard.net/doom3/), 
e nesse review ele explica como a parte de iluminação (que era a grande 
funcionalidade do Doom 3) foi feita e quais as técnicas foram utilizadas. 
Apesar de eu conhecer pouco de renderização e algoritmos de iluminação é 
possível entender uma boa parte desse review.

E por ultimo li o [code review do código do Quake III](http://fabiensanglard.net/quake3/index.php),
que mostra uma das coisas que eu estava curioso para ler, networking! Todos 
sabemos que a parte de redes (não somente ela, acho que tudo) precisa de 
velocidade, e eu queria entender o que os caras planejaram para essa camada, e 
isso é uma das coisas que o code review traz, inclusive linkando para a análise da antiga 
engine do Quake e explicando algumas decisões e as premissas simples que foram 
utilizadas para construir uma camada consistente e deixar o jogo o mais fluido possível.

Esse ultimo code review acaba muito legal, linkando para a IA do Quake III, 
que é muito boa por sinal, e por isso rendeu uma 
[tese de mestrado do desenvolvedor](http://dev.johnstevenson.co.uk/bots/20585341-The-Quake-III-Arena-Bot.pdf)
que apesar de eu não ter lido inteira, eu recomendo a leitura para quem se interessa no assunto.

Enfim, todos sabem que o [John Carmack](http://twitter.com/ID_AA_Carmack/) é 
um dos programadores que eu mais admiro, e Quake é um dos jogos que eu mais 
curto, e o código é open source! Esse review era a oportunidade que faltava 
para conhecer o código melhor e aprender coisas novas. Se você curte jogos e 
programação **RECOMENDO** fortemente tirar algumas horas e ler os reviews!
