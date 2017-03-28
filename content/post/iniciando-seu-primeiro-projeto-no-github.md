+++
title = "Iniciando seu primeiro projeto no GitHub"
aliases=["2008/12/21/iniciando-seu-primeiro-projeto-no-github.html"]
date = "2008-12-21"
tags = ["tech","dev"]
categories = "dev"
+++

Hoje estou aqui para postar um pouco sobre o GitHub! =)

Minha idéia hoje é apenas mostrar como você inicia um projeto por lá,
ou seja, enviar um pequeno repositório git e deixar no GitHub, e
conforme os meus progressos eu postarei mais coisas por aqui! ; )

Antes de começar tudo isso você precisar ter cadastro no GitHub
(obviamente) e já ter uma public-key cadastrada.

Para cadastrar uma public-key é só logar no GitHub, clicar em account
(no canto superior direito) e clicar em "add public key" que vão
aparecer os campos para inserir a mesma.

Você pode encontrar a sua public key no diretório `~/.ssh` com o
comando:

    cat id_rsa.pub

Caso ele não exista basta acessar sua home (~) e cria-lo com:

    ssh-keygen -t rsa

**OBS**: Eu tenho [um post](http://pothix.com/blog/slackware/deixando-seu-ssh-mais-facil-de-trabalhar "")
com mais informações sobre chave e SSH.

Depois pegar o conteúdo do arquio id_rsa.pub e colocar lá no GitHub.
Voltando a criação do repositório... Primeiramente crie um diretório
[por aqui](http://github.com/repositories/new " Novo repositório no
GitHub"):

Depois de criar você já terá um local acessível para enviar seu
código, que por sinal ainda não existe, portanto....Vamos criá-lo! :)

Primeiramente crie um diretório qualquer:

    mkdir codes

Acesse o diretório:

    cd codes

E vamos iniciar o git nesse repositório:

    git init

Coloque aqui seu arquivo de código (não necessáriamente código, mas
nesse caso vamos usar código ;)) e vamos adicioná-lo ao git:

    git add mycode.rb (obs: Ruby o/)

Agora vamos dar um commit do que fizemos usando "-m" para deixar uma
mensagem do motivo do commit:

    git commit -m "Meu primeiro commit"

Agora vamos adicionar como origem o nosso projeto criado no GitHub:

    git remote add origin git@github.com:seu-usuario-no-GitHub/nome-do-repositorio-criado.git

E depois é só dar um:

    git push origin master

E lá está o seu código no GitHub! :)

Tudo que eu falei aqui está no tutorial do GitHub quando você cria um
diretório:

[http://github.com/guides/setting-up-a-remote-repository-using-github-and-osx](http://github.com/guides/setting-up-a-remote-repository-using-github-and-osx "")

Por enquanto é isso! Algo bem simples só para você não se assustar
quando lhe falarem de GitHub.



_Old comments by: John-Henrique, George Mendonça, Thiago Marinho, Neto, Denis rebelo | Not available anymore. :(_
