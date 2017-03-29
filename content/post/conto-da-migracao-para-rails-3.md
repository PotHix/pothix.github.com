+++
title = "Conto da migração para Rails 3"
aliases=[
  "2010/10/21/conto-da-migracao-para-rails-3.html",
  "blog/development/conto-da-migracao-para-rails-3"
]
date = "2010-10-21"
tags = ["rails","ruby","tech","dev"]
categories = "dev"
+++

Nesse post eu vou falar um pouco de como foi atualizar a aplicação que
eu trabalho atualmente para Rails3.

Em uma segunda feira eu tive a brilhante ideia de aproveitar que as
tasks que eu estava fazendo estavam dependentes de algumas coisas que
ainda não estavam feitas, e resolvi começar a atualizar a aplicação
para Rails3 só para saber o trabalho que ia dar, e no final do dia eu
já tinha feito todas as alterações necessárias para o boot da
aplicação e para rodar a suite de testes (não fazer os testes passar,
apenas rodar!).  Depois disso foi mais 1 dia para fazer todos os
testes passar, e mais alguns outros testando a aplicação e resolvendo
pequenos problemas de safe html e derivados.

#### Dicas para fazer a conversão do código

##### Tenha testes

Se não tiver testes, esqueça essa idéia e pare de ler o post, a menos
que você queira quebrar sua app em produção.

##### Faça sua aplicação e suite de testes funcionar

Primeiramente, se você ainda não conhece, vale a pena dar uma olhada
no plugin chamado Rails Upgrade que te dá um guideline do que você
precisa ir alterando para tornar sua aplicação compatível com Rails 3.
Esse plugin faz algumas coisas como criar o application.rb baseado no
seu environment, te dar alguns guias das configurações que mudaram e
tenta converter suas rotas para o novo padrão (vide próximo tópico) O
primeiro passo a se tomar é utilizar o plugin (ou não, pode fazer
manualmente também) e trocar as coisas principais para que sua
aplicação pelo menos passe pela etapa de boot.  Quando passar por esse
passo vá para seus testes, e se for RSpec prepare-se para ter alguns
problemas de conversão, por que algumas coisas mudaram do RSpec 1 para
o RSpec 2, e você vai ter que lidar com os problemas de atualização
dos seus testes tambem. A maioria das coisas que tive problemas foi
com métodos que não existem mais como o have_tag por exemplo.

##### Não use o Rails Upgrade para a conversão das rotas

Como disse acima, esse plugin é um ótimo guia, mas tome cuidado com
ele como solução final. Você pode dizer para ele converter suas rotas,
mas tome cuidado, por que dependendo da forma que as suas rotas estão
diagramadas o resultado que ele dá não é muito conciso. O que eu fiz
foi utilizar a conversão dele apenas como estudo para saber como está
a nova syntax e refiz o arquivo de rotas do zero.

##### Pare de usar remarkable

Eu sempre gostei de usar Remarkable para testar relacionamentos,
validações e etc, mas remarkable no Rails 3 é uma grande porcaria. Os
desenvolvedores que começaram o projeto ficaram sem tempo para o mesmo
e deixaram na mão de outros, que não tem a mesma qualidade ou
preocupação com o projeto, portanto, a menos que você queira ser o
novo mantenedor do projeto e fazer as alterações necessárias para que
funcione bem no Rails 3, fuja dele agora.  O que eu fiz foi começar a
usar o Shoulda para algumas coisas que me convinham, como por exemplo
testes de relacionamento e validações. Para quem estiver interessado
em fazer essa migração, eu fiz grande parte das trocas do que eu usava
(validações e relacionamentos) facinho com grep e sed! Fiz [um
Gist](http://gist.github.com/640517) disso.

##### Evite dependencias

Assim como o remarkable acima, cada outra gem/plugin que você está
utilizando pode ter problemas com o Rails 3, portanto, antes de fazer
a migração procure manter o menor número possível de dependencias no
seu projeto, e as que você tiver veja se já possui uma versão
funcional para Rails 3, e se não possuir você já pode se voluntariar
para fazer ;).

##### Use o sufixo _html nos locales necessários

Suponho que as aplicações Rails estão usando os formatos de
internacionalização do Rails, portanto suas string não estão perdidas
pelas Views, Controllers e Models e sim estão em seus devidos arquivos
de locale.  Levando esse cenário óbvio em conta lembre-se de que você
não precisa dar raw em toda mensagem que possui HTML por que Rails já
faz isso para você quando você adiciona o sufixo _html na sua chave de
locale. Exemplo:

	not_yet: "**Ainda não**"

Ficaria:

	not_yet_html: "**Ainda não**"

E assim ele não vai escapar automaticamente o HTML dessa chave.

##### Vá lidando aos poucos com DEPRECATION WARNING

Quando você rodar sua suite de testes pela primeira vez já vai ser
bombardeado por uma quantidade monstra de _DEPRECATION WARNING_s, mas
não saia atacando eles de uma vez, primeiramente tenha em mente fazer
sua aplicação funcionar e você vai corrigir esses probleminhas aos
poucos enquanto estiver corrigindo os erros ou desenvolvendo coisas
novas.  Felizmente a API do ActiveRecord não deixou de funcionar,
portanto você ainda não vai precisar fazer grandes modificações para a
nova syntax utilizando Arel por enquanto, o que vai tornar a migração
menos dolorosa e você pode migrar aos poucos enquanto seu código já
estiver rodando.

#### Dicas de organização para a migração

##### Crie um branch separado e altere aos poucos

Sim! Todos queríamos que toda a equipe parasse por alguns dias e fosse
alterar o projeto para funcionar com Rails 3, mas todos sabemos que
isso não é possível na realidade de ninguém. Então uma coisa legal
para se fazer (principalmente quando se está trabalhando com controle
de versão distribuído, onde branches não são tão penosos) é criar um
branch e manter uma pessoa trabalhando nele enquanto os outros vão
tocando o projeto, sempre com muita comunicação para evitar que as
pessoas criem cada vez mais código legado que precisará ser migrado,
até que chegue uma hora que você possa voltar para o master e ficar
sem deploy por alguns poucos dias para que a aquipe termine o trabalho
e faça alguns testes.

##### Ataque um problema de cada vez

Acho muito legal a combinação Rails + Ruby1.9, mas acho que as coisas
ficam bem mais fáceis quando atacamos no estilo estripador (por
partes), assim você tem um caminho a menos para analizar de onde vem o
possível erro, e assim que terminar uma migração para Rails 3 já pode
começar uma para Ruby 1.9 e ver o que vai quebrar apenas para essa
implementação específica.

##### Use seu ambiente de homologação

Não sei como seu deploy funciona atualmente, mas talvez com a migração
você precise alterar ele e é na hora que você for colocar no seu
ambiente de homologação que você vai descobrir isso, portanto, use-o
bem! :)

#### Conclusão e Saldo final

Fazer a migração para o Rails 3 foi mais simples do que eu imaginei,
mas mesmo assim tomou vários dias para a conclusão.  Nos meus calculos
levou mais ou menos 2 dias só meus e uns 3 dias meus e de outro
desenvolvedor, isso contando os problemas de merge e etc. Portanto
acho que em 1 semana é possível migrar uma aplicação bem coberta por
testes sem grandes problemas e sem precisar parar a sua equipe inteira
por um grande período. Escolha aquela semana com um feriado e atualize
sua aplicação. :)



_Old comments by: Diego Carrion, Willian Fernandes | Not available anymore. :(_
