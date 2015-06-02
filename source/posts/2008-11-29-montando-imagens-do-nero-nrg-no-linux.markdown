---
title: "Montando imagens do Nero ( nrg ) no Linux"
date: "2008-11-29"
tags: "slackware,tech,ubuntu"
category: "win2linux"
---

Æ!!

Vou comentar agora sobre como montar aquela imagem chata do Nero (.nrg ) que seu amigo que gosta de janelas lhe enviou com aqueles vários arquivos que você tinha pedido...É um Hack bem fácil!
### Instalações:
Primeiro instale o nrg2iso
<h4>No Ubuntu</h4>
<blockquote><code># apt-get install nrg2iso</code></blockquote>
ou
<h4>No Slackware:</h4>
Baixando o [pacote no Linux Packages](http://www.linuxpackages.net/pkg_details.php?id=12493 "Nrg2iso no LInux Packages") e instalando normalmente com:
<blockquote><code># installpkg nrg2iso-versao.tgz</code></blockquote>
### Utilização:
Agora já podemos utilizar o nrg3iso para converter nossa imagem:
<blockquote><code>$ nrg2iso imagem.nrg novaimagem.iso</code></blockquote>
E já temos nossa imagem convertida como novaimagem**.iso** e podemos montar nossa imagem normalmente em alguma pasta, como por exemplo /mnt/dirImagemMontada
<blockquote><code># mount -o loop -t iso9660 imagem.iso /mnt/dirImagemMontada</code></blockquote>
E pronto! Lá estarão seus arquivos para você brincar! ;)

Há braços



_Old comments by: Anderson Kemper, crebin | Not available anymore. :(_
