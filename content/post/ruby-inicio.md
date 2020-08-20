+++
title = "Começando a falar de Ruby"
aliases=[
  "post/comecando-a-falar-de-ruby",
  "2009/04/13/comecando-a-falar-de-ruby.html",
  "blog/development/comecando-a-falar-de-ruby"
]
date = "2009-04-13"
tags = ["ruby","tech"]
categories = "dev"
+++

Se você já conhece Ruby, ignore esse post! A idéia do post é mostrar
um pouco da linguagem Ruby para pessoas que não conhecem nada sobre
ela.

Eu, claro, acho muito interessante que muita gente por aí ainda não
conhece Ruby, mesmo com a grande popularização do Rails, e eu chego a
ouvir coisas assim:

> "Não é você que programa naquela linguagem esquisita?"

Cheguei a ouvir do meu "professor de algoritmo" (perdeu meu respeito):

> "Gostei desse algoritmo que você fez nessa linguagem esquisita aqui"

Há muitas pessoas que já ouviram falar em algo relacionado a Ruby
apenas quando leram alguma coisa na Info falando de
RubyOnRails. Portanto, resolvi escrever alguns posts sobre a linguagem
para passar para esse pessoal que ainda não conhece nada. Pretendo que
esse seja o post introdutório de vários capítulos passando por partes
interessantes da linguagem. :)

### Então...Vamos falar de Ruby! :)

Ruby é uma linguagem interpretada, criada pelo japonês
[Yukihiro “matz” Matsumoto](http://www.rubyist.net/%7Ematz/ "") e
liberada publicamente em 1995. Desde lá o Ruby vem aparecendo bastante
no mundo de tecnologia, sendo que a partir de 2006 teve um grande boom
de comentários, ainda mais com o maior aparecimento do
[Rails](http://rubyonrails.org/ "RubyOnRails").

Uma coisa que me irrita bastante é as pessoas associarem diretamente
Ruby com Rails, portanto preciso deixar isso claro...

> Rails não é Ruby!

Rails é um framework para desenvolvimento web que **utiliza** a
linguagem Ruby para o tal. O Ruby tem bem mais coisas legais do que
só o Rails. ;)

Como o Ruby é uma linguagem interpretada, podemos facilmente fazer um Hello World em Ruby:

    puts 'Hello World'

Isso aí! Apenas uma linha! Uma linguagem totalmente orientada a objeto
e você não precisa necessáriamente criar uma classe, um método (
public static void main... ) e escrever mil comandos Hierarquicamente
para escrever algo! ;)

O interessante do Ruby é que tudo é um objeto, ou seja, se você escreve o numero 10 ele já é um objeto, tendo seus próprios métodos, como por exemplo:

    10.times { puts 'Vou estudar Ruby' }

No caso acima usamos um dos métodos do 10 (que é da Classe Fixnum)
que é o método times, que faz um loop 10 (ou qualquer outro numero
Fixnum que estivesse aqui ) vezes fazendo o que está dentro do bloco,
no caso, imprimir "vou estudar Ruby". :)

No Ruby você consegue modificar métodos em tempo de execução! Uma
classe que não possuía nenhum método pode possuir 10 em tempo de
execução bastando que seu código os inclua lá, e isso é uma coisa
muito legal!

A sintaxe da linguagem foi feita para ser simples, você tem vários
métodos facilitadores, inclusive com uso de "?" ( interrogação ) para
alguns métodos, como por exemplo para descobrir se a variável está não
retorna nada:

    variavel.nil?

Aqui temos uma pergunta explícita, que você olhando isso
intuitivamente lhe vem duas respostas: Sim ou não ( nem me venha com
talvez :P ),o que mostra que você olha um código Ruby e facilmente
distingue muita coisa.

E tem bem mais [coisas](http://www.ruby-lang.org/pt/sobre-o-ruby/)
[interessantes](http://pt.wikipedia.org/wiki/Ruby_(linguagem_de_programa%C3%A7%C3%A3o)
"Artigo sobre Ruby na Wikipedia")!

### Tá...E por que diabos eu deveria usar Ruby

Aí que está! É aí que entram as coisas legais, como:

#### Rails

Agora sim você pode usar esse cara aí em cima para desenvolver
aplicações bem legais usando todas as facilidades que o Ruby pode te
oferecer

#### Shoes

Uma biblioteca bem interessante para desenvolvimento desktop
multiplataforma, onde você consegue fazer muita coisa legal.

#### JRuby

Olha que legal, se você gosta bastante do Java, você pode rodar
programas Ruby em cima da maquina virtual Java, o que é bem legal, até
por que, a velocidade do JRuby, já passou a do MRI ( Matz Ruby
Interpreter, ou a versão core oficial do Ruby, feita pelo Matz ).

Inclusive você pode importar várias bibliotecas do Java e tudo
mais. ;)

#### Iron Ruby

Você usa a plataforma .NET da Microsoft? Então procure por esse cara!
Eu não tenho muito a comentar por que não uso .NET.

É claro que não existem só esses aí em cima, apenas estou citando
algumas coisas legais, mas se você procura por desenvolvimento web
você pode escolher [Sinatra](http://www.sinatrarb.com/ "Sinatra"),
[Merb](http://merbivore.com/ "Merb Official Home Page") (ainda não se
fundiu com o Rails, mas isso vai acontecer na versão 3 do Rails), ou
outros.

E se você apenas pensa em desenvolver para Desktop, alem do Shoes,
você pode escolher, o [RubyGTK](http://www.rubyist.net/~slagell/gtk/),
o [MacRuby](http://www.macruby.org/ "MacRuby") (para
usuários MAC) ou até o
[FXRuby](http://www.fxruby.org/ "FXRuby Official Page")!

Se você não é programador, e trabalha com administração de sistemas,
por que não utilizar Ruby para automatizar as tarefas? É fácil, tem
manutenção simples, vem padrão em várias distribuições Linux...Não tem
desculpa! :P

Meu foco nesse post não é abordar a fundo nenhuma das ferramentas que
eu citei acima, e sim apenas dar um overview de tudo que você pode
fazer usando essa linguagem.

### Puxa, gostei! Como usar?

Moleza! Está no Linux né? Se estiver usando Ubuntu só dê os comandos mágicos:

    sudo apt-get install ruby irb rdoc

Não está no Linux? Humm...No Windows é fácil tambem, baixe o
executável e instale. Não tive muito contato com um mac ainda para
instalar coisas e tudo mais, mas me parece fácil.

Basta clicar [aqui](http://www.ruby-lang.org/pt/downloads/) e pegar os
arquivos necessários para a instalação! :D

### Vixe...Instalei, e agora?

Agora é hora de brincar um pouco com a linguagem para saber como ela
funciona! Eu recomendo você a entrar no
[IRB](http://en.wikipedia.org/wiki/Interactive_Ruby_Shell "Interactive
Ruby Shell at Wikipedia") (**I**nteractive **R**u**b**y Shell) e
começar a brincar!

Para acessar o irb é aquela moleza de sempre, apenas entre no terminal
e chame por irb ( acho que funciona assim no Windows tambem )! :D

Lá você pode tentar executar uns códigos, inclusive os poucos exemplos
que eu postei aqui, é muito legal para você conhecer a linguagem,
descobrir uns métodos e tudo mais.

### Já estou no IRB, mas eu não sei fazer nada...

Bem, agora é partir para as cabeças! :D

1. Eu recomendo você a começar lendo o [tutorial de Ruby do TaQ](http://eustaquiorangel.com/downloads/tutorialruby.pdf "Tutorial de Ruby do TaQ") que é um material bem legal para começar.
2. Se seu ingles é bom (não precisa ser fluente, mas você precisa saber ler e enteder) eu aconselho firmemente você a participar de algum curso Core do [Rubylearning.org](http://rubylearning.org/class/ "Rubylearning.org"), e lá você vai aprender bastante coisa, alem de se divertir bastante.
3. Leia alguns dos livros gratuitos que estão disponíveis na web gratuitamente e em português! Eu recomendo o [Aprenda a Programar](http://aprendaaprogramar.rubyonrails.pro.br/ "Aprenda a programar traduzido pela comunidade") e o [(comovente) guia de Ruby do Why](http://why.nomedojogo.com/ "O (comovente) guia de Ruby do Why traduzido pela comunidade"). ( obrigado pela dica [Abraão](http://blog.abrcoelho.net/ "Blog do Abraão") )
4. Participe de Grupos de usuários para aumentar seus conhecimentos e conhecer pessoas que tambem estão interessadas na linguagem e sempre estudando! Se você está em São Paulo eu recomento fortemente você a participar do [GURU-SP](http://guru-sp.org "Grupo de usuários Ruby de São Paulo")! :)
5. Fique de olho aqui no blog que eu pretendo começar a postar umas coisas básicas, mas não espere somente por mim e já inicie seus estudos! ;)

Bem, com isso você já tem uma pequena base do que é o Ruby ( e sabe
que o Rails é apenas um framework feito em Ruby ) e já pode começar a
se divertir com ele! :D



_Old comments by: Piteco, Jotae, Lê, Abraão Coelho, CrociDB, André "aCidcOde" Gomes | Not available anymore. :(_
