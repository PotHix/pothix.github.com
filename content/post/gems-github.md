+++
title = "Instalando gems do GitHub manualmente"
aliases=[
  "post/instalando-gems-do-github-manualmente",
  "2009/07/28/instalando-gems-do-github-manualmente.html",
  "blog/development/instalando-gems-do-github-manualmente"
]
date = "2009-07-28"
tags = ["ruby","tech"]
categories = "dev"
+++

Esse vai ser um post rápido para relatar um problema que eu tive ( e
ainda estou tendo ) para instalar gems do GitHub.

Por algum motivo bizarro (nem tanto assim, parece ser dns, mas já
tentei opendns e nada) a página http://gems.github.com não abre de
maneira nenhuma, enquanto a navegação continua normal sem nenhum
problema... A consequência disso é que eu não consigo colocar o source
do github nas minhas configurações do Rubygems. :(

Tendo em vista que eu não conseguiria utilizar gem install para
nenhuma gem que vinha do GitHub tive que dar um jeito de instalar
manualmente. :)

O que fiz foi acessar a página do GitHub referente a gem que eu queria
instalar, que no caso é a
[kitabu](http://github.com/fnando/kitabu/tree/master "Kitabu") do
[fnando](http://github.com/fnando "Nando Viera"), pegar o link de
clone e clonar:

    $ git clone git://github.com/fnando/kitabu.git

Mas ae que está o lance que eu demorei para encontrar (noob), para
uma gem ser instalada localmente ela precisa estar empacotada, e no
GitHub você baixa direto o código fonte. Para empacotar:

    $ gem build kitabu.gemspec

Agora sim eu tenho o arquivo `kitabu-0.3.3.gem` que eu posso utilizar
para instalar localmente! Para instalar é só utilizar o gem install
padrão informando o arquivo a ser instalado:

    $ gem install kitabu-0.3.3.gem

E pronto! Lá está a minha gem instalada!

Espero que isso seja útil para mais alguem que precise empacotar as
suas gems. :)



_Old comments by: Cairo Noleto | Not available anymore. :(_
