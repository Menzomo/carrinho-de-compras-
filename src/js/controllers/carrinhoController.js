import { adicionarAoCarrinho, removerDoCarrinho, obterCarrinho } from '../state/carrinho.js';
import { renderizarCarrinho } from '../views/carrinhoView.js';
import { selecionarPorId, selecionarTodos } from '../utils.js';

// Inicializar eventos do carrinho
export const inicializarCarrinho = () => {
  const botoesAdicionar = selecionarTodos('.btn-adicionar');
  const listaCarrinho = selecionarPorId('lista-carrinho');

  botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', manipularAdicionarProduto);
  });

  listaCarrinho.addEventListener('click', manipularRemoverItem);
};

// Manipular clique para adicionar produto
const manipularAdicionarProduto = (evento) => {
  const produto = evento.target.closest('.produto');
  
  const novoProduto = extrairDadosProduto(produto);
  adicionarAoCarrinho(novoProduto);
  
  renderizarCarrinho(obterCarrinho());
};

// Manipular clique para remover item
const manipularRemoverItem = (evento) => {
  if (evento.target.classList.contains('remover-item')) {
    const itemElement = evento.target.closest('.item-carrinho');
    const nomeItem = itemElement.querySelector('h4').textContent;
    
    removerDoCarrinho(nomeItem);
    renderizarCarrinho(obterCarrinho());
  }
};

// Extrair dados do produto
const extrairDadosProduto = (elemento) => ({
  nome: elemento.querySelector('.produto-nome').textContent,
  preco: elemento.querySelector('.produto-preco').textContent
});
