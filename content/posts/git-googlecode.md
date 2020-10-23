+++
title = "Usando Git em projetos do Google Code"
aliases=[
  "post/usando-git-em-projetos-do-google-code",
  "2009/05/11/usando-git-em-projetos-do-google-code.html",
  "blog/development/usando-git-em-projetos-do-google-code"
]
date = "2009-05-11"
tags = ["tech"]
+++

Resolvi escrever esse post depois de começar a contribuir para o
projeto do
[vimbook](http://code.google.com/p/vimbook "Projeto do VimmBook no Google Code"),
que está no Google Code.

Como o Google Code só usa [Subversion](http://subversion.tigris.org/ "Subversion Main Page")
(infelizmente) e eu sou do mundo [Git](http://git.or.cz/index.html),
resolvi usar a ferramenta Git para lidar com SVN, o
[git-svn](http://www.kernel.org/pub/software/scm/git/docs/git-svn.html)!
Com ele você pode clonar um repositório SVN e utilizar como Git, e na
hora de "commitar" ele retransforma em SVN.

Já havia tentado usar Git-svn no meu projeto de
[plugin para wordpress](http://wordpress.org/extend/plugins/anti-ie6-army/),
mas nesse caso eu já tinha um repositório Git e fui tentar mandar para
um repositório SVN vazio, o que só me deu dor de cabeça, e no fim das
contas acabei jogando para um repositório SVN qualquer só para mandar
para o Wordpress. No fim das contas, depois desse problema com o
Wordpress eu só tinha abominado o git-svn, mas agora eu estou
começando a descobrir o seu valor.

Meus agradecimentos ao [Carlan Calazans](http://carlancalazans.com/)
que me deu umas dicas de Git-svn quando eu comecei a
tentar usar no projeto do plugin, que naquele momento não me fora de
grande serventia, mas depois ajudaram bastante! ;)

Bem, agora chega de papo-furado e vamos a parte que interessa...Códigos e How To! :)

Primeiramente vamos baixar o código ( estou usando como exemplo o vimbook ):

    git-svn clone https://vimbook.googlecode.com/svn/trunk/ vimbook --username seu.usuario.do.google

Ao digitar isso ele vai pedir uma senha que ele gera para a sua conta,
e seus commits ficarão ligados a sua conta do Google. Para obter a sua
senha é só acessar a página de
[settings do google code](http://code.google.com/hosting/settings "Página de settings do Google Code") com a sua conta.

Após digitar a sua senha ele vai começar a receber todos os commits do
SVN e converter para Git! O processo pode ser um pouco demorado,
dependendo do tamanho do repositório SVN que você está importando.

Quando terminar você terá um repositório Git normal funcionando, e
você pode trabalhar normalmente com ele, fazendo seus branchs e tudo
mais! :D

Vamos ver como seria um fluxo simples para você fazer uma alteração usando branch e mandar de volta para o repositório:

    git checkout -b new_changes

Branch criado! Faça as suas alterações...

Após as alteraçoes feitas faça os commits normalmente como se faz no
Git e volte ao master para ver o que há de novo no repositório
central:

    git checkout master
    git-svn rebase

Com isso ele vai receber as novas alterações do repositório!

Agora é a hora de fazer um merge do seu branch com a ultima versão do
master:

    git merge new_changes

Se tiver algum conflito resolva-os normalmente e agora é hora de
enviar as suas alterações novamente ao Google Code:

    git-svn dcommit

Pronto! Você está contribuindo para um projeto do Google Code
utilizando Git. :D



