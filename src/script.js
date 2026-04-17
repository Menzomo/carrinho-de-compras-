const btnCarrinho = document.getElementById('btn-carrinho');
let finalizarCompra = document.querySelector('.finalizar-compra');
let btnUniverse = document.querySelectorAll(".btn-adicionar");
let listaCarrinho = document.getElementById('lista-carrinho');
const modal = document.getElementById('modal-carrinho')
const overlay = document.getElementById('overlay')
const btnFechar = document.getElementById('btn-fechar')

const carrinho = []
// FUNÇÃO PARA RENDERIZAR O CARRINHO NA TELA
function renderCarrinho() {
    listaCarrinho.innerHTML = ""
    let total = 0
    let totalItens = 0

    carrinho.forEach((item) => {
        let produtoItem = document.createElement("div")
        produtoItem.classList.add("item-carrinho")

        produtoItem.innerHTML = `
            <h4>${item.nome}</h4>
            <p>Preço: ${item.preco}</p>
            <p>Quantidade: ${item.quantidade}</p>
            <button class="remover-item">Remover</button>
        `

        listaCarrinho.appendChild(produtoItem)

        let precoNumero = parseFloat(item.preco.replace('R$ ', '').replace(',', '.'))

        total += precoNumero * item.quantidade
        totalItens += item.quantidade
    })

    document.getElementById("total-preco").textContent =
        `R$ ${total.toFixed(2).replace('.', ',')}`

    document.getElementById("contador-carrinho").textContent = totalItens
}


// ADICIONAR PRODUTO
for (let i = 0; i < btnUniverse.length; i++) {
    const btnProdutos = btnUniverse[i];

    btnProdutos.addEventListener("click", (e) => {
        let produto = e.target.closest(".produto")
        let nomeProduto = produto.querySelector(".produto-nome").textContent;
        let precoProduto = produto.querySelector(".produto-preco").textContent;
        let produtoEncontrado = null

        for (let i = 0; i < carrinho.length; i++) {
            if (carrinho[i].nome === nomeProduto) {
                produtoEncontrado = carrinho[i]
                break
            }
        }

        if (produtoEncontrado) {
            produtoEncontrado.quantidade++
        } else {
            carrinho.push({
                nome: nomeProduto,
                preco: precoProduto,
                quantidade: 1
            })
        }

        //  ATUALIZA TELA
        renderCarrinho()
    })
}


//  REMOVER ITEM
listaCarrinho.addEventListener("click", (e) => {
    if (e.target.classList.contains("remover-item")) {
        let itemRemover = e.target.closest(".item-carrinho")
        let nomeItem = itemRemover.querySelector("h4").textContent

        for (let i = 0; i < carrinho.length; i++) {
            if (carrinho[i].nome === nomeItem) {

                if (carrinho[i].quantidade > 1) {
                    carrinho[i].quantidade--   // 👈 só diminui
                } else {
                    carrinho.splice(i, 1)     // 👈 remove se for o último
                }

                break
            }
        }

        renderCarrinho()
    }
})



// ABRIR
btnCarrinho.addEventListener('click', () => {
    modal.classList.add('ativo')
    overlay.classList.add('ativo')
})

// FECHAR (botão X)
btnFechar.addEventListener('click', () => {
    modal.classList.remove('ativo')
    overlay.classList.remove('ativo')
})

// FECHAR (clicando fora)
overlay.addEventListener('click', () => {
    modal.classList.remove('ativo')
    overlay.classList.remove('ativo')
})