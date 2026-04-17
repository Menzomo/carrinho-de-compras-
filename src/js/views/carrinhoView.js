import { formatarPreco, converterParaNumero, selecionarPorId } from '../utils.js';

// Renderizar itens do carrinho
export const renderizarCarrinho = (itens) => {
  const listaCarrinho = selecionarPorId('lista-carrinho');
  const totalPrecoElement = selecionarPorId('total-preco');
  const contadorElement = selecionarPorId('contador-carrinho');

  listaCarrinho.innerHTML = '';

  const { total, totalItens } = itens.reduce(
    (acumulador, { nome, preco, quantidade }) => {
      const precoNumero = converterParaNumero(preco);
      
      const itemElement = criarElementoItem(nome, preco, quantidade);
      listaCarrinho.appendChild(itemElement);
      
      return {
        total: acumulador.total + (precoNumero * quantidade),
        totalItens: acumulador.totalItens + quantidade
      };
    },
    { total: 0, totalItens: 0 }
  );

  totalPrecoElement.textContent = formatarPreco(total);
  contadorElement.textContent = totalItens;
};

// Criar elemento de item individual
const criarElementoItem = (nome, preco, quantidade) => {
  const elemento = document.createElement('div');
  elemento.classList.add('item-carrinho');
  elemento.innerHTML = `
    <h4>${nome}</h4>
    <p>Preço: ${preco}</p>
    <p>Quantidade: ${quantidade}</p>
    <button class="remover-item">Remover</button>
  `;
  return elemento;
};
