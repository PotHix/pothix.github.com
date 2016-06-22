---
title: "Utilizando o sshfs"
date: "2008-11-29"
tags: "tech,linux"
category: "linux"
---

Estou utilizando bastante o
[sshfs](http://fuse.sourceforge.net/sshfs.html "sshfs") para
transferir alguns arquivos para o servidor, ao invés de utilizar o bom
e velho scp, por questão de ficar mais prático e facil a cópia de
vários arquivos para diretórios distintos.

O que facilita bastante é utilizar a sua chave privada ( explicado por
mim [nesse tópico](http://pothix.com/blog/slackware/deixando-seu-ssh-mais-facil-de-trabalhar))
para montar os seus diretórios sshfs, assim você terá o diretório do
servidor montado facilmente em seu computador e poderá enviar arquivos
para esse diretório e seus sub-diretórios como se estivesse copiando
arquivos para outro diretório qualquer.

### Instalação

Se você está no Ubuntu as coisas são fáceis e práticas, com o bom e velho apt-get:

    # apt-get install sshfs
    
Agora se você utiliza Slackware temos alguns passos a mais, mas nada
que lhe faça arrancar os cabelos ;)

Primeiramente instale o
[fuse](http://slackbuilds.org/repository/12.0/system/fuse/) no
[velho esquema SlackBuilds](http://pothix.com/blog/slackware/facilitando-a-instalacao-no-slackware "Facilitando a instalação no Slackware")
(ou outro se preferir).

Depois instale o
[sshfs](http://www.linuxpackages.net/search_view.php?by=name&amp;name=sshfs&amp;ver=12.1)
(dessa vez do Linux Packages para mudar um pouco)

### Utilização

Primeiramente temos que subir o módulo do fuse:

    # modprobe fuse
    
Essa tarefa pode ser automátizada posteriormente descomentando esse
módulo no <code>/etc/rc.d/rc.modules</code>

E com isso já podemos usar o nosso sshfs! :)

Eu costumo utilizar com os seguintes parâmetros:

    sshfs root@server:/local/da/pasta/no/server /local/da/minha/pasta/local -o reconnect,sshfs_sync
    
E agora é só correr para o abraço e ter o seu diretório do servidor
montado localmente para cópia de arquivos.
