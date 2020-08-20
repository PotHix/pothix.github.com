+++
date = "2017-06-09T19:08:18-03:00"
draft = true
title = "Abertura de empresa"
+++

Esse texto vem mostrar a odisséia que é abrir uma empresa de prestação
de serviços de desenvolvimento de Software no Brasil.

**DISCLAIMER**: Eu não sou contador, mas essas são as informações que
eu levantei depois de toda a minha pesquisa, assim eu consegui
conversar melhor com os contadores. Leia, entenda e converse com eles.

## Um pouco de história

Eu fui indicado por um amigo para prestar serviços de software para
uma empresa que tem base fora do Brasil. Fiz o teste, implementei
algumas features e fizemos um contrato simples de X horas por mês, com
pagamento por hora.

Parecia uma boa hora para abrir uma empresa, afinal, é isso que tem
que fazer para ficar dentro da lei, certo?

Fiquei semanas pesquisando como seria abrir uma empresa para prestar
serviços para o exterior. O melhor documento que eu achei foi o
do [Tapajós](http://tapajos.me/trabalhando_fora), mas mesmo assim
ainda faltavam muitas informações sobre como as coisas
funcionavaem. Eu conversei com várias pessoas e falei com um contador,
cada um me falava uma coisa diferente.

Até que falei com um amigo de um amigo que trabalha para o exterior e
recebe como pessoa física. Pareceu uma boa alternativa.

## Recebendo como pessoa física

Parece ser meio Off-Topic mas não é. Muitas vezes você não precisa
realmente abrir uma empresa para fazer seus trabalhos freelance dentro
da lei, você pode simplesmente receber como pessoa física.

Caso esteja prestando serviços para fora do Brasil, você pode fazer
uma invoice como pessoa física mesmo e receber os valores. Eu
recomendo abrir conta em uma corretora porque as taxas dos bancos
tradicionais são bem ruins.

Quando você recebe o dinheiro, você deve usar
o
[Carnê Leão](https://idg.receita.fazenda.gov.br/orientacao/tributaria/pagamentos-e-parcelamentos/pagamento-do-imposto-de-renda-de-pessoa-fisica/carne-leao/2017/programa-carne-leao-2017) para
declarar o recebimento e pagar os impostos. Caso tenha algum duplo
desconto (no caso de você já trabalhar como CLT), o restante do
imposto será cobrado na sua declaração de imposto de renda. Dessa
forma, você vai pagar o mesmo valor que paga como CLT, 27.5% de
imposto sobre o recebimento (considerando o maior valor).

Você deve estar se perguntando: "Caramba! 27.5% de imposto! Pessoa
Jurídica é muito menos!". E vamos entender porque eu resolvi ficar com
esse valor.

Eu moro em Diadema, sites como
o [Contabilizei](http://contabilizei.com.br/) e
o [Agilize](https://www.agilize.com.br/) não suportam a minha cidade
ainda. Com isso em mente, vamos considerar alguns custos:

**Contador**: Meio salário mínimo por mês + decimo terceiro (pois é...)
**Conta PJ**: R$ 70 por mês
**Abertura da empresa**: chutando baixo, cerca de R$ 500 a R$ 600

Fiz as contas e vi que se eu estivesse recebendo um valor menor que R$
5000, não ia compensar manter uma empresa aberta, só pela dor de
cabeça.

Caso esteja trabalhando para o Brasil, ainda é possível receber como
pessoa física, mas nesse caso a empresa que precisa reter os impostos
na fonte.

## As informações da empresa

Quando comecei a pesquisar isso, eu não tinha ideia do que era uma
empresa e como eu faria para receber por lá. Então tive que começar a
pesquisa do zero.

### O Simples Nacional

O [Simples Nacional](https://www8.receita.gov.br/SimplesNacional/), é
um esquema de taxação que o governo criou para simplificar o pagamento
de impostos. Antes dele, as empresas tinham que pagar um monte de
impostos separados, cada um com seu esquema de calculo e pagamento. O
Simples Nacional veio unificar isso e gerar apenas uma guia de
pagamento, o DAS (**D**ocumento de **A**rrecadação **S**implificada).

Esse documento vai ser gerado sempre que houver uma nota fiscal
gerada. Os impostos vão ser de acordo com o tipo da sua empresa e o
CNAE (que veremos em breve) utilizado para o trabalho.

Não é qualquer empresa que se enquadra no simples, só alguns tipos de
serviço que se enquadram. Quando a empresa se enquadra no simples, ela
precisa vez em qual dos anexos ela está se enquadrando de acordo com o
CNAE que ela está utilizando.

### CNAEs

O CNAE é a **C**lassificação **N**acional de **A**tividades
**E**conômicas. Ele que diz qual o tipo de serviço que a sua empresa
faz e qual a porcentagem de impostos você deve pagar.

Ao conversar com algumas pessoas que tem empresa aberta e até mesmo
com um contador, eu percebi que cada um interpreta os CNAEs de uma
forma para o nosso setor de desenvolvimento de software. Cada
empresa/contador tem que conhecer a lei e como seus serviços se
enquadram nela e usar o CNAE que se enquadra melhor. Não cabe a esse
texto julgar isso.

Se você trabalha remotamente desenvolvendo software para alguma
empresa, você poderá se enquadrar
no
[CNAE 6101-5/01 - DESENVOLVIMENTO DE PROGRAMAS DE COMPUTADOR SOB ENCOMENDA](http://cnae.ibge.gov.br/busca-online-cnae.html?subclasse=6201501&tipo=cnae&versao=9&view=subclasse).

Como eu disse há pouco, existe muita controvérsia quanto a prestação
de serviços de "informática" nas nossas leis. No passado, mesmo esse
tipo de CNAE era enquadrado no anexo V do simples porque era
ambíguo. Finalmente fizeram
a
[lei complementar 155 de outubro de 2016](http://www.planalto.gov.br/ccivil_03/leis/LCP/Lcp155.htm) no
[§ 5º-D](http://www.planalto.gov.br/ccivil_03/leis/LCP/Lcp123.htm#art18§5d),
que faz com que esse CNAE consiga se enquadrar no anexo III do
simples, pagando **6%** de imposto ao invés de **17.5%** como é no
anexo V.

Lembrando que para que você use esse CNAE e se enquadre no anexo III,
você precisa estar prestando serviço de desenvolvimento de software,
mas o software tem que ser desenvolvido **no estabelecimento do
optante**, conforme a descrição da lei complementar. Então nada de ir
trabalhar na empresa como se fosse CLT se enquadrando no anexo III.

Para os casos de pessoas que trabalham como PJ dentro da empresa, eles
geralmente entram como consultores com o
CNAE
[6204-0/00](http://cnae.ibge.gov.br/busca-online-cnae.html?subclasse=6204000&tipo=cnae&versao=9&view=subclasse),
que paga cerca de **17%** de imposto.

O pessoal da Contabilizei fez uma tabela com
as
[porcentagens de imposto por atividade](https://www.contabilizei.com.br/contabilidade-online/tabela-simples-nacional-completa/),
apesar de não estarem considerando a lei complementar ainda.

## Recebimento de dinheiro

Se estiver recebendo dinheiro do exterior, você vai precisar fechar o
câmbio de alguma forma. Por "fechar o câmbio", entenda escolher uma
taxa de cambio junto a uma entidade autorizada e transformar o valor
de moeda estrangeira em real.

Como eu disse no começo do artigo, eu recomendo utilizar uma corretora
para isso, mas o próprio banco pode fazer para você.

Na corretora que eu utilizo, eles cobram $30 para fechar o câmbio e
usam um spread (uma taxa sobre a taxa atual da moeda) de 1.5%. Nos
bancos a taxa de câmbio geralmente é muito ruim, eles nem liberam esse
spread na maior parte dos casos, sem contar que geralmente é mais
burocrático.

Após fechar o câmbio, a corretora envia o dinheiro para a sua conta.

## Retirada do dinheiro

Para quem trabalha como pessoa jurídica, é necessário definir um
pró-labore. Pró-labore é um salário do sócio da empresa, você vai
receber isso mensalmente. O pagamento do pró-labore não é opcional.

Os sócios escolhem o quanto vão receber de pró-labore, sendo o mínimo
o salário mínimo vigente. O restante do valor fica para a empresa,
podendo ser retirado como lucro, sem adição de impostos na pessoa
física.
