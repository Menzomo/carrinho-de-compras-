import { selecionarPorId } from '../utils.js';

export const inicializarModal = () => {
  const btnCarrinho = selecionarPorId('btn-carrinho');
  const btnFechar = selecionarPorId('btn-fechar');
  const overlay = selecionarPorId('overlay');

  btnCarrinho.addEventListener('click', abrirModal);
  btnFechar.addEventListener('click', fecharModal);
  overlay.addEventListener('click', fecharModal);
};

const abrirModal = () => {
  const modal = selecionarPorId('modal-carrinho');
  const overlay = selecionarPorId('overlay');

  modal.classList.add('ativo');
  overlay.classList.add('ativo');
};

const fecharModal = () => {
  const modal = selecionarPorId('modal-carrinho');
  const overlay = selecionarPorId('overlay');

  modal.classList.remove('ativo');
  overlay.classList.remove('ativo');
};
