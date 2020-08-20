+++
title = "A facilidade do Ubuntu"
aliases=[
  "post/a-facilidade-do-ubuntu",
  "2008/11/29/a-facilidade-do-ubuntu.html",
  "blog/win2linux/a-facilidade-do-ubuntu"
]
date = "2008-11-29"
tags = ["tech","linux"]
categories = "linux"
+++

Deixa eu explicar aqui para quem estou destinando esse post. Esse post
é destinado a algumas pessoas que costumam me perguntar se o Linux é
difícil, se ele vai conseguir mexer nele se instalar, se Linux é
melhor que Windows e outras perguntas derivadas disso, portanto se
você já tem conhecimentos em Linux e já usa Linux esse post só vai
servir para você passar para seus amigos que não usam, pois é bem
básico.

Depois de comprar meu notebook e instalar o Ubuntu nele eu decidi
fazer esse post para acabar com aquela idéia das pessoas de que Linux
é difícil, que não faz nada, que nada funciona e etc.

Bem, eu [sempre gostei de utilizar o Slackware](http://pothix.com/blog/win2linux/como-sao-os-primeiros-passos-de-um-linuxer)
(e ainda é minha distribuição principal) e realmente Slackware não é
distribuição Linux para qualquer um...Você não pode dar um Slackware
na mão de um usuário final e falar para ele que é fácil, e talvez essa
seja a visão que os usuários de Windows tem do Linux.

Estou usando o Ubuntu faz mais ou menos uns 2 ou 3 meses, e muitas
vezes já me surpreendi com a facilidade de se fazer as coisas nele!
Mesmo um usuário final faria as coisas com uma facilidade espantosa
bastando apenas que ele queira conhecer coisas novas.

### Alguns Exemplos

#### Instalando impressora

Estava eu precisando imprimir um documento e já pensei... Configurar a
impressora vai ser Punk, mas vou tentar. Procurei nos menus do Gnome e
vi um "Printers" em:

**System > Administration > Printers**

E lá eu clico em "New" ele vai identificar todas as impressoras que
você tem na rede e plugadas no seu computador e te mostrar uma lista
de drivers para que você escolha qual utilizar.

Ou seja...Não tem dificuldade nenhuma.

#### Instalando programas

Muitos usuários tem medo do terminal, e alguns se atrevem a dizer que
é regredir muitos anos (eles são criativos ;)), mas o terminal te
facilita muita coisa em diversas tarefas rapidamente.

Podemos instalar novos programas rapidamente pelo terminal com um
simples comando! Digamos que queremos instalar o Inkscape para brincar
de fazer uns desenhos vetoriais, é moleza:

    $ sudo apt-get install inkscape

Pronto! Ele vai te dar informações sobre o pacote e perguntar se você
quer mesmo instalar o pacote que ele mostrou as informações ( caso
tenha digitado errado não instalar um pacote qualquer ), e é só
responder Y que ele vai instalar e deixar o programa prontinho para
usar!

#### Atualizando a distribuição

Além das atualizações normais que ele faz diariamente (obviamente é
facilmente configurável) tambem faz automáticamente as
atualizações de distribuição!

Pouco tempo atrás foi lançado o Ubuntu 8.10, e eu como tinha o Ubuntu
8.04, pensei em atulizar, e eis que surge uma atualização de
distribuição automáticamente no meu gerenciador de pacotes,
perguntando se eu gostaria de ir para a outra versão! :)

Obviamente é um processo demorado, pois são muitos pacotes para
atualizar (no meu caso foram mais de 1300), portanto muitos MBs (no
meu caso mais de 900) e muitos pacotes para instalar.

Tirando o tempo de download, pois depende muito da sua velocidade de
banda, ele instalou todos os pacotes em 20 minutos! E foi só reiniciar
(afinal foram mais de 1300 pacotes atualizados) para que eu tivesse
as ultimas atualizações da distribuição funcionando no meu notebook.

#### Interface

A interface do Ubuntu é bem facil de manipular, você pode arrastar
atalhos para suas barras, usar alguns efeitos divertidos como deixar
as janelas se motimentando como se fossem feitas de gelatina,
configurar o que deve e o que não deve aparecer para você no seu menu
e etc.

Não se familiarizou com a interface do Ubuntu? Ok, isso pode
acontecer, então você pode não usar o Gnome (interface principal do
Ubuntu) para usar o KDE (Interface principal do Kubuntu), é só você
instalar o Kubuntu ao invés do Ubuntu para que você já tenha uma
interface diferente para utilizar.

#### Aplicativos para escritório

O Ubuntu já vem com ferramentas para suas edições simples, como
processador de texto (writter), Planilhas (calc) e criador de
Slides para apresentação (presentation) para que você possa fazer
suas ações simples de escritório facilmente. Ele tambem traz um
aplicativo para você receber todos os seus e-mails no seu computador e
poder lê-los offline após baixar (evolution).

O Ubuntu já traz por padrão um aplicativo de Lista de taferas (todo
list) para que você possa gerenciar suas tarefas facilmente e se
organizar melhor.

Lembrando que esses são apenas os aplicativos nativos, mas você pode
instalar facilmente outros programar para Linux com um simples `sudo
apt-get install` ;)

#### Vídeos e musicas

Você pode facilmente ouvir suas musicas e ver seus vídeos preferidos
no Linux usando alguns programas a parte como o
[amarok](http://amarok.kde.org/ "Amarok") e o
[gxine](http://xinehq.de/index.php/releases "Gxine") ou o
[mplayer](http://www.mplayerhq.hu/design7/news.html "MPlayer"), apenas
usando o seu padrão `apt-get install` para instalar, nada de sair
procurando aplicativos, baixando e depois instalando. ;)

Você provavelmente vai precisar de uns plugins para assistir os seus
vídeos dependendo do formato deles e isso depende do seu player e do
tipo de vídeo, mas nada muito difícil de se conseguir! =)

#### Internet

O que você usa está na internet? Você usa o internet explorer no seu
sistema? Saia do lado negro pelo amor de Deus! :P

O Ubuntu já vem com o Firefox instalado e é tudo facinho para
utilizar. Você pode acessar a grande maioria dos sites da internet
normalmente, e se por um acaso você encontrar um site que você não
consiga navegar com o FIrefox você pode usar a

[extensão User Agent
Switcher](https://addons.mozilla.org/en-US/firefox/addon/59)
do Firefox e ele vai renderizar a página como se
fosse um internet explorer para que você possa navegar. Mas se isso
realmente acontecer faça um favor para toda a internet e envie um
e-mail para o criador desse site reclamando dos seus problemas, pois
pelo visto ele não está nem pensando em muitas pessoas.

Precisa usar o MSN? Moleza! Só usar o [Kopete](http://kopete.kde.org/),
o [Pidgin](http://www.pidgin.im/ "Pidgin"), o
[aMSN](http://www.amsn-project.net/ "aMSN") ou qualquer um dos outros
vários que tem para esse serviço! Mas...Quer uma dica? Use outros
serviços bem mais interessantes como o do Gtalk (que pode ser
configurado no Pidgin e no Kopete) ou até mesmo o
[Skype](www.skype.com "Skype") (que pode ser instalado com apt-get
install :P )

#### Fotos

Quer manusear suas fotos, fazer modificações, disponibilizar elas na
internet? Isso é tudo moleza no Ubuntu!

Se você gosta de ter um programa para gerenciar suas fotos, criar
alguns, colocar tags, fazer upload para a internet e mais um monte de
coisas, é só usar o [Picasa](http://picasa.google.com/ "Picasa")
(adivinha como instalar ele? Sim! apt-get install) que é um das
[dezenas de serviços do Google](http://pt.wikipedia.org/wiki/Lista_de_ferramentas_e_servi%C3%A7os_do_Google)
e portanto fica vinculado com a sua conta do
Google (Gmail, Orkut ou outros) e suas fotos ficam na internet **se
você quiser** , pois podem ficar apenas no seu computador tambem.

Tirou uma foto e ela não ficou legal? Basta dar uma pequena alterada
usando o [GIMP](http://www.gimp.org/ "GIMP"), que é um manipulador de
imagens bem interessante para se conhecer, e é claro que é gratuito e
Open Souce. ( preciso dizer que é facil de instalar? )

#### Jogos

Esse tópico é um pouco contraditório com o que você deve estar
esperando, pois você não vai encontrar o seu

[GTA San
Andreas](http://www.rockstargames.com/sanandreas/),
[The Sims](http://thesims.ea.com/ "The Sims"),
[Spore](http://www.spore.com/ftl "Spore") (ou seja lá o que for que
você jogue em outro sistema operacional) em versão oficial para
Linux. Até podem existir versões portadas dos seus jogos para Linux ou
utilizando [Wine](http://www.winehq.org/ "Wine") (pode ser baixado
por apt-get para variar um pouco) que roda programas de Windows no
Linux, mas o Wine ainda não está perfeito e não vai ser qualquer jogo
que vai rodar facilmente com ele...:/

Em compensação o Linux tem
[alguns jogos nativos](http://pt.wikipedia.org/wiki/Jogos_Linux "Jogos para Linux")
que são legais, obviamente não tanto quando outros jogos e não em
maior quantidade, mas eles existem! :)

Tem um [post muito legal no Techforce](http://www.techforce.com.br/index.php/news/linux_blog/jogos_no_linux)
que fala de alguns modos para rodar jogos no Linux, alguns jogos que
tem versão para Linux e outras coisas bem interessantes.

Se você é um gamer que seu computador se tornou um vídeo game, agora
**ainda** não é seu momento com Linux, mas quem sabe ele virá! ;)

Bem...Tentei mostrar acima muitas coisas simples que as pessoas
utilizam e podem fazer normalmente (e facilmente) no Linux, apenas
para mostrar que o Linux tem ferramentas para você fazer as coisas e
tem coisas interessantes, mas ainda precisamos assumir essa mudança de
paradigma e mudança de conceito para decidirmos aprender mais coisas e
ver como é legal outras coisas que nem lhe passavam pela cabeça que
existiam.

Se tiverem alguma dúvida é só postar nos comentários, que farei o
possível para responder.



_Old comments by: Junior, Andre | Not available anymore. :(_
