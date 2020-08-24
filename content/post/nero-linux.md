+++
title = "Montando imagens do Nero (nrg) no Linux"
aliases=[
  "post/montando-imagens-do-nero-nrg-no-linux",
  "2008/11/29/montando-imagens-do-nero-nrg-no-linux.html",
  "blog/win2linux/montando-imagens-do-nero-nrg-no-linux"
]
date = "2008-11-29"
tags = ["tech","linux"]
+++

Vou comentar agora sobre como montar aquela imagem chata do Nero (.nrg
) que seu amigo que gosta de janelas lhe enviou com aqueles vários
arquivos que você tinha pedido... É um hack bem fácil!

### Instalações

Primeiro instale o nrg2iso

#### No Ubuntu

    # apt-get install nrg2iso

#### No Slackware

Baixando o [pacote no Linux Packages](http://www.linuxpackages.net/pkg_details.php?id=12493)
e instalando normalmente com:

    # installpkg nrg2iso-versao.tgz

### Utilização

Agora já podemos utilizar o nrg3iso para converter nossa imagem:

    $ nrg2iso imagem.nrg novaimagem.iso

E já temos nossa imagem convertida como novaimagem**.iso** e podemos
montar nossa imagem normalmente em alguma pasta, como por exemplo
/mnt/dirImagemMontada

    # mount -o loop -t iso9660 imagem.iso /mnt/dirImagemMontada

E pronto! Lá estarão seus arquivos para você brincar! ;)



_Old comments by: Anderson Kemper, crebin | Not available anymore. :(_
