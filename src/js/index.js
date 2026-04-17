// Arquivo principal da aplicação
import { inicializarCarrinho } from './controllers/carrinhoController.js';
import { inicializarModal } from './controllers/modalController.js';

// Inicializar a aplicação quando o DOM estiver pronto
const inicializarAplicacao = () => {
  inicializarCarrinho();
  inicializarModal();
  console.log('✅ Aplicação iniciada com sucesso!');
};

// Executar quando o documento estiver carregado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarAplicacao);
} else {
  inicializarAplicacao();
}
