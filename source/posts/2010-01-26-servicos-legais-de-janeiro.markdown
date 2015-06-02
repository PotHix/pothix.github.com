---
title: "Serviços legais de Janeiro"
date: "2010-01-26"
tags: ""
category: "cool services"
---

E ae galera! Vamos para mais um post sobre os serviços legais do mes.

#### OpenDNS ####

Estranho eu falar de [OpenDNS](http://www.opendns.com/) não? Já existe
faz tanto tempo e muita gente já conhece/usa.  O que me fez colocar
ele na lista de serviços legais foi justamente as opções que você tem
na web do OpenDNS!

Se você se cadastrar no OpenDNS você pode configurar muitas coisas
legais, como por exemplo a página de endereço não encontrado, ou a
página de tentativa de fishing, entre outras. Além de configurar
essas páginas você pode tambem definir atalhos, para quando você
tentar acessar algo como: "http://pothix" ele já redirecionar para
"http://pothix.com/blog" por exemplo. :)

#### Heroku ####

O [Heroku](http://heroku.com/) é bem conhecido pela comunidade Ruby,
pois é uma das maneiras mais fáceis de se fazer deploy de uma
aplicação simples, bastando poucos comandos para que sua aplicação já
fique disponível na web como um subdomínio do Heroku!

Só para dar uma idéia da simplicidade, o que você precisa fazer para
mandar sua aplicação para o heroku (estou assumindo que vc usa Git):

* `sudo gem install heroku`
* `heroku keys:add path/para/sua/key`
* `heroku create nome_do_proj`
* `git push heroku master`

E pronto! Sua aplicação já estará disponível em http://nome_do_proj.heroku.com

#### Caliper ####

O [Caliper](http://getcaliper.com/caliper) é um serviço web bem
interessante para se obter métricas do seu código.

Uma das coisas que eu mais gostei no Caliper é que ele não exige
cadastro para uso, você pode apenas colocar a URL do seu projeto Git e
ele já gera os relatórios utilizando a gem **metric_fu** e mantém um
link para acesso dos mesmos.

Como de costume os meus posts sobre os serviços legais do mes são
curtos, portanto, eu fico por aqui! Espero que sejam úteis! ;)
