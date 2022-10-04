const nome = document.querySelector('.nome');
const email = document.querySelector('.email');
const mensagem = document.querySelector('.mensagem');

/* FUNÇÃO PARA VALIDAR SE O CAMPO ESTÁ VAZIO E INFORMAR O USUÁRIO QUE DEVE CONTER ALGO */
function validador() {
  const span = document.createElement('span');
  span.innerText = 'O campo não pode estar vazio.';
  span.style.marginBottom = '.5rem';
  if (this.value == '') {
    this.style.borderColor = 'tomato';
    this.parentNode.insertBefore(span, this.nextSibling);
  } else {
    this.style.borderColor = 'green';
    if (document.querySelector('span')) document.querySelector('span').remove();
  }
}

nome.addEventListener('change', validador);
email.addEventListener('change', validador);
mensagem.addEventListener('change', validador);
