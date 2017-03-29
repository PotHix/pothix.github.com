+++
title = "Deploying a simple Merb application on Locaweb"
aliases=[
  "2009/01/07/deploying-a-simple-merb-application-on-locaweb.html",
  "blog/english/deploying-a-simple-merb-application-on-locaweb"
]
date = "2009-01-07"
tags = ["english","linux","ruby","tech"]
categories = "dev"
+++

I writing this post to help my friends of
[Rubylearning](http://rubylearning.org/class/ "Rubylearning.org") with
a little [Merb](http://merbivore.com/ "Merb Official Home Page")
application deployment on [Locaweb](http://www.locaweb.com.br "Locaweb").
I'm just translating some informations that you can find
[here](http://prodblog.locaweb.com.br/2008/11/11/suporte-a-merb-10-na-hospedagem-compartilhada-linux/ "Merb on Linux Share Host (in portuguese )") in portuguese.

Lets get started! :D

First open the

[Domain Manager](http://painel.locaweb.com.br/painel_controle/gerenciador_dominios.asp "Gerenciador de domínios")
(gerenciador de domínios) on Locaweb Panel (painel da Locaweb) and
configure the pointer of your main site to other directory on
public_html of your account (this directory don't need to exist).

Follow this steps:

1. Click on "alterar" (change)
2. Change the "Diretório Web" (web directory) to the new diretory
3. And click on button "Salvar" (save)

Transfer your application to this directory on your host. For this
example, lets say that your application is called "sample_merb", so,
connect via SSH on your account and create the directory "rack_app":

    mkdir -p rack_app/sample_merb

And move your application to there.

Your application must to have a file called "config.ru" to be executed
by Phusion Passenger, so, you need to create this file on your
application folder (rack_app/sample_merb on this case) with this
content:

    require 'rubygems'
    require 'merb-core'

    Merb::Config.setup(:merb_root   => “.”, :environment =>; ENV['RACK_ENV'])

    Merb.environment = Merb::Config[:environment]
    Merb.root = Merb::Config[:merb_root]
    Merb::BootLoader.run
    run Merb::Rack::Application.new

Now you need to create a symbolic link on your public_html diretory,
as you have configured on your Domain Manager (gerenciador de domínios)
of Locaweb Panel.

    ln -s ~/rack_app/sample_merb/public ~/public_html/sample_merb

By using this simple configuration you will have your application
pointed by apache with Phusion Passenger.

Just to you know, you can see the merb gems that are installed with:

    gem list | grep merb

Hope this help you on how to make your simple application works on Locaweb. ;)



_Old comments by: website erstellen lassen, Vikki Guitreau | Not available anymore. :(_
