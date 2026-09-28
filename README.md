# Projeto Ingresso Online

Projeto front-end de compra de ingressos online, desenvolvido como exercício de lógica de programação. A aplicação permite escolher o tipo de ingresso, informar a quantidade desejada e validar se a compra pode ser realizada com base no estoque disponível.

## Objetivo

Praticar conceitos fundamentais de JavaScript e manipulação do DOM, como:

- declaração e uso de variáveis
- condicionais
- funções
- atualização de elementos na página
- validação de dados do usuário

## Funcionalidades

- Seleção do tipo de ingresso:
  - Pista
  - Cadeira superior
  - Cadeira inferior
- Entrada da quantidade desejada
- Verificação de disponibilidade em estoque
- Exibição de alertas em caso de compra inválida
- Atualização automática da quantidade restante após a compra

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## Como executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/Projeto-Ingresso-Online.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd Projeto-Ingresso-Online
   ```

3. Abra o arquivo `index.html` no navegador.

> O projeto não exige instalação de dependências. Para uma melhor experiência, você pode abrir o arquivo diretamente no navegador ou usar uma extensão de live preview/servidor local.

## Estrutura do projeto

```text
Projeto-Ingresso-Online/
├── assets/
├── js/
│   └── app.js
├── styles/
│   ├── _reset.css
│   └── style.css
├── index.html
├── README.md
└── LICENSE (se houver)
```

## Lógica da aplicação

A lógica principal está no arquivo `js/app.js` e inclui três funções principais:

- `comprar()`: obtém o tipo de ingresso e a quantidade escolhida, valida se é possível comprar e mostra uma mensagem de sucesso ou erro.
- `decrementaQuantidadeDoItem()`: reduz a quantidade disponível do tipo de ingresso selecionado.
- `pegaQuantidadeDoItemSelecionadoEmEstoque()`: busca a quantidade atual em estoque do ingresso escolhido.

## Exemplo de fluxo

1. O usuário escolhe o tipo de ingresso.
2. Digita a quantidade desejada.
3. O sistema verifica se a quantidade solicitada excede o estoque.
4. Se houver disponibilidade, a compra é confirmada e o estoque é atualizado.
5. Caso contrário, aparece um alerta informando que a compra não pode ser realizada.

## Status do projeto

Este projeto foi desenvolvido como parte de um desafio de lógica de programação e está funcionando como uma simulação de compra de ingressos em uma interface web simples.

## Autor

Projeto desenvolvido em contexto de estudo na Alura, com foco em prática de JavaScript e lógica de programação.