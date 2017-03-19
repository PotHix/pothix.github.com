+++
title = "Rails Summit 2009"
date = "2009-10-19"
tags = ["events","rails","ruby","tech"]
categories = "events"
+++

Esse é um post para relatar como foi o Rails Summit Latin America desse
ano! 😀 Já começo o post com um grande \#win para a organização do
\#railssummit, por que eles tem tomadas para todos e wi-fi liberado para
todos os participantes, o que ajuda para que pessoas como eu possam
ficar postando no blog durante o evento, :) Vamos ao evento!

#### Rails Insurgency – Chad Fowler

A palestra foi muito interessante e o Chad Fowler falou sobre como é a
dificuldade de implantar uma aplicação Rails em uma grande empresa
quando você tem grandes gerentes que te enchem de perguntas do tipo:
“Rails faz X?, “Rails faz Y” até que voc6e responda um não para que ele
possa dizer: “Aháá! Então não podemos usar”. O Chad Fowler já foi um
desses gerentes e decidiu passar a experiencia de um desses gerentes e
por que eles pensam dessa maneira.

Uma outra coisa bem legal que o Chad comentou foi sobre fazer um modelo
junto com o seu cliente na hora do planejamento, até por que você
consegue fazer isso facilmente com o Rails e até mostrar uma pequena
funcionalidade com um Scaffold sem muito transtorno, e seu cliente pode
facilmente ver se é isso mesmo que ele está pensando.

#### Gregg Pollack – Na vanguarda da performance em Rails

O Greg Pollack falou sobre page scaling Rails, comentando sobre uma
grande quantidade de plugins para medir e ajudar a corrigir alguns
problemas de escalabilidade que são detectados. Foi apresentado
ferramentas para melhorar performance de banco de dados, para verificar
quais <span>queries</span> que podem ser melhoradas, onde podem ser
incluídos índices e outras coisas bem interessantes.

No fim da palestra ele falou sobre o [madmimi](http://madmimi.com/)
que ajuda a lidar com um dos grandes gargalos de aplicações, que é
quando se tem que trabalhar com grandes listas de e-mails.

Para saber os outros assuntos que o Greg falou é só ver no blog do
EnvyLabs: <http://blog.envylabs.com/summit>

#### Carlos Brando – Como o Rails funciona por dentro

Agora começa o problema por que temos que escolher uma palestra e eu
fiquei em dúvida entre a palestra do Ilya Grigorick e a do [Carlos
Brando], mas no fim das contas resolvi
assistir a do Carlos.

O Carlos Brando falou sobre como o Rails funciona por dentro, usando a
sua experiência na criação de um framework (que ele está fazendo na
nova empresa que está trabalhando), ele falou um pouco sobre como o
Rails trata as requisições, como utilizar as coisas certas de Rails
quando se está fazendo um framework, e comentou um pouco sobre o
framework que ele está criando como exemplo.

Achei a palestra muito superficial…Achei que o Carlos fosse pegar pesado
mostrando bastante coisa do Rails, mas ele decidiu mostrar algo mais
simples pois ao mostrar para algumas pessoas percebeu que elas estavam
achando meio massante. Enfim, como ele mesmo disse, não dá para agradar
a todos, mas na minha opinião a palestra foi fraca :(

#### José Valim – Aprenda a customizar os geradores do Rails 3.0

A palestra do José Valim foi bem legal! Ele falou sobre o Thor e sobre
os geradores do Rails 3, como você poderá facilmente customiza-los e
como o thor pode te ajudar em suas aplicações.

Ele mostrou um pouco do motivo de se trocar utilizar o thor, e por que
os antigos geradores são ruins do jeito que estão. Um exemplo legal foi
mostrar como um plugin tem que fazer para gerar coisas, tomando como
exemplo o RSpec, que com um spec_model vai ter que gerar migrations
tambem, sendo que não é do escopo do RSpec ter que se preocupar com
migrations, mas do jeito que está atualmente ele apenas pode trocar o
`script/generate model` pelo `script/generate rspec_model`. Utilizando
o exemplo anterior como base foi mostrado como os novos geradores vão
ajudar nas tarefas dos plugins a partir de agora.

Gostei da palestra e acho que o José Valim conseguiu passar bem o que
ele queria. :)

#### David Chelimsky – RSpec e Cucumber alem do básico

A palestra do chelimsky foi sobre o uso do [RSpec](http://rspec.info/)
e do [Cucumber](http://cukes.info/), que na minha opinião foi bem
similar a palestra do ano passado, mas mesmo assim mostrou algumas
boas práticas sobre RSpec que foram interessantes.

Eu ainda tive a chance de conversar com o Chelimsky no final da palestra
para fazer umas perguntas sobre o Spork e como melhorar o tempo de
execução dos meus testes que demoram muito para serem executados,
tornando o desenvolvimento com o autospec não tão bom quando poderia
ser.

#### Fabio Akita – Agile, além do caos

A palestra do Akita foi uma grande viagem de pensamentos aleatórios dele
sobre a teoria do caos baseado nos estudos que ele tem feito nos últimos
tempos. Eu achei que foi muita informação para um curto período de tempo
para as pessoas, mas quem conseguiu abstrair muita coisa e entender qual
foi a finalidade da palestra deve ter gostado bastante, por que a idéia
central é bem interessante. :)

#### Matt Aimonetti – O Futuro do Ruby & Rails

O Matt falou sobre as novidades que virão no Rails 3, sobre o que poderá
ser incorporado do merb e o quanto “plugável” o Rails 3 será. Ele não
falou apenas de Rails, mas falou tambem um pouco de Ruby e quais são as
novidades em termos de velocidade.

#### Desconferência

E chegou a hora que muitos estavam esperando, a desconferência! 😀

Na ultima desconferência o Elomar deu show falando um pouco sobre
grupos de estudo, e muita gente estava esperando coisas legais para
esse ano.

Teve muita coisa interessante, mas infelizmente não pude ficar até o
final por causa da minha faculdade, mas o que pude ver foi:

* Pessoal do Guru-sp apresentando o grupo e falando sobre o crescimento e futuras atividades (eu fui o primeiro a falar! 😀)
* George Guimarães falando do Devise
* Aldo França contando sua história para aprender Rails e fazendo um blog em 15 minutos ( com 11 anos de idade )
* Guilherme Chapiewsky e Henrique Bastos falando sobre os eventos e grupos que eles participam no Rio

Sei que teve muito mais coisas legais alem disso, mas essas foram as
unias que eu pude ver e achei todas bem legais! 😀

Acho muito interessante essa idéia de desconferência, pois serve tanto
para integrar o pessoal e dar risada quanto para apresentar projetos
interessantes e muito úteis para alguns.

Sem contar que eu ganhei um Ipod nano da
[ThoughtWorks](http://www.thoughtworks.com/) em um sorteio pouco antes
da desconferência. 😀

#### Manhã do primeiro dia

Agora vem a parte triste…Não pude estar no evento no segundo dia de
manhã.  :(

O [ikwa](http://ikwa.com.br) não liberou todos os programadores para ficar
lá em tempo integral, portanto fizemos um revezamento, e para mim
ficou o segundo dia de manhã.

Perdi duas palestras que eu gostaria muito de assistir. A primeira é do
[Carlos Vilela](http://twitter.com/cv) que falou sobre o uso do Ruby na ThoughtWorks e a
segunda é do [Nando Vieira] que estava falando do Ruby 1.9.

Uma coisa que me animou um pouco foi saber que as palestras eram
simultâneas, portanto eu ia perder uma de qualquer jeito.

#### Marcos Tapajós – CouchDB no Rails

Como não pude estar no evento no segundo dia de manhã eu já cheguei
direto para a palestra do [Tapajós] sobre CouchDB, que por sinal foi bem
interessante! O Tapajós mostrou um pouco de como é trabalhar com CouchDB
e como deve ser a mudança de paradigma da saída de um banco relacional
para ir para um banco orientado a documentos.

Como o próprio Tapajós disse, a idéia da palestra dele era dar um
Overview do couchDB e depois abrir para perguntas para tirar as dúvidas
do pessoal, e na minha opinião ficou muito bom! 😀

#### Bruno Miranda – Rails não escala

O [Bruno Miranda] apresentou “juntamente” com o Jason Seifer
(infelizmente o [Jason Seifer] não pode estar no railssummit por
problemas com a viagem, portanto apenas enviou vídeos da parte que ele
ia falar) sobre “Rails não escala”, falando sobre a aplicação que está
em baixo do canal de audio do MSN e como eles conseguem manter uma infra
escalável usando Rails.

#### Vinicius Teles – Do serviço ao produto

Uma das melhores palestras do Rails Summit ( as palestras não técnicas
são sempre as mais marcantes, por melhor que sejam as técnicas… ), onde
o Vinícius contou sua história passando por bons e maus momentos com a
sua empresa, começando com serviços e terminando em produto.

Coisas interessantes da palestra do Vinícius foi o grande enfoque em
“reserva”, ou seja, sempre tenha uma reserva em caixa para segurar a sua
empresa nos piores momentos ou ajudar quando vem aquela grande
oportunidade. Apenas investir em passivo ( como carros por exemplo )
quando isso não for um grande empecilho, por que no começo um carro (por
exemplo) só vai te trazer prejuízo com desvalorização e manutenção.

O Vinícius deu ótimas dicas para quem quer começar uma empresa, várias
dicas de experiencias que ele passou, e me animou muito a preparar as
coisas par a empresa que eu vou abrir no futuro. Acho que já posso
começar a me preparar. 😛

#### Obie Fernandez – Dominando a arte do desenvolvimento de aplicações

Outra palestra no mesmo nível da palestra do Vinícius ( também não
técnica ), portanto muito boa! 😀

O Obie Fernandez falou sobre como dominar o desenvolvimento de
aplicações, e achei muito interessante os exemplos que ele passou sobre
musica, comentando da quantidade de esforço de um grupo de músicos em
termos de horas e o que isso implicava em seu nível. Ainda sobre o tempo
de estudo, não é “apenas estudo” por que pratica não leva a perfeição,
“prática perfeita leva a perfeição”. Programação é como musica, é sempre
bom pegar musicas dos outros para estudar, por que assim você pode
aprender sutilezas para fazer a sua.

A palestra do Obie assim como a do Vinícius teve frases chave como:

-   Se eu estiver trabalhando e um dia descobrir que eu não estou feliz
    eu simplesmente saio
-   Fuck the enterprize ( muito boa! haha )
-   Pratica não leva a perfeição, pratica perfeita leva a perfeição

Gostei bastante da palestra, e bateu certinho com algumas coisas que
estou pensando para os meus estudos para os próximos tempos.

#### \#horaextra

O \#horaextra foi muito legal! Tivemos um problema com o primeiro bar
que fomos por que não podiam entrar menores e nem com short, portanto o
Mergulhão e o Aldo ficariam de fora, então o pessoal foi para outro bar,
que ficava do lado desse e lotamos o lugar 😛

Como o bar era pequeno para a quantidade de pessoas, as coisas demoravam
um pouco para chegar, mas nada que uma boa conversa não pudesse ajudar
você a relevar isso. A mesa era gigante, mas as pessoas que a voz
alcançava eram: [Carlos Brando], [r4f4e1], [Vinícius Baggio], [Shadow] e
[Agaelebe].

Batemos papo por um bom tempo, com participação de mais uma galera (
[Akita], [Rafael Rosa], [Thiago Scalone] …. ), e acabei saindo de lá
mais de 00:00.

Aqui chega o fim do evento e o que fica são os bons momentos passados
por lá, o conhecimento adquirido e a vontade de participar novamente no
ano que vem! Parabens aos organizadores ( e patrocinadores! ) do evento,
por que ficou ótimo!

Se quiser ver as fotos que eu tirei no evento veja [o album no meu
picasaweb].

[Carlos Brando]: http://twitter.com/carlosbrando "Carlos Brando"
[r4f4e1]: http://twitter.com/r4f4e1 "Rafael"
[Vinícius Baggio]: http://twitter.com/vinibaggio "Vinicius Baggio"
[Shadow]: http://twitter.com/shadow11 "Ricardo Yasuda"
[Agaelebe]: http://twitter.com/agaelebe "Hugo Borges"
[Akita]: http://akitaonrails.com
[Rafael Rosa]: http://rafaelrosafu.com/ "Rafael Rosa Fu"
[Thiago Scalone]: http://twitter.com/scalone "Thiago Scalone"
[o album no meu picasaweb]: http://picasaweb.google.com/Willian.molinari/20091013RailsSummit?feat=directlink "Album do Rails Summit no Picasa"
[Tapajós]: http://improveit.com.br/empresa/tapajos "Tapajós na improve-it"
[Bruno Miranda]: http://twitter.com/brupm "Twitter do Bruno Miranda"
[Jason Seifer]: http://jasonseifer.com/ "Jason Seifer"
[Guru-sp apresentando o grupo e falando sobre o crescimento e futuras atividades]: http://blip.tv/file/2728861 "Guru-sp falando no Rails Summit"
[ThoughtWorks]: http://www.thoughtworks.com/ "ThoughtWorks"
[ikwa]: http://www.ikwa.com.br "Ikwa Orientação Profissional"
[Carlos Vilela]: http://twitter.com/cv "Carlos Vilela no Twitter"
[Nando Vieira]: http://simplesideias.com.br/ "Simples Ideias - Por Nando Vieira"
[RSpec]: http://rspec.info/ "RSpec"
[Cucumber]: http://cukes.info/ "Cucumber page"
[madmimi]: http://madmimi.com/ "madmimi"



_Old comments by: @diegorv | Not available anymore. :(_
