// Estado global do carrinho
export const carrinho = [];

// Funções para manipular o estado
export const adicionarAoCarrinho = (produto) => {
  const produtoExistente = carrinho.find(item => item.nome === produto.nome);
  
  if (produtoExistente) {
    produtoExistente.quantidade++;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }
};

export const removerDoCarrinho = (nomeProduto) => {
  const indice = carrinho.findIndex(item => item.nome === nomeProduto);
  
  if (indice !== -1) {
    if (carrinho[indice].quantidade > 1) {
      carrinho[indice].quantidade--;
    } else {
      carrinho.splice(indice, 1);
    }
  }
};

export const obterCarrinho = () => [...carrinho];
