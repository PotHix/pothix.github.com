+++
title = "Rails X Django"
aliases=[
  "post/rails-x-django",
  "2009/04/08/rails-x-django.html",
  "blog/development/rails-x-django"
]
date = "2009-04-08"
tags = ["python","ruby","tech"]
+++

Como todos sabem eu sou do mundo Ruby/Rails (Não sou xiita mas é o
que mais gosto) e de vez em quando começo a brincar com coisas
diferentes para poder formar a minha própria opinião sobre o assunto.
No mes de fevereiro me surgiu
[um projeto bem interessante para trabalhar](http://pothix.com/blog/development/projeto-de-fevereiro "Projeto de fevereiro"),
pessoas legais, oportunidade legal, bem interessante! O projeto seria
feito em Python/Django, e achei bem interessante a idéia de poder
comparar várias coisas do Rails com o Django.

Bem...Vamos as minhas comparações:

### Pontos fortes
* Como primeiro argumento, e incontestável para mim, tenho que dizer que o admin do Django é muito legal! Você consegue fazer coisas bonitinhas e funcionais com uma facilidade espantosa! Sei que no Rails podemos fazer um scaffold ( ou até usar o ActiveScaffold, mas não é tão bom ) e criar facilmente um CRUD para mexer nos dados, mas isso não é um admin pronto, é apenas uma forma fácil de se manipular os dados. Penso eu que com o Rails seja mais facil de se criar um admin personalizado, com Design próprio, mas gostei bastante da solução a curto prazo do Django.
* Achei bem interessante como podemos fazer a divisão de trabalhos com o nosso HTML(er) / JavaScript(er), por que o Django dá pouquíssima liberdade para o template com relação a código, ou seja, você define na sua view as query's que vão ser mandadas para o template e no template ele vai usar apenas o que você pode mandar, e não vai poder consultar ou fazer maiores alterações no conteúdo, portanto, quem deve cuidar de como o conteúdo vai chegar ao template são os programadores que vão enviar os dados para quem vai fazer a integração com o layout.

### Pontos fracos
*  Não encontrei uma padronização / centralização para os plugins do Django...Você encontra vários modos de instalação para determinados plugins, alguns vem com setup.py, outros falam para você jogar na pasta do Python. Não tem algo centralizado como as gems do Rails ou os próprios plugins para jogar na pasta vendor/plugins, ou usar um script/plugin install ...
*  Não cria uma estrutura de pastas, deixando que você faça o que bem entender com a estrutura, ao invés de usar uma convenção sobre configuração.
* Talvez seja a inexperiencia, mas eu não achei legal o que tivemos que fazer com o settings, pois cada um precisava colocar uma configuração diferente de diretórios de imagens, ou algumas configurações referentes aos plugins ( filebrowser no caso ), portanto cada um tinha que ter um settings.py diferente, informando o settings.py quando vamos executar alguma coisa.
* Não me acostumei muito bem com o esquema de indentação do Python...Não que seja ruim, mas como estavamos trabalhando em sistemas operacionais diferentes de vez em quando aparecia um indentation error por causa de conversões de tabs em espaços e tal. Sei que esse argumento vai ser facilmente contestado com um: "É só configurar o seu editor de texto" ou "usa um editor de texto multiplataforma", mas mesmo assim...A idéia da indentação é legal, mas ainda me atrapalha um pouco.

Bem, é isso! Essas foram as minhas primeiras impressões do Django,
como disse, não tinha experiência com o framework e muitas coisas
poderiam ser evitadas mais facilmente, ou feitas de um modo bem
melhor.

Continuo gostando bastante do Rails, mas achei muito legal várias
idéias do Django, e acho que tem aplicações legais dependendo do
projeto que você for usar. ;)



