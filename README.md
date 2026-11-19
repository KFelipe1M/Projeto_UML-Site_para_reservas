# UMLab — Reserva de espaços acadêmicos

Protótipo simples para consulta de laboratórios e registro demonstrativo de reservas.

## Tecnologias
- HTML5: estrutura da página.
- CSS3: visual, cores e responsividade.
- JavaScript: seleção de laboratório, validação do formulário e inclusão de reservas na lista.

## Estrutura
```text
UMLab/
├── index.html
├── style.css
├── script.js
└── imagens/
```

## Como executar
Abra o arquivo `index.html` em um navegador. Não é necessário instalar dependências ou iniciar um servidor.

## Regras demonstradas
- São exibidos três laboratórios, com o Laboratório 02 indisponível.
- O usuário pode selecionar o Laboratório 01 ou 03.
- Os campos obrigatórios são validados pelo navegador.
- Ao confirmar, a reserva aparece no início da lista durante a sessão atual.

## Limitações
Este é um protótipo front-end. As reservas não são salvas em banco de dados e são perdidas ao atualizar ou fechar a página. Não há autenticação, backend ou verificação real de conflitos de horário.
