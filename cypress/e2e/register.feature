#language: pt

Funcionalidade: Desafio Accenture 

  Este cenário tem como objetivo avaliar o dominio de automação de software e2e.

  Cenário: Usuário preenche formulário de cadastro
    Dado que o usuário acessa o site
    E preenche o formulário na aba "Enter Vehicle Data"
    E preenche o formulário na aba "Enter Insurant Data"
    E preenche o formulário na aba "Enter Product Data"
    E preenche o formulário na aba "Select Price Option"
    E preenche o formulário na aba "Send Quote"
    Quando pressiona o botão Enviar
    Então devo visualizar a mensagem "Enviando e-mail com sucesso!"
     
