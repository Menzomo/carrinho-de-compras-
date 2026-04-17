
# 🛒 Carrinho de Compras com JavaScript Modular

Projeto desenvolvido com foco em **estudo prático de JavaScript moderno (ES6+)**, organização de código e refatoração utilizando módulos.

O objetivo principal deste projeto não foi apenas criar um carrinho funcional, mas também **aprender como estruturar aplicações front-end de forma profissional**, separando responsabilidades em arquivos específicos.

---

# 📚 Objetivos de Estudo

Este projeto foi criado para praticar:

* Manipulação do DOM
* Eventos (`click`, `DOMContentLoaded`)
* Arrays e Objetos
* Métodos modernos (`find`, `findIndex`, `reduce`, `forEach`)
* Funções puras
* Modularização com `import / export`
* Separação de responsabilidades
* Organização de pastas
* Refatoração de código legado
* Lógica de carrinho de compras

---

# 🚀 Funcionalidades

✅ Adicionar produtos ao carrinho
✅ Somar quantidades de produtos repetidos
✅ Remover itens do carrinho
✅ Atualizar contador de itens
✅ Calcular valor total
✅ Abrir e fechar modal do carrinho
✅ Código separado em módulos

---
🖥️ Como Acessar o Projeto
Opção 1 — Abrindo localmente
Baixe ou clone este repositório:
git clone URL_DO_REPOSITORIO
Abra a pasta do projeto no VS Code.
Utilize a extensão Live Server.
Clique com o botão direito no arquivo:
index.html
Selecione:
Open with Live Server

opçao 2- vizualizar o projeto 
https://menzomo.github.io/carrinho-de-compras-/

# 🗂️ Estrutura do Projeto

```txt
src/
├── css/
│   ├── reset.css
│   └── style.css
├── js/
│   ├── index.js
│   ├── utils.js
│   ├── controllers/
│   │   ├── carrinhoController.js
│   │   └── modalController.js
│   ├── state/
│   │   └── carrinho.js
│   └── views/
│       └── carrinhoView.js
├── images/
└── index.html
```

---

# 🧠 Conceitos Aplicados

## Controllers

Responsáveis por responder ações do usuário.

Exemplo:

* clique em adicionar produto
* clique em remover item
* abrir / fechar modal

---

## State

Responsável por armazenar os dados do carrinho:

```js
[
  { nome: "Produto 2", preco: "R$ 50,00", quantidade: 2 }
]
```

---

## Views

Responsável por renderizar os dados na tela.

---

## Utils

Funções reutilizáveis como:

* formatação de preço
* conversão para número
* seleção de elementos do DOM

---

# 🎯 Aprendizados Durante o Projeto

Durante o desenvolvimento foi possível entender melhor:

* como pensar em arquitetura de projetos
* como dividir responsabilidades
* como refatorar código grande
* como evitar repetição
* como criar funções pequenas e reutilizáveis
* como estruturar projetos reais de front-end

---

# 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript ES6+

---

# 📌 Melhorias Futuras

* Salvar carrinho no `localStorage`
* Controle de estoque
* Tela de checkout
* Responsividade mobile
* Sistema de cupons
* Integração com API
* Testes automatizados

---

# 💡 Sobre o Projeto

Este projeto faz parte da minha evolução nos estudos de JavaScript, com foco em sair do código iniciante para uma estrutura mais próxima do mercado.

Mais do que o resultado final, o foco principal foi aprender **como pensar como desenvolvedor**.

---

# 👨‍💻 Autor

Bruno Menzomo
