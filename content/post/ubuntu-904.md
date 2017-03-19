+++
title = "Ubuntu 9.04"
date = "2009-05-06"
tags = ["linux","tech"]
categories = "linux"
+++

Hoje estou aqui para falar um pouco sobre o Ubuntu 9.04! :)

Alguns dias atrás eu
[postei no twitter](http://twitter.com/PotHix/status/1691907398 "Opinião sobre Ubuntu 9.04")
que não estava satisfeito com o Ubuntu 9.04, e abaixo descrevo alguns dos motivos.

Primeiramente comecei tentando instalar ele pelo cd (para não ter que
deixar o computador ligado mil horas baixando, e tambem por que tenho
mais de 1 Ubuntu em casa, portanto mais de mil horas x 2) e não
consegui.... Procurei várias informações, desabilitei os sources e
deixei só o cd lá, e vários outros procedimentos, mas mesmo assim não
tive sucesso, e por isso tive que deixar o notebook ligado fazendo
download a noite inteira.

Ao terminar a instalação e reiniciar ele funcionou beleza! :)

Começando a brincar mais com o bichinho, eu descobri que o meu flash
tinha bugado (para variar...), e as coisas que utilizavam ele
estavam funcionando meia boca, sem contar que ainda tinha alguma
coisa bizarra que funcionava como um
[flashblock](https://addons.mozilla.org/en-US/firefox/addon/),
só que pior, por que quando eu clicava ele poderia funcioanar, ou
não. ¬¬

Tentei relevar isso, mas quando fui fazer uns testes com o compiz,
percebi que ele tambem não conseguia mais ativar os efeitos (tudo bem
que eu nem uso... Mas gostaria que funcionasse pelo menos :P),
retornando uma mensagem de que os efeitos não poderiam ser
habilitados. :(

Estava meio sem tempo para perquisar sobre isso, então ficou assim por
alguns dias, o que me deu um pouco de desânimo, e foi aí que postei no
twitter aquele comentário.

Ontem eu resolvi tirar um tempinho para resolver esses problemas, e
até que foi simples (como de costume)! ;)

### Resolvendo problema do Flash no Ubuntu 9.04:

Eu percebi que estava usando um plugin free do flash, e vi comentários
na internet que esse plugin não é tão bom como o da Adobe (mas
funcionava muito bem no 8.10 :P), portanto resolvi desinstalar e
instalar da Adobe:

    sudo apt-get remove --purge swfdec-mozilla swfdec-gnome mozilla-plugin-gnash gnash
    sudo apt-get install flashplugin-nonfree

E o flash já voltou a operar normalmente! :)

**OBS:** Se não conseguir resolver com o mesmo procedimento que eu
usei, veja se consegue com um dos
[outros 3 procedimentos que tem no UbuntuGeek](http://www.ubuntugeek.com/fix-for-flash-not-working-after-jaunty-upgrade-64bit.html "Procedimentos para resolver o problema do Flash no UbuntuGeek").

### Resolvendo problema do compiz no Ubuntu 9.04:

Pesquisando mais sobre o meu problema eu achei
[esse bug no LaunchPad](https://bugs.launchpad.net/ubuntu/+source/compiz/+bug/363967 "Bug no launchpad"),
com várias pessoas com o mesmo problema, e em um
dos ultimos comentários tem uma dica que resolveu o meu! :)

A minha placa de vídeo estava na blacklist do compiz, e eu comentei o
arquivo, deixando com que ela não fique mais blacklisted:

Abri o arquivo do compiz (que está em `/usr/bin/compiz`), comentei as
linhas referente a minha placa de vídeo, salvei e reiniciei.

Depois de logar fui testar o compiz, e lá estava ele funcionando
novamente! :D

É claro que eu já desabilitei os efeitos denovo por que não acho legal
ficar trabalhando com eles, mas já está lá funcioanndo para fazer
gracinhas! :P

Espero que seja útil para mais alguém.



_Old comments by: Pedro Costa Neves, Jésus Lopes, Phoenix, Guilherme, yarlos, venancio, marilia, lucas moraes | Not available anymore. :(_
