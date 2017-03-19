+++
title = "XMPP e Ruby"
date = "2012-07-10"
tags = ["ruby","dev","tech"]
categories = "dev"
+++

Alguns (vários…) meses atrás eu fiz uma palestra pequena no Guru-SP(São Paulo
Ruby Users Group) sobre Ruby e XMPP, os vídeos e slides estão disponíveis:

<iframe width="560" height="315" src="https://www.youtube.com/embed/HDsxF0bCInI" frameborder="0" allowfullscreen></iframe>

<iframe src="http://www.slideshare.net/slideshow/embed_code/15508823" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" allowfullscreen webkitallowfullscreen mozallowfullscreen> </iframe>

Nessa talk eu mostrei como criar dois bots simples e como subir eles na sua
conta do Gmail. A Gem blather tem uma DSL bem legal para trabalhar com XMPP em
Ruby, mas nos meus testes funcionou muito melhor com ruby 1.9.3 do que com 1.9.2.

Para fazer a parte de daemon e gerar uma estrutura para o projeto eu utilizei
uma gem chamada daemon-tools, que provê vários metodos úteis para esse tipo de
projeto.

Se tiverem dúvidas postem aí nos comentários.
