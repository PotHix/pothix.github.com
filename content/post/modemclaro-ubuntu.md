+++
title = "Instalando modem 3G Claro USB E226 no Ubuntu"
aliases=[
  "post/instalando-modem-3g-claro-usb-e226-no-ubuntu",
  "2009/06/13/instalando-modem-3g-claro-usb-e226-no-ubuntu.html",
  "blog/ubuntu/instalando-modem-3g-claro-usb-e226-no-ubuntu"
]
date = "2009-06-13"
tags = ["tech","linux"]
categories = "linux"
+++

Após receber um modem Claro da [empresa que eu trabalho atualmente](http://www.ikwa.com.br "Ikwa Orientação Profissional")
eu fui fazer o processo de instalação no Ubuntu. Já tinha recebido a
informação de um [colega de trabalho](http://github.com/mateuslinhares)
de como fazer, e obviamente não foi nada difícil (o que que é difícil
no Ubuntu? :)).

Vou descrever aqui o processo:

1. Inserir o modem na entrada USB
2. Vai aparecer um assistente de configuração simples ( Next Next Finish ), para você seguir e instalar.

Caso o assistente não apareça automáticamente (foi o meu caso), você
pode acessá-lo clicando com o botão direito em cima do ícone de rede
que fica ao lado do relógio e clicar em "Edit Connections" ou apertar
Alt+F2 (ou o seu atalho para executar) e digitar nm-connection-editor.

Estando no editor de conexões basta clicar na aba "Mobile Broadband" e
depois clicar em "Add", que o assistente vai aparecer.

Quando terminar o processo com o assistente ( rapidinho ) o seu modem
já estará instalado! :D

Para sua internet funcionar você só vai precisar mudar os endereços de
DNS que não estarão corretos. Para alterar apenas clique em na conexão
que você criou no "Edit Connections &gt; Mobile Broadband", e clique
em "Edit".

Após clicar em "Edit" digite a senha do seu usuário (se necessário)
e siga para a aba IPV4 Settings. Nessa aba altere o campo DNS Settings
para **208.67.222.222, 208.67.220.220**.

Com isso você já vai conseguir navegar normalmente! :)



_Old comments by: Lê, ronaldo, Rodrigues | Not available anymore. :(_
