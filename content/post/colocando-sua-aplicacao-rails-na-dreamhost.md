+++
title = "Colocando sua aplicação Rails na Dreamhost"
aliases=["2009/03/25/colocando-sua-aplicacao-rails-na-dreamhost.html"]
date = "2009-03-25"
tags = ["rails","ruby","tech","dev"]
categories = "dev"
+++

Estou fazendo um pequeno site em Rails e como tinha que mostrar o
andamento para um colega, aproveitei para testar como seria o Deploy
desse projeto na DreamHost ( mesmo sabendo que o provedor final não
será lá ), e achei muito fácil de se fazer, portanto resolvi escrever
um pouco sobre o processo. :D

Primeiramente, você precisa ter acesso SSH na sua conta. Se você ainda
não tiver esse acesso apenas faça o seguinte procedimento:

* Acesse o menu **Users &gt; Manage Users**
* Clique em **Edit** no user que você vai usar para o acesso SSH
* Marque a opção **Shell account - allows SFTP/FTP plus ssh access.**

A partir daí você pode acessar por SSH assim como acessava por FTP,
com esse usuário e senha. :)

Agora que temos acesso SSH a conta, vamos colocar nossa aplicação lá!
Se ela estiver no GitHub você pode fazer um clone da sua aplicação
facilmente:

    git@github.com:usuario/projeto-qualquer.git

Se não estiver no GitHub você pode fazer um pacote tar.gz e enviar
facilmente por scp:

    tar cvf app.tar.gz aplicacao-quaquer/
    scp usuario@xxx.xxx.xxx.xxx:/home/local/da/applicacao app.tar.gz

\*Sendo que o xxx é o endereço IP ou Nome da sua maquina na Dreamhost

Com nossa aplicaçào lá, vamos criar o nosso domínio ou sub-domínio no
[painel de controle da DreamHost](https://panel.dreamhost.com/ "Painel de controle da Dreamhost"),
pelo menu **domains > manage domains**.

Geralmente seu domínio demora um pouco para começar a funcionar, mas
você não precisa esperar que ele esteja totalmente funcional para que
você continue o processo ;)

O que você precisa fazer é:

* Ativar o **Ruby on Rails Passenger (mod_rails)**
* Apontar o **Specify your web directory** para o diretório public da sua aplicação

Agora que temos o nosso domínio criado e validando ( lembre-se que não
é instantâneo ), podemos configurar o nosso banco de dados!

Acesse o [Manage Mysql](https://panel.dreamhost.com/index.cgi?tree=goodies.mysql&amp; "Manage Mysql")
pelo menu **Goodies &gt; Manage Mysql** e preencha o formulário que
está logo abaixo dos bancos de dados já existente ( se houver ) para
criar um novo banco.

Com o novo banco de dados criado, vamos adaptar nossa aplicação para
usá-lo! ;)

Vá no arquivo `config/database.yml` e altere as informações da seção
*production* para o que foi configurado no painel..

Agora com tudo configurado, vamos rodas as nossas migrations para as
configurações de produção:

    RAILS_ENV=production rake db:migrate

Com isso você já terá seu projeto funcionando assim que o domínio se
propagar!

Foi bem mais simples do que eu pensava, como eu deixei o repositório
com Git lá, basta eu fazer as alterações localmente e dar um push que
já terei minha aplicação alterada lá! :)

É isso aí, espero que seja útil para vocês.
