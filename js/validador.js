const nome = document.querySelector('.nome');
const email = document.querySelector('.email');
const mensagem = document.querySelector('.mensagem');

/* FUNÇÃO PARA VALIDAR SE O CAMPO ESTÁ VAZIO E INFORMAR O USUÁRIO QUE DEVE CONTER ALGO */
function validador() {
  if (this.value == '') {
    this.style.borderColor = 'tomato';
    const span = (document.createElement = 'span');
    span.innerText = 'O campo não pode estar vazio.';
    this.appendChild(span);
  } else {
    this.style.borderColor = 'green';
  }
}

nome.addEventListener('change', validador);
email.addEventListener('change', validador);
mensagem.addEventListener('change', validador);
