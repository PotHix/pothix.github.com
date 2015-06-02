---
title: "Deixando seu ssh mais facil de trabalhar"
date: "2008-11-27"
tags: "slackware,tech,ubuntu"
category: "slackware"
---

Æ!!

Se você usa bastante [SSH](http://en.wikipedia.org/wiki/Ssh "Secure Shell") vou mostrar um método para facilitar um pouco a sua vida. Sei que existem métodos melhores para trabalhar com vários SSH ao mesmo tempo, geralmente a galera que administra vários servidores costuma usar screen para se manter conectado, mas eu como conecto de vez em quando para ver algo em algum dos servidores prefiro configurar desse modo.

Vamos lá! :)

A primeira coisa a se fazer é configurar o seu **.ssh/config**
<blockquote><code>Host server
Hostname 192.168.1.2
User pothix
ForwardAgent yes</code></blockquote>
Sendo que Host é o que você vai usar quando for chamar por ssh ( por exemplo "ssh server" ), Hostname é o IP do server, User é o usuário no servidor e ForwardAgent para usar o nosso ssh-agent.

Tem um totorial bem legal sobre [configuração de SSH no guia do Hardware](http://www.guiadohardware.net/tutoriais/dominando-ssh/pagina3.html "Entendendo o SSH") que explica algumas opções.

Vamos agora configurar o nosso ssh-agent, que é um agente de autenticação que gerencia as nossas conexões ssh na sua seção de terminal.

Primeiramente você deve iniciar o seu ssh-agent:
<blockquote><code>$ ssh-agent</code></blockquote>
Com isso ele vai retornar algumas informaçoes que você deve registrar, como algumas variáveis e o PID.
Copie essas informações e coloque em um arquivo qualquer ( por exemplo: .ssh/var ) e depois de um source no arquivo:
<blockquote><code>$ source .ssh/var</code></blockquote>
E ele vai "export"ar as 2 variáveis ( SSH_AUTH_SOCK e SSH_AGENT_PID ) com os conteúdos que o ssh-agent vai utilizar.

Agora que já temos o nosso ssh-agent funcionando, vamos criar a nossa chave privada para utilizar:
<blockquote><code>
$ cd ~/.ssh
$ ssh-keygen -t rsa -f minha-chave</code></blockquote>
Com isso ele pedirá a a senha para sua chave e depois de você digitar e confirmar ele criará dois arquivos de chave:
*  minha-chave
* minha-chave.pub

O arquivo minha-chave é o arquivo que vamos usar para facilitar a nossa vida, e o arquivo minha-chave.pub é o arquivo publico de identificação da sua chave, falaremos mais disso depois.

Agora com nossa chave em mãos já podemos acrescentar ela no nosso ssh-agent, utiliando o ssh-add:
<blockquote><code>$ ssh-add ~/.ssh/minha-chave</code></blockquote>
Ele vai pedir a senha da sua chave e depois vai adicionar ela no ssh-agent e agora é só alegria! :)

Agora vamos acessar o servidor que cadastramos no nosso ~/.ssh/config
<blockquote><code>$ ssh server </code></blockquote>
Lembra dele, que fizemos lá em cima? Pois é agora vamos acessar ele sem precisar ficar digitando a senha toda vez, apenas usando a nossa chave! :D

Lembrando que tem um porém! Isso só vai funcionar se <code><span class="command">nós estivermos autorizados a acessar o servidor sem senha, utilizando a chave, e para isso temos que ter o conteúdo do nosso minha-chave.pub no $HOME/.ssh/authorized_keys do servidor, e o problema está resolvido! :)</span></code>

Isso para mim é uma mão na roda, e espero que seja para vocês tambem. ;)

Há braços



_Old comments by: Adelar S.Q. | Not available anymore. :(_
