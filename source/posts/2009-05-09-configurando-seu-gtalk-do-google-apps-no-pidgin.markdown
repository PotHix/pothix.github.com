---
title: "Configurando seu Gtalk do Google Apps no Pidgin"
date: "2009-05-09"
tags: "tech,linux"
category: "linux"
---

Resolvi postar sobre isso depois de passar por 3 empresas que usam o
[Google Apps for your Domain](http://www.google.com/apps/intl/en/business/index.html "Google Apps")
e eu sempre esbarrar com o maldito probleminha ao se configurar o Pidgin.

Pensei que isso era burrice minha de não ver a configuração correta,
mas depois percebi que não era só eu que não via essas configurações
para poder fazer o negócio funcionar! Como eu nunca anotava o
processo, sempre tinha que ficar pesquisando para ver se achava algo
relacionado a isso, e nunca funcionava.

Quando se pesquisa no Google sobre configurar o Pidgin para usar o IM
do seu Google Apps, você geralmente cai
[nessa página](http://www.google.com/support/a/bin/answer.py?hl=en&amp;answer=49147 "Google Apps Gtalk on Pidgin"),
onde está errado...

As configurações corretas para se usar são as seguintes:

        Aba "Basic":
        Protocol: XMPP
        Username: SeuUsuario
        Domain: sua_empresa.com.br
        Resource: gmail.com/ ( não sei se é realmente necessário )
        Password: ******

        Aba "Advanced"
        Connect port: 5222
        Connect server: talk.google.com
        File transfer proxies: proxy.jabber.org

E com isso você já vai ter o seu Pidgin funcionando com a sua conta do
Google Apps! :)



_Old comments by: Regis, Mateus, Fábio, Luiz Alvarez, Vitor, laercio, Ricardo, Augusto, Paulo Castellano, Bruno César, Jordan, Hugo | Not available anymore. :(_
