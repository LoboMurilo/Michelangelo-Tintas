const adicionar = document.querySelectorAll('.mais');
const remover = document.querySelectorAll('.menos');
const quantidade = document.querySelector('.carrinho span');

/* VERIFICA NO LOCALSTORAGE SE JÁ FORAM ADICIONADOS OU REMOVIDOS ITENS DO CARRINHO */
function puxarQuantidade() {
  if (localStorage.getItem('quantidade'))
    quantidade.innerText = localStorage.getItem('quantidade');
}

/* AO CARREGAR A PÁGINA, CASO EXISTA DADOS NO LOCALSTORAGE, MOSTRA PRO USUÁRIO */
window.addEventListener('load', puxarQuantidade);

/* FUNÇÃO PARA ADICIONAR UM ITEM NO CARRINHO */
function adicionarItem() {
  quantidade.innerText = +quantidade.innerText + 1;
  localStorage.setItem('quantidade', quantidade.innerText);
}

/* MÉTODO DE ARRAY PARA FAZER UM LOOP E ADICIONAR UM EVENTO PARA CADA ITEM */
adicionar.forEach((adicionar) => {
  adicionar.addEventListener('click', adicionarItem);
});

/* FUNÇÃO PARA REMOVER UM ITEM DO CARRINHO */
function removerItem() {
  if (quantidade.innerText != 0)
    quantidade.innerText = +quantidade.innerText - 1;
  localStorage.setItem('quantidade', quantidade.innerText);
}

remover.forEach((remover) => {
  remover.addEventListener('click', removerItem);
});
