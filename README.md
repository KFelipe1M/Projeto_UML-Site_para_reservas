# UMLab -- Sistema de Reserva de Espaços Acadêmicos

O **UMLab** é uma aplicação web para consulta de laboratórios e registro
de reservas de espaços acadêmicos. A interface permite visualizar os
espaços disponíveis, preencher uma solicitação de reserva e acompanhar
as reservas exibidas na página.
Veja o site aqui: https://kfelipe1m.github.io/Projeto_UML-Site_para_reservas/

| Nome | Matrícula |
|---|---|
| Kauã Filipe Moreno Marques | 01791750 |
| Lucas Teobaldo Cruz | 01802436 |
| Victor Ribeiro Barbosa de Menezes | 01791754 |

## Funcionalidades

-   Visualização de três laboratórios, com capacidade e situação
    inicial.
-   Seleção de laboratório diretamente no cartão do espaço.
-   Formulário de reserva com nome do professor, matrícula, laboratório,
    data, horário e finalidade.
-   Validação dos campos obrigatórios pelo navegador.
-   Bloqueio de datas anteriores à data atual no campo de reserva.
-   Exibição da data atual na página.
-   Inclusão de novas reservas no início da lista.
-   Atualização do contador de reservas exibidas.
-   Interface responsiva para diferentes tamanhos de tela.

## Laboratórios cadastrados na interface

  Laboratório        Capacidade Situação inicial
  ---------------- ------------ ------------------
  Laboratório 01      30 alunos Disponível
  Laboratório 02      40 alunos Indisponível
  Laboratório 03      25 alunos Disponível

As situações acima são valores definidos inicialmente na interface. O
código atual não calcula a disponibilidade com base em reservas
existentes.

## Horários apresentados

-   08:00 -- 10:00
-   09:00 -- 11:00
-   10:00 -- 12:00
-   14:00 -- 16:00
-   16:00 -- 18:00

## Tecnologias

-   **HTML5:** estrutura e conteúdo da página.
-   **CSS3:** identidade visual, layout e responsividade.
-   **JavaScript:** interações, validação do formulário e atualização da
    lista de reservas.

O projeto não apresenta, nos arquivos fornecidos, dependências de
frameworks ou bibliotecas externas, servidor de aplicação ou integração
com banco de dados.

## Estrutura de arquivos

``` text
UMLab/
├── index.html
├── style.css
├── script.js
└── README.md
```

-   `index.html`: estrutura da página, navegação, cartões dos
    laboratórios, formulário e lista inicial de reservas.
-   `style.css`: cores, tipografia, cartões, formulários, lista de
    reservas e regras responsivas.
-   `script.js`: data atual, data mínima do formulário, seleção de
    laboratório, validação e inclusão de reservas na lista.
-   `README.md`: documentação do projeto.

## Como executar

1.  Baixe ou clone o repositório do projeto.
2.  Mantenha `index.html`, `style.css` e `script.js` na mesma pasta.
3.  Abra o arquivo `index.html` em um navegador.
4.  Na página, escolha um laboratório disponível ou utilize o formulário
    de nova reserva.
5.  Preencha todos os campos obrigatórios e clique em **Confirmar
    reserva**.
6.  A nova reserva será exibida no início da lista durante a sessão
    atual.

Não é necessário instalar pacotes ou configurar um banco de dados para
executar esta versão apresentada.

## Como funciona o cadastro de reserva

Ao enviar o formulário, o JavaScript impede o envio padrão da página e
verifica os campos obrigatórios. Em seguida, obtém o laboratório, a
data, o horário e a finalidade, formata a data e cria um novo item na
lista com o status **Confirmada**. O contador é atualizado e o
formulário é limpo.

Os botões dos cartões dos laboratórios 01 e 03 preenchem automaticamente
o campo de laboratório e levam o usuário até o formulário.

## Limitações conhecidas da versão atual

-   **Sem persistência:** as novas reservas são adicionadas apenas à
    página e não são salvas em banco de dados ou armazenamento
    permanente. Ao recarregar a página, os novos registros da sessão
    deixam de aparecer.
-   **Sem verificação de conflito:** não há validação para impedir duas
    reservas do mesmo laboratório em datas e horários sobrepostos.
-   **Disponibilidade fixa:** a situação dos laboratórios é definida
    diretamente no HTML e não muda automaticamente após uma reserva.
-   **Dados do professor:** nome e matrícula são solicitados no
    formulário, mas não são exibidos na lista de reservas nem
    armazenados de forma permanente.
-   **Reservas iniciais estáticas:** a página contém três reservas de
    exemplo inseridas diretamente no HTML.
-   **Sem edição ou cancelamento:** a interface atual não oferece ações
    para alterar ou cancelar reservas.

Por isso, o status "Confirmada" exibido após o envio representa a
inclusão do registro na lista da página, não uma confirmação feita por
um serviço central ou por um banco de dados.

## Observações

Esta documentação descreve o comportamento identificado nos arquivos
`index.html`, `style.css` e `script.js` fornecidos. Recursos não
presentes nesses arquivos foram indicados como melhorias futuras, e não
como funcionalidades já implementadas.

