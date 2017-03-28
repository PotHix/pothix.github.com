+++
title = "BookReview: High Performance Websites"
aliases=["2009/07/30/bookreview-high-performance-websites.html"]
date = "2009-07-30"
tags = ["books","review","dev","tech"]
categories = "review"
+++

Mais um dos livros que eu consegui terminar de ler nas férias! O livro
fala sobre performance de front end, como fazer as suas páginas
carregarem mais rapidamente e fornecer uma melhor experiência para o
usuário.

O livro começa explicando um pouco sobre o HTTP, seus métodos e
utilizações, e depois inicia as sobre as 14 regras para ter um website
mais performático. Eu vou tentar mostrar um pouco de cada uma das
regras que o livro aborda, mas é claro que sem os grandes detalhes,
comparações e exemplos que o livro dá, que são muito amplos e
interessantes para se entender, mas vou dar uma visão geral de qual é
o conteúdo da regra, para te chamar para comprar o livro e ler (ou
não...hehhe).

As 14 regras são:

#### Faça menos requisições HTTP

Obviamente se tivermos menos requisições HTTP teremos páginas mais
rápidas, então o livro recomenda várias técnicas legais como combinar
imagens e usar estampas CSS, combinar scripts para evitar várias
chamadas, assim chamando um script só, e tambem combinar folhas de
estilo.

#### Use uma Rede de Distribuição de conteúdo

Distribua seu aplicativo de diferentes servers distribuídos
geograficamente, pois assim você conseguirá entrega de pacotes mais
rapidamente para determinados tipos de usuarios.

#### Adicione um cabeçalho expires

Sempre usar bem os cabeçalhos expires dos pacotes, para que o browser
possa controlar de maneira correta o cache. Utilizando expires para
datas futuras você cosegue um ótimo ganho de performance, por que não
vai ser necessária outra chamada HTTP, pois o browser vai saber que
seu cache não expirou e vai manter os arquivos já baixados.

Obviamente isso deve ser bem controlado para você saber o que deve
ficar no cache e quando substituir determinadas coisas (que podem ser
substituidas alterando o nome, por exemplo).

#### Componentes gzip

Sempre usar o mod de gzip (se vc estiver usando apache), pois os
ganhos são muito grandes, e chegam a mais de 50% do total de tempo
final de renderização da página.  #### Coloque as folhas de estilo no
topo Um argumento bem legal para esse! O autor do livro mostrou suas
experiências com o arquivo CSS em outros lugares que não são o topo e
percebeu que a página esperava pelo CSS para poder continuar
renderizando a página, portanto reduz a experiência do usuário, que
ficará com uma página em branco enquanto aguarda, sendo que poderia
estar vendo aos poucos a página.

O que faz o browser esperar que o CSS seja carregado é o fato de ele
não ter que renderizar duas vezes (uma com o css padrão do browser e
outra com o seu CSS personalizado).

#### Coloque os scripts no final

O argumento para esse é que a pagina sempre para de carregar os outros
componentes enquanto está carregando os scripts, por que eles podem
alterar a página com algum document.write, e muitas a ordem precisa
ser mantida, portanto com os scripts no final da página você vai
retardar menos o carregamento, pois quando estiver carregando o script
o usuário já vai ter uma boa parte da página para se intreter.

Lembrando que nem sempre é possível colocar o script no final da
página, pois as vezes os elementos precisam do script carregado para
fazer determinadas coisas, mas sempre que possível a sua performance
pode ser melhorada com os scripts no final.

#### Exite expressões CSS

Todos sabemos que expressões CSS ( usando expression ) não é bom, e o
livro demonstra alguns por que's disso que não vou abordar, apenas
digo: Não use!

#### Deixe o Javascript e o CSS em arquivos externos

Interessante essa parte, por que como eu pensava, realmente deixar o
CSS e o Javascript embutidos na página é mais rápido, mas quando se
tem Javascript e CSS em arquivos separados e com um expires
configurado você tem uma melhor resposta por que os scripts seriam
carregados uma vez só e depois mantidos em cache enquanto várias
páginas ficariam menores para carregamento.

#### Reduza as pesquisas em DNS

Nesse capítulo ele fala um pouco do tempo que demora para resolver um
DNS e que é possível fazer caches de DNS

#### Minimize o Javascript

É comentado um pouco de ofuscamento de Javascript, quando você tira
todos os espaços e caracteres inúteis do seu javascript deixando ele
funcional e mais leve. Quando se usa Gzip essa técnica ajuda pouco,
pois o texto já vai ser compactado, mas mesmo assim ainda há ganho, e
um comentário pessoal: Se você não altera esse javascript com
frequência, por que não? :)

#### Evite redirecionamentos

Os redirecionamentos são reponsáveis por uma boa parte do tempo de uma
requisição, deixando o usuário vendo uma tela em braco nesse meio
tempo, portanto não são nada bons para um website. O livro trata de
algumas formas para evitar redirecionamentos, como alias do apache por
exemplo.

#### Remova scripts duplicados

Parece estranho a primeira vista mas realmente acontece dependendo do
tamanho do seu código e a quantidade de CSS e Javascript que você
possui em sua página. O autor resolveu colocar esse tópico analizando
grandes sites da internet e percebendo que vários deles possuia esse
problema, gerando requisições em vão.

#### Configure as Etags

Use-as ou deixe-as! As Etags podem ajudar bastante na performance se
bem configuradas e o livro dá vários exemplos de como isso pode ser
feito, alem de uma explicação legal do que são as Etags.

#### Faça com que o AJAX se aproveite do cache

O livro descreve alguns exemplos onde o cache pode ser utilizado para
aplicações com AJAX (utilizando expires com data futura) e outros
onde realmente é dinâmica demais para se usar um cache. É interessante
para se descobrir maneiras diferentes de se lidar com a performance e
como ela se aplica para o seu caso.

#### Analizando 10 grandes sites

Essa foi uma parte que eu gostei bastante de ler, por que ele mostra
grandes sites que estamos acostumados acessar ( os sites analisados
nesse capítulo são: Amazon, AOL, CNN, eBay, Google, MSN, MySpace,
Wikipedia, Yahoo, Youtube ) e mostra as partes boas e ruim que foram
implementadas, e assim você ve com ótimos exemplos o que poderia ser
feito, juntamente com as ferramentas utilizadas para a medição de cada
uma das funcionalidades, e você pode muito bem utilizar as mesmas
ferramentas para medir o seu website.

#### Conclusão

O livro é muito legal para se saber como trabalhar bem uma performance
de front para você proporcionar uma melhor experiência para o seu
usuário, deixando uma navegação mais rápida. Algumas das coisas que o
livro aborda são extremas (necessárias para grandes sites, como no
caso do autor, o Yahoo!), e muito provavelmente não são totalmente
úteis em pequenos websites, mas a grande maioria é totalmente
aplicável.

Eu particularmente gostei bastante do livro, mesmo ainda não
aplicacando tudo o que o livro fala, consegui ter uma boa noção de
boas práticas e experiências de alguem que já trabalhou com isso e tem
bons argumentos para lhe dizer por que isso seria uma boa escolha.

Eu recomendo! :)



_Old comments by: CrociDB, Daniel, marzvix, dirs, Pedro Pimentel | Not available anymore. :(_
