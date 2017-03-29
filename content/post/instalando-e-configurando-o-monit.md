+++
title = "Instalando e configurando o monit"
aliases=[
  "2009/09/10/instalando-e-configurando-o-monit.html",
  "blog/ubuntu/instalando-e-configurando-o-monit"
]
date = "2009-09-10"
tags = ["linux","tech"]
categories = "dev"
+++

Esses dias eu peguei para instalar o monit no servidor da empresa que
eu trabalho e sofri um pouquinho com algumas coisas básicas, portanto
decidi postar aqui para que seja útil para quem quer começar a
utilizar o monit.

Se você usa Ubuntu, você pode fazer download do Monit por apt-get:

    sudo apt-get install monit

Se você não usa Ubuntu ou quer a ultima versão do Monit, então faça
download do tar.gz http://mmonit.com/monit/download/ e compile.

O Monit tem 2 dependencias:

* bison
* flex

Eu resolvi as 2 facilmente utilizando o próprio apt-get:

`sudo apt-get install bison flex`

Agora é só partir para compilar os fontes! ( prefiro compilar dos
fontes em certas ocasiões para pegar a ultima versão ):

    ./configure
    make
    sudo make install

E pronto! Lá está o seu monit instalado! Agora é o momento da
configuração. :D

O monit utiliza o arquivo chamado .monitrc para saber o que deve ser
monitorado e com quais parâmetros, portanto crie um arquivo na sua
$HOME com o nome de `.monitrc`:

    vim $HOME/.monitrc

Claro que usarei o vim para isso (qual outro poderia ser né? haha).
Agora você deve criar o seu próprio arquivo de configuração dizendo
o que o monit deve monitorar e quais critérios deve usar.

Você pode pegar alguns exemplos de arquivos
[como o do pessoal do mongrel](http://mongrel.rubyforge.org/browser/trunk/examples/monitrc "Arquivo do pessoal do mongrel"),
ou até mesmo [da documentação oficial do monit](http://mmonit.com/monit/documentation/monit.html#how_to_monitor ".monitrc exemplo na documentação oficial")
e criar o seu baseado nele. A syntax desse arquivo é de fácil
entendimento. :)

Para e-mails eu utilizei a minha conta do Google Apps com a seguinte configuração:

    set mailserver smtp.gmail.com port 587 username "pothix@pothix.com" password "abc123" using tlsv1, with timeout 15 seconds

Com todas as configurações arrumadas o monit já pode ser iniciado:

    monit

E agora você já tem vários comandos para utilizar, é só dar uma lida na
[documentação do monit para ver o que é possível fazer](http://mmonit.com/monit/documentation/monit.html#general_operation "Comandos do monit").

Espero que seja útil para quem ainda não usa nenhuma ferramente de
monitoração e gostou do monit. :)



_Old comments by: Roger Leite, Flávio Vinícius | Not available anymore. :(_
