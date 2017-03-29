+++
title = "BookReview: Pragmatic version control using Git"
aliases=[
  "2009/07/19/bookreview-pragmatic-version-control-using-git.html",
  "blog/books/bookreview-pragmatic-version-control-using-git"
]
date = "2009-07-19"
tags = ["books","tech"]
categories = "review"
+++

Há tempos que eu estava querendo conhecer um pouco mais do Git e nos
últimos dias estava procurando um livro legal, quando me deparei com
esse livro. Fiz algumas perguntas para um pessoal no Twitter como
pessoalmente sobre esse livro, alguns me recomendavam, outros me
passavam outros também interessantes, e estava em dúvida entre comprar
ou não, até que consegui emprestado e li em 3 dias.

O livro é bem interessante, aborda desde o mais básico até o nível
intermediário, não abordando conteúdos tão avançados.

Começa abordando como é o fluxo de trabalho do git, mostrando com
exemplos práticos como você faz para usar o git num projeto,
modificando o arquivo, adicionando para o stage, fazendo commits e
etc. E fica uma boa parte do livro mostrando um pouco sobre as formas
com que você pode fazer as coisas, como:

* Adicionar arquivos como o `git add -i` para adicionar interativamente
* Usar git log -p para alem de ver as mensagens de commit ver tambem o que foi usado
* `git log -2` para ver apenas as 2 ultimas mensagens de log
* `git diff --cached` para fazer o diff do que já está no stage
* E mais várias outras dicas úteis

Uma das coisas que eu achei interessante foi a apresentação de
curiosidades interessantes como dizer que o Git usa um hash SHA1 que
tem uma chance se se repetir de 2⁶⁹ :P.

Comentou sobre algumas ferramentas para se usar junto com o Git, como
alguns mergetools para facilitar no processo de merge e o git gui (
que é feio que dói, mas funciona ) para quem gosta de brincar com algo
no estilo tortoise.

Depois de explicar sobre a parte básica do Git ele começa a passar
para algo mais intermediário, onde vem os merges e as modificações de
commits localmente.

Nessa parte mais intermediária foi comentado sobre o `git rebase` e
como você pode usá-lo para reorganizar os seus ultimos commits usando
`git rebase -i`. É uma técnica bem interessante quando se faz um
monte de commits locais mas quer enviar apenas um commit para o
repositório.

Foi comentado tambem sobre tags e como é útil utilizá-las para marcar
as versões do seu sistema, sendo que você pode adicionar commits
apenas a uma tag e tal. Utilizando `git tag 1.0` você já define que
determinado commit marca a versão 1.0 do seu sistema. Você pode depois
dar um git checkout na sua tag e ver ela como read-only (sendo
possível criar um branch e fazer modificações).

Mais modos do git log foram apresentados tambem, como fazer um
`git log` para ver os commits das ultimas 5 horas, ou desde as 10 horas
usando `--since` ou `--before`, ou até mesmo usar um
`--pretty=format:""` e passar uma melhor maneira para formatar o seu
log. :)

Conheci algums comandos interessantes que raramente são usados mas são muito úteis tambem:

* O `git gc` que compacta o seu repositório para que ele exclua tudo o que não está relacionado a nada, assim reduzindo o espaço que seu repositório ocupa.
* O `git archive` para você gerar um arquivo com seu repositório com a versão que quiser, sendo tag, passando o Head ou o que achar melhor.
* O `git reflog` para quando você precisa recuperar algum commit que não está mais no repositório, algo que estava em um branch que foi excluído ou coisas do gênero ( lembrando que se você usou o git gc isso não será possível )

O livro tambem comenta de vários outros comandos, como o git
cherry-pick por exemplo, para você passar um commit para outro branch,
e sem contar que mostra várias opções que os comandos normais tem,
como o git diff para você ver os status a partir de uma tag e tal.

Concluindo, achei o livro interessante e recomendaria para muita
gente! O que eu tenho a dizer é que ele não é um livro para alguem que
quer ver algo avançado em git, e sim alguem que não conhece ou sabe
apenas o bem básico, pois assim vai conhecer algumas coisas bem
legais.



_Old comments by: CrociDB, Jésus Lopes, Hugo Baraúna | Not available anymore. :(_
