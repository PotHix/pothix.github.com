+++
title = "GameJam"
aliases=[
  "post/gamejam",
  "2009/08/12/gamejam.html",
  "blog/development/gamejam"
]
date = "2009-08-12"
tags = ["gamedev","tech"]
+++

[![Foto que mostra o pothix programando](/images/posts/gamejam_espaco.jpg "Espaço do Gamejam")](/images/posts/gamejam_espaco.jpg "")

Como alguns sabem no final de semana passado ( dias 7, 8 e 9 ) eu participei do
[GameJam do Itaú cultural](http://itaucultural.org.br/gameplay/?s=gamejam "Site do GameJam").

Nesse evento os participantes tinham que formar equipes de até 4
pessoas e fazer um jogo em 48 horas, sendo que o tema ao qual o jogo
devia responder só seria passado na sexta feira as 19, e teríamos até
as 19 horas do domingo para entregar o jogo pronto utilizando qualquer
plataforma para desenvolvimento.

Pois bem, o que eu falei acima resume bem as regras do evento, agora
vamos a minha situação. Fiquei sabendo na segunda feira pelo
[CrociDB](http://crocidb.com/blog/ "CrociDB Blog") que teria esse
concurso e que tinha até quarta feira para se cadastrar, e eu tinha
acabado de fazer uma mini-cirurgia para tirar um dente, portanto
estava sentindo dores e tomando 4 tipos de remédios diferentes e não
pude confirmar nada devido a esse motivo, mas a vontade era
grande. Enquanto eu não confirmava o
[CrociDB](http://crocidb.com/blog/ "CrociDB Blog") ia procurando
pessoas para a equipe.

Quarta feira (último dia para inscrição chega) e eu já estava um
pouco melhor e decidi me inscrever! Procurei por outras pessoas para
compor a equipe, alguns descartei logo de cara por que sabia que ia
ficar arrumando desculpinha para não participar, ou não teria peito o
suficiente para aguentar a competição, então nem chamei, outros sabia
que infelizmente não poderiam participar por motivo de força maior
(fez falta hein [Rafael Masoni](http://rafaelmasoni.com/ "Rafael Masoni Website"))
, e teve ainda os últimos que eu achei que participariam e
fui chamar mas me decepcionaram...

#### Início do contest

Sexta feira tudo preparado e lá vou eu as 19 para o Gamejam (que foi na faculdade
[Anhembi Morumbi](http://portal.anhembi.br/ "Faculdade Anhembi Morumbi")),
e após me perder um pouco ( para variar ) cheguei em cima da abertura
e recebemos o tema:

> "Maquinas e computadores podem tomar decisões inovadoras?"

E com isso lá se vai o nosso pensamento...

* Criar um robô em 2d no estilo side scroller?
* Criar um robô fazendo algum tipo de shooter?
* Criar um braço robô que faz algo?
* Como ele seria inovador?
* Ele seria inovador?
* Como são as decisões dos computadores atualmente?

E com essas várias perguntas chegamos a conclusão que um computador
sozinho não pode tomar decisões inovadoras, ele apenas é programado
para uma determinada finalidade, nunca cabe a ele as decisões finais
com novas idéias. Com isso em mente nosso game foi baseado num braço
robô que distribui caixas num armazém seguindo sua própria ordem,
supostamente tentando uma maneira inovadora de organização de cores
que pode ou não estar certa, e cabe ao jogador organizá-la da melhor
maneira possível. Obviamente a idéia inicial não se fechou tão fácil,
e fomos desenvolvendo ela de acordo com a evolução do game.

Com uma base inicial desenvolvida passamos para o desenvolvimento! :D

Preparamos o ambiente com Allegro e algumas classes que o
[CrociDB](http://crocidb.com/blog/ "CrociDB Blog") usa para facilitar
algumas coisas e eu dei uma introdução sobre o workflow do Git para
trabalhar utilizando controle de versão[](http://crocidb.com/blog/
"CrociDB Blog"). Usamos um roteador para conectar os 2 notebooks e
compartilhar um repositório para os códigos, por ssh mesmo, que
infelizmente deixava a transferência muito ruim devido ao uso do
Cygwin no Windows, mas não fui um grande empecilho, foi apenas chato.

Tenho que admitir que eu sou um zero a esquerda em Allegro e fui com a
cara e a coragem participar desse contest, mas eu sabia que isso me
traria muita experiência, por que eu sei que o
[CrociDB](http://crocidb.com/blog/ "CrociDB Blog") conhece bastante de
Allegro e de desenvolvimento de games em si, e eu só comprovei isso
durante todo o contest, ele já conhecia bem o conceito de
desenvolvimento de games e tem bastante experiência com erros que
podem acontecer.

Ficamos programando desde as 21 mais ou menos até as 5 da manhã e
resolvemos ir para casa descansar para voltar no sábado a noite e
ficar até terminar o game. A primeira vista achei o pessoal das outras
equipes meio acuado, cada equipe isolada em suas mesas, excluindo
apenas o pessoal que já se conhecia ou que era da faculdade.

#### Momento Hard work

[![Foto do pothix programando, e nosso roteador do lado](/images/posts/gamejam_hard_work.jpg "PotHix programando")](/images/posts/gamejam_hard_work.jpg "")

Voltei no sábado as 19:30 para a programação e o
[CrociDB](http://crocidb.com/blog/ "CrociDB Blog") já estava por lá
programando fazia alguns minutos e já tinha resolvido alguns
probleminhas. Então já começamos a programar outras funcionalidades e
fazer os desenhos para o jogo, que por sinal foi a parte mais difícil
para nós, tendo em vista que nenhum dos dois tem a arte do desenho
assim como as outras equipes tinham ( vi muitos desenhos e trabalhos
legais ). Eu assumi uma boa parte dos desenhos para deixar o
[CrociDB](http://crocidb.com/blog/ "CrociDB Blog") mais focado na
programação.

Durante o domingo tivemos vários problemas, como o não funcionamento
do teclado do notebook do [CrociDB](http://crocidb.com/blog/ "CrociDB Blog"),
nos fazendo perder um tempo e ir para o laboratório usar um teclado
USB, que levou a outro #fail, por que levamos o roteador e não
prestamos atenção que a fonte não era bivolt, assim queimando a fonte
do roteador...Ou seja...Nada de Git na parte final do projeto...

No laboratório conseguimos finalizar o jogo e encontrar umas midis
legais até as 14:30 mais ou menos, quando preparamos as coisas para
entregar o projeto final. Ao entregar o projeto e ver a organizadora
testando percebemos que faltou uma dll para o allegro funcionar no
Windows, e tivemos que pegar o projeto de volta umas 2 vezes para
encontrar a dll certa, mas enfim funcionou. :)

#### Networking

Depois de entregar o projeto aproveitamos para fazer um Networking com
alguma das outras equipes. Durante o evento estávamos sempre vendo
algumas pequenas cenas dos outros jogos e algumas ferramentas, e uma
que chamou bastante a atenção foi da equipe que estava ao nosso lado
(**Danilo**, **Gabriel**, **Theo** e o **Mario** que eu não conheci)
que estava desenvolvendo um game totalmente em blender! (assim que
eles divulgarem o game eu posto o link aqui). O game deles ficou muito
legal e o pessoal é muito gente fina também, foi muito válido
conhecê-los! :)

Vi por cima mais alguns games que estavam em fase de produção ainda, e
conheci algumas outras pessoas como o **Danilo Vin** (só conheço ele
assim até agora...hahaha) que estava fazendo as artes do grupo dele,
muito boas por sinal, mas não vi o jogo finalizado. Revi tambem o
Speeder já tinha visto na campus party mas não tinha conversado muito.

#### Considerações

Finalizando, eu acho que esse contest foi muito legal,dormi apenas 40
minutos de sábado para domingo, mas foi minha primeira experiência com
competição de desenvolvimento de games, meu primeiro contato mais
próximo com Allegro, revi alguns conceitos de C++, conheci pessoas
interessantes, vi alguns jogos serem criados do zero... Mesmo se nosso
jogo não ganhar (o que é provável....hehe) esse contest valeu muito a
pena!  O nosso game não ficou exatamente como queríamos por que além
dos problemas, não conseguimos aplicar todas as idéias que tínhamos em
apenas 48 horas.

Uma coisa que me deixou muito feliz foi ter conseguido fazer esse jogo
usando apenas Software Livre! Utilizamos Inkscape, Gimp, Allegro e
GNU/Linux. O Croci utilizou Windows para compilar a versão windows do
jogo, e não tivemos **sequer um** problema de compatibilidade entre
plataformas.

Para quem quiser dar uma olhada no nosso game, pode baixar ele no
GitHub (o código não está um dos melhores, mas leve em consideração
que foi um contest de 48 horas...hehe):

[![Imagem de um robô e o nome Robotz Warehouse em cima](/images/posts/gamejam_robotz_warehouse.jpg "Tittle screen robotz warehouse")](/images/posts/gamejam_robotz_warehouse.jpg "")

[![Imagem com várias pequenas caixas coloridas e uma garra indo em direção a elas](/images/posts/gamejam_robotz_warehouse_gameplay.jpg "Gameplay robotz warehouse")](/images/posts/gamejam_robotz_warehouse_gameplay.jpg "")

[Código fonte](http://github.com/PotHix/RobotzWarehouse/tree/master "Página principal do jogo no GitHub")
[Download do pacote](http://www.itaucultural.org.br/gameplay/games/robotzwarehouse.zip "Arquivo para download")

* executáveis no diretório `bin`



_Old comments by: CrociDB, Lê, Karlisson, KILOCO / U2, Rofli Sanches de Souza | Not available anymore. :(_
