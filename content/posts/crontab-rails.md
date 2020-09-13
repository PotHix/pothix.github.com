+++
title = "Crontab dentro da sua aplicação rails com whenever"
aliases=[
  "post/crontab-dentro-da-sua-aplicacao-rails-com-whenever",
  "2009/12/02/crontab-dentro-da-sua-aplicacao-rails-com-whenever.html",
  "blog/development/crontab-dentro-da-sua-aplicacao-rails-com-whenever"
]
date = "2009-12-02"
tags = ["ruby","tech"]
+++

Hoje estou aqui para falar de uma coisa que quando vi pela primeira vez
ignorei por parecer uma coisa boba, mas olhando melhor eu percebi que é
uma idéia bem interessante. O que a gem whenever faz é manter o seu
crontab de uma forma mais Ruby, e melhor, dentro da sua aplicação!

A principio parece estranho tentar manter o crontab dentro da sua
aplicação, mas ganhamos muitas vantagens com isso:

* versionamento
* menos acesso ao servidor
* rapida atualização do crontab do servidor via capistrano
* forma mais legível de ver o crontab

E tudo isso não influi no crontab que você já possui ( e que muitas
vezes tem muita coisa que não é relacionada com a aplicação ), pois o
whenever cria uma seção que ele atualiza mantendo a seção antiga onde
está.

Para instalar o whenever é a mesma facilidade de sempre:

    sudo gem install whenever

**OBS**: Lembrando que a primeira linha só é necessária uma vez, se
  você já tem o gemcutter no seu sources então ignore-a.

Depois disso execute:

    wheneverize .

O comando acima vai gerar os arquivos necessários para a utilização do
whenever ( básicamente o config/schedule.rb ).

E a partir de agora você já pode atualizar o seu crontab com as suas
configurações feitas no config/schedule.rb executando o comando:

    whenever --update-crontab suaaplicacao

Quando você passa como parametro a sua aplicação ele cria um bloco
apenas para as configurações da sua aplicação no crontab.

Mas é claro que você não vai precisar acessar o servidor e executar
esse comando toda vez que você alterar o arquivo de schedule, para
isso você provavelmente deve estar usando o capistrano para ser mais
DRY. Se estiver usando inclua algumas linhas no seu deploy.rb:

    after "deploy:symlink", "deploy:update_crontab"

    namespace :deploy do
       desc "Update the crontab file"
       task :update_crontab, :roles => :db do
          run "cd #{release_path} && whenever --update-crontab #{application}"
       end
    end


**OBS**: Se você tiver problemas no deploy com essa linha ( como se o
comando whenever não existisse ), tente adicionar o path absoluto
para o whenever.

E com isso a cada vez que você fizer um cap server deploy seu crontab
será atualizado com as configurações contidas no config/schedule.rb.

Veja alguns exemplos do que pode ter no seu schedule.rb:

    every 4.minutes do
      rake "ts:in"
    end

    every 1.day, :at => '5:25 am' do
      rake "bla_bla"
    end

    every [:monday, :thursday], :at => '11:59 am' do
      command "sudo rm -rf /" # claro!
    end

Nada do que eu demonstrei aqui é uma grande novidade, você pode ver mais
exemplos de como usar no [Railscasts] e na [própria página do plugin].

Espero que seja útil para mais alguem como está sendo para mim.

  [Railscasts]: http://www.railscasts.com
  [própria página do plugin]: http://github.com/javan/whenever


_Old comments by: Mateus, Vini, Fabiano P S, Luiz Cezer | Not available anymore. :(_
