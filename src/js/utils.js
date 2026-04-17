// Utilitários para formatação de preços
export const converterParaNumero = (preco) => 
  parseFloat(preco.replace('R$ ', '').replace(',', '.'));

export const formatarPreco = (numero) => 
  `R$ ${numero.toFixed(2).replace('.', ',')}`;

// Buscar elementos do DOM
export const selecionarElemento = (seletor) => 
  document.querySelector(seletor);

export const selecionarTodos = (seletor) => 
  document.querySelectorAll(seletor);

export const selecionarPorId = (id) => 
  document.getElementById(id);
