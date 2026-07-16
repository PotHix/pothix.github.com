+++
path = "mespj"
title = "Um mês de um PJ para o exterior"
date = 2021-01-09

[taxonomies]
series = ["PF & PJ"]
+++
Esse é o último post que eu tinha planejado para a [série de PF &
PJ](/series/pf-pj). Não necessariamente será o último da série, mas toda essa
série começou para eu poder fazer esse post. 😄

Eu gostaria de mostrar como é o ciclo de um mês trabalhando como PJ para o
exterior, já que isso ainda é uma incognita para muita gente e várias vezes eu
explico isso para amigos que pretendem entrar na mesma ideia.

Sem mais delongas, vamos lá!

## O mês atual é para lidar com o mês anterior

Esse não é um conceito que prestamos muita atenção quando trabalhamos CLT, o
salário só chega e pronto. Ao ter a própria empresa, eu comecei a prestar mais
atenção que as coisas que eu estou lidando esse mês geralmente é referente ao
mês passado.

Alguns exemplos:

- Lucros que você pode ou não tirar
- Balancete do mês passado que sua contabilidade manda
- Impostos sobre as NFs geradas no mês passado

E vários outros. Isso é meio confuso (pelo menos para mim), mas é importante ter
isso em mente.

## Começo do mês

Todo começo de mês eu preciso enviar para a contabilidade tudo que aconteceu na
empresa. Além do extrato mensal consolidado, eu envio todos os documentos que eu
recebi ou enviei, assim eles podem ter uma foto completa do que aconteceu com a
empresa no mês passado.

Eu uso o [Dropbox](https://www.dropbox.com/referrals/AACKsl9GSQ2ztA7PDvXFvszgPaYtDtUbzYg?src=global9) para gerenciar os documentos da minha empresa e mantenho a seguinte estrutura:

```
~/Dropbox/Aulë Software ❯ tree . -d -L 2
[...]
├── 2020
│   ├── 01
│   ├── 02
│   ├── 03
│   ├── 04
│   ├── 05
│   ├── 06
│   ├── 07
│   ├── 08
│   ├── 09
│   ├── 10
│   ├── 11
│   └── 12
├── 2021
│   ├── 01
│   ├── 02
│   └── template
├── backups
├── documents
│   ├── contracts
│   ├── ecnpj
│   └── servicos-iss-sp
└── images
    ├── logo
    └── photos
```

Tem os anos a partir de 2017 ali (removi porque era a mesma coisa de 2020) e
desde lá eu tenho a mesma estrutura de documentos. O diretório `template` ali
tem vários arquivos que eu sei que são necessários todo mês. Aqui um exemplo:

```
~/Dropbox/Aulë Software ❯ tree 2021/template/
2021/template/
├── aule-receipts
├── contabil
│   ├── balancete-mes-anterior.pdf
│   ├── distribuicao-de-lucros.pdf
│   └── dre-mes-anterior.pdf
├── contabilidade-comprovante.jpg
├── contabilidade-nfs.pdf
├── contabilidade.pdf
├── convenio-comprovante.jpg
├── convenio-nfs.pdf
├── convenio.pdf
├── doist-exchange-contract.pdf
├── doist-invoice.pdf
├── doist-nfs.pdf
├── doist-nfs.txt
├── doist-receipts
│   └── net.pdf
├── extrato-e-docs
├── extrato-mes-anterior.pdf
├── folha-extrato.pdf
├── folha.pdf
├── folha-re.pdf
├── gps-comprovante.jpg
├── gps.pdf
├── freela-exchange-contract.pdf
├── freela-invoice.pdf
├── freela-nfs.pdf
├── freela-nfs.txt
├── freela-receipts
│   └── timesheet-freela.pdf
├── iss-comprovante.jpg
├── iss.pdf
├── lucros-comprovante.jpg
├── pis-cofins.pdf
├── prolabore-comprovante.jpg
└── prolabore.pdf
```

Todo começo de mês, esses arquivos devem estar presentes. Alguns não são
necessariamente contas ou algo que eu precise fazer alguma coisa, mas mantenho
eles lá para conferencia.

O que vai faltar é o extrato consolidado que só sai no quinto dia útil do mês
subsequente (no meu banco, pode ser diferente em outros), que é quando eu faço o
download, junto todos os arquivos e envio para a contabilidade.

Em outras palavras:

- Baixo o extrato consolidado
- Zipo a pasta do mês e deixo no dropbox o `.zip` que eu gerei mandei, para arquivo (é o `extrato-e-docs`)
- Envio esse `.zip` para a contabilidade

Esses são os documento que eles vão utilizar para gerar o balanço que vai ser
enviado para mim no fim do mês.

## Reportar o freela

Eu considero como "freela", mas é quase um projeto pessoal. Eu trabalho para a
mesma empresa como freelancer faz quase 5 anos já e sempre dedico algumas poucas
horas por mês para a aplicação, já que não quero deixar de lado Ruby, que é uma
linguagem que eu sempre curti.

Essa empresa também é de fora do país, portanto entra no mesmo processo de
recebimento de dinheiro do meu trabalho full-time.

No começo do mês eu gero um PDF da minha planilha de controle de horas
juntamente com a descrição do que eu fiz e mando para eles junto com a invoice
para o valor total do mês passado. Eu gostaria de fazer isso no meio do mês, mas
eu acho que fica muito bagunçado cobrar um mês pela metade, por isso faço dessa
forma bem no começo do mês.

Com isso eu já adiciono alguns documentos no Dropbox:

```
~/Dropbox/Aulë Software ❯ tree 2021/template/
2021/template/
├── aule-receipts
├── contabil
│   ├── balancete-mes-anterior.pdf
│   ├── distribuicao-de-lucros.pdf
│   └── dre-mes-anterior.pdf
├── contabilidade-comprovante.jpg
├── contabilidade-nfs.pdf
├── contabilidade.pdf
├── convenio-comprovante.jpg
├── convenio-nfs.pdf
├── convenio.pdf
├── doist-exchange-contract.pdf
├── doist-invoice.pdf
├── doist-nfs.pdf
├── doist-nfs.txt
├── doist-receipts
│   └── net.pdf
├── extrato-e-docs
├── extrato-mes-anterior.pdf
├── folha-extrato.pdf
├── folha.pdf
├── folha-re.pdf
├── gps-comprovante.jpg
├── gps.pdf
├── freela-exchange-contract.pdf
OK ├── freela-invoice.pdf
├── freela-nfs.pdf
├── freela-nfs.txt
OK ├── freela-receipts
OK │   └── timesheet-freela.pdf
├── iss-comprovante.jpg
├── iss.pdf
├── lucros-comprovante.jpg
├── pis-cofins.pdf
├── prolabore-comprovante.jpg
└── prolabore.pdf
```

## Contas a pagar

No começo do mês chegam várias contas para pagar. Algumas chegam até um pouco
mais para a frente, mas eu tento fazer tudo no começo do mês para não ficar me
preocupando com o vencimento das coisas.

Vou mencionar as contas que chegam no mês:

- Boleto mensal do serviço de contabilidade
- ISS dos serviços prestados no mês passado (minha cidade requer pagamento de ISS, depende muito da cidade)
- Folha de pagamento, que no fim é só o meu prolabore
- Boleto do convenio, que eu faço corporativo
- GPS, que é a guia da previdencia sobre o valor do meu prolabore

Sempre que eu posso eu pago todos eles de uma vez para consumir menos do meu
tempo. Eu geralmente faço isso pelo aplicativo de celular do meu banco, caso
seja possível. Algumas coisas não funcionam bem no celular, aí tem que ir para o
computador, mas são casos raros ultimamente.

Com isso já temos:

```
~/Dropbox/Aulë Software ❯ tree 2021/template/
2021/template/
OK ├── aule-receipts
├── contabil
│   ├── balancete-mes-anterior.pdf
│   ├── distribuicao-de-lucros.pdf
│   └── dre-mes-anterior.pdf
OK ├── contabilidade-comprovante.jpg
OK ├── contabilidade-nfs.pdf
OK ├── contabilidade.pdf
OK ├── convenio-comprovante.jpg
OK ├── convenio-nfs.pdf
OK ├── convenio.pdf
├── doist-exchange-contract.pdf
├── doist-invoice.pdf
├── doist-nfs.pdf
├── doist-nfs.txt
├── doist-receipts
│   └── net.pdf
OK ├── extrato-e-docs
OK ├── extrato-mes-anterior.pdf
OK ├── folha-extrato.pdf
OK ├── folha.pdf
OK ├── folha-re.pdf
OK ├── gps-comprovante.jpg
OK ├── gps.pdf
├── freela-exchange-contract.pdf
OK ├── freela-invoice.pdf
├── freela-nfs.pdf
├── freela-nfs.txt
OK ├── freela-receipts
OK │   └── timesheet-freela.pdf
OK ├── iss-comprovante.jpg
OK ├── iss.pdf
├── lucros-comprovante.jpg
OK ├── pis-cofins.pdf
OK ├── prolabore-comprovante.jpg
OK └── prolabore.pdf
```

## Conferência do balanço

Mais ou menos no dia 20 a minha contabilidade me envia o balanço do mês
anterior. Lá consta todas as minhas receitas e despesas, além de me mostrar
quanto a minha empresa teve de lucro no mês.

Eu mantenho uma planilha e consigo ajuda da minha esposa sempre que possível
(que é contadora, mas trabalha há muitos anos com controladoria em empresa
multinacional) para fazer a conferencia de tudo isso.

> **Importante mencionar**
>
> Eu recomendo **sempre** conferir o trabalho da sua contabilidade. Lembre-se que
> a empresa é sua, eles estão lá para te informar e fazer todo o trabalho contábil
> baseado no que **você** diz que está fazendo, por isso é importante ficar de
> olho se o que eles fizeram é realmente o que você está fazendo.
>
> Não jogue tudo nos ombros da contabilidade. Se algo acontecer, eles vão dizer
> que fizeram o que você pediu da melhor forma possível contabilmente. A empresa
> é sua, não deles.

Se tudo estiver certo com o balanço, eu uso o valor de lucros do mês reportado
no balanço para fazer um adiantamento de lucros para aquele mês. A minha
contabilidade me manda o valor exato a ser transferido.

> **Contabilidades** e *contabilidades*
>
> Existem dois tipos de empresas de contabilidade ao meu ver:
> 1. "Faz o que você quiser e vamos fazer funcionar contabilmente"
> 2. Vamos fazer juntos para você trabalhar da melhor maneira e ficar certinha a
>    contabilidade
>
> Eu já tive os dois e prefiro (e recomendo!) a segunda versão. Eu quero que a
> contabilidade não só execute a parte contabil da minha empresa mas também me
> oriente a fazer as coisas da melhor forma possível.
>
> Algumas empresas de contabilidade apenas orientam as pessoas a pagar as
> contas e "retirar o resto como lucro". O que eles fazem depois é ajustar a
> contabilidade para isso parecer certo no fim das contas.
>
> Não me entenda mal, isso não é ilegal (até onde eu sei, minha área é outra),
> mas eu prefiro uma forma mais organizada de fazer as coisas (tipo 2 ali).

A entrada de dinheiro na minha conta pessoal é:

- O valor que eu recebi de prolabore (que mencionei no item anterior)
- O valor de adiantamento de lucros baseado no balanço

Com isso:

```
~/Dropbox/Aulë Software ❯ tree 2021/template/
2021/template/
OK ├── aule-receipts
OK ├── contabil
OK │   ├── balancete-mes-anterior.pdf
OK │   ├── distribuicao-de-lucros.pdf
OK │   └── dre-mes-anterior.pdf
OK ├── contabilidade-comprovante.jpg
OK ├── contabilidade-nfs.pdf
OK ├── contabilidade.pdf
OK ├── convenio-comprovante.jpg
OK ├── convenio-nfs.pdf
OK ├── convenio.pdf
├── doist-exchange-contract.pdf
├── doist-invoice.pdf
├── doist-nfs.pdf
├── doist-nfs.txt
├── doist-receipts
│   └── net.pdf
OK ├── extrato-e-docs
OK ├── extrato-mes-anterior.pdf
OK ├── folha-extrato.pdf
OK ├── folha.pdf
OK ├── folha-re.pdf
OK ├── gps-comprovante.jpg
OK ├── gps.pdf
├── freela-exchange-contract.pdf
OK ├── freela-invoice.pdf
├── freela-nfs.pdf
├── freela-nfs.txt
OK ├── freela-receipts
OK │   └── timesheet-freela.pdf
OK ├── iss-comprovante.jpg
OK ├── iss.pdf
OK ├── lucros-comprovante.jpg
OK ├── pis-cofins.pdf
OK ├── prolabore-comprovante.jpg
OK └── prolabore.pdf
```

## Trabalho principal

Mais para o fim do mês eu preciso reportar para a [Doist](/doist). Eles pedem
para reportar até o dia 24 mais ou menos. Nesse caso é mais tranquilo porque eu
tenho um salário fixo.

Eu também tenho alguns "perks", que são auxílios ou subsídios com algumas coisas
para me ajudar no trabalho e as vezes isso é adicionado no valor. Um exemplo é a
minha conta de internet, que tenho subsídio ❤️.

Faço a invoice mais ou menos da mesma forma que eu fiz do freela no começo do
mês e envio para a empresa para começar o processo de pagamento.

Com isso:

```
~/Dropbox/Aulë Software ❯ tree 2021/template/
2021/template/
OK ├── aule-receipts
OK ├── contabil
OK │   ├── balancete-mes-anterior.pdf
OK │   ├── distribuicao-de-lucros.pdf
OK │   └── dre-mes-anterior.pdf
OK ├── contabilidade-comprovante.jpg
OK ├── contabilidade-nfs.pdf
OK ├── contabilidade.pdf
OK ├── convenio-comprovante.jpg
OK ├── convenio-nfs.pdf
OK ├── convenio.pdf
├── doist-exchange-contract.pdf
OK ├── doist-invoice.pdf
├── doist-nfs.pdf
├── doist-nfs.txt
OK ├── doist-receipts
OK │   └── net.pdf
OK ├── extrato-e-docs
OK ├── extrato-mes-anterior.pdf
OK ├── folha-extrato.pdf
OK ├── folha.pdf
OK ├── folha-re.pdf
OK ├── gps-comprovante.jpg
OK ├── gps.pdf
├── freela-exchange-contract.pdf
OK ├── freela-invoice.pdf
├── freela-nfs.pdf
├── freela-nfs.txt
OK ├── freela-receipts
OK │   └── timesheet-freela.pdf
OK ├── iss-comprovante.jpg
OK ├── iss.pdf
OK ├── lucros-comprovante.jpg
OK ├── pis-cofins.pdf
OK ├── prolabore-comprovante.jpg
OK └── prolabore.pdf
```

Ficaram faltando poucos OKs na lista. Geralmente eu vejo isso pelo numero de
bytes dos arquivos, dado que os "placeholders" tem 0 bytes. 😛

Eu tenho tarefas no [Todoist](https://todoist.com) para me lembrar de varios dos
passos que eu descrevi até aqui, mas como eu tenho que colocar os no Dropbox de
qualquer forma, eu acabo usando isso para revisar o que falta.

## Recebimento e notas fiscais

Vamos começar explicando o processo de como os pagamentos chegam para a minha
empresa:

1. Eu envio a invoice para a empresa de fora do país com o valor do pagamento
   mensal. A invoice tem pouquíssima utilidade aqui no Brasil, só é importante
   para eles lá fora e para o cambio.
2. Eles fazem o pagamento para a conta que eu informar (minha corretora de
   cambio). A corretora me passa o IBAN e as informacões dos bancos
   intermediários e contas e eu envio isso junto com o beneficiário, que é minha
   razão social PJ e são essas informações que a empresa usa para fazer o
   pagamento.
3. Minha corretora recebe o pagamento e fechamos o cambio, gerando um contrato
   de cambio (registrado no banco central)
4. O dinheiro é transferido para minha conta PJ

Os pagamentos geralmente chegam pertinho do fim do mês e agora é a hora de gerar
as notas fiscais para eles usando o sistema "Ginfes", que é o sistema de notas
fiscais da minha cidade.

> Esse sistema é uma grande porcaria. Eu sei que muitas cidades usam isso, mas
> não deixa de ser ruim por causa disso.
> Só para dar um exemplo do quão ruim é esse sistema para quem presta serviço
> para o exterior, eu preciso colocar CNPJ 00.000.000-00000-00, CEP 00000-000,
> com cidade e estado EXTERIOR. 😂 (rir para não chorar)

Eu mantenho os arquivos `doist-nfs.txt` e `freela-nfs.txt` no Dropbox com os
dados das empresas para ficar mais fácil apenas copiar e colar no sistema de
notas fiscais.

Quando eu recebo o contrato de cambio (e salvo em
`{empresa}-exchange-contract.pdf`) eu já faço a nota fiscal para evitar de
esquecer. Uso os valores listados lá para emitir a NF **em reais**, e salvo a NF
junto com os outros documentos.

O que eu tenho de documentos para entender a transação no futuro, caso
necessário:

* **invoice** com o valor cobrado
* **contrato de cambio** com o valor recebido em moeda estrangeira (USD/EUR) e
  qual o valor em reais que foi gerado dessa transação
* **nota fiscal** baseado no valor em reais gerado, que deve ser o mesmo do
  contrato de cambio

Esses documentos fazem a amarração da transação. 🙂

Com isso eu fecho o meu ciclo de documentos e sei que está tudo OK:

```
~/Dropbox/Aulë Software ❯ tree 2021/template/
2021/template/
OK ├── aule-receipts
OK ├── contabil
OK │   ├── balancete-mes-anterior.pdf
OK │   ├── distribuicao-de-lucros.pdf
OK │   └── dre-mes-anterior.pdf
OK ├── contabilidade-comprovante.jpg
OK ├── contabilidade-nfs.pdf
OK ├── contabilidade.pdf
OK ├── convenio-comprovante.jpg
OK ├── convenio-nfs.pdf
OK ├── convenio.pdf
OK ├── doist-exchange-contract.pdf
OK ├── doist-invoice.pdf
OK ├── doist-nfs.pdf
OK ├── doist-nfs.txt
OK ├── doist-receipts
OK │   └── net.pdf
OK ├── extrato-e-docs
OK ├── extrato-mes-anterior.pdf
OK ├── folha-extrato.pdf
OK ├── folha.pdf
OK ├── folha-re.pdf
OK ├── gps-comprovante.jpg
OK ├── gps.pdf
OK ├── freela-exchange-contract.pdf
OK ├── freela-invoice.pdf
OK ├── freela-nfs.pdf
OK ├── freela-nfs.txt
OK ├── freela-receipts
OK │   └── timesheet-freela.pdf
OK ├── iss-comprovante.jpg
OK ├── iss.pdf
OK ├── lucros-comprovante.jpg
OK ├── pis-cofins.pdf
OK ├── prolabore-comprovante.jpg
OK └── prolabore.pdf
```

Aqui é a hora que eu copio o diretório `template` que eu mencionei lá no começo
e renomeio para ter o número do próximo mês. Exemplo: Se é fim de janeiro, eu
copio o diretório `template` e renomeio para `02`.

## Resumo

Uma das partes mais importantes do resumo é mencionar que para receber o
dinheiro como pessoa física (não como empresa) para gastar com as minhas coisas
do dia a dia, demora pouco menos de 2 meses, pois:

1. Trabalho o mês inteiro e emito uma Invoice para a empresa de fora já no mês
   seguinte
2. Eles fazem o pagamento
3. Demora um tempo arbitrário para chegar na minha corretora (porque
   transferência internacional sucks)
4. Quando chega na corretora, eu preciso fechar o cambio (tem corretoras que
   fecham automaticamente) para emitir o contrato de câmbio e receber a
   transferência na minha conta pessoa jurídica
5. Pago todos os meus deveres (inclusive o prolabore)
6. Retiro como lucro o que é devido

No geral, é um mês de trabalho e um mês para fazer todas as outras coisas.

Espero que esse tenha sido um post (e [a série](/series/pf-pj)) útil para quem tem curiosidade sobre o
processo de manter uma empresa e prestar serviço para o exterior
