const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cep = document.querySelector('input').value;
  fixFormat(cep);
});

async function getInfoFromCep(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const info = await response.json();
  info.erro ? console.log(info.erro) : autoFillInfo(info);
}

async function fixFormat(cep) {
  if (cep.length === 9) {
    let fixedCep = cep.split('-');
    fixedCep = fixedCep[0] + fixedCep[1];
    getInfoFromCep(fixedCep);
  } else {
    alert('Insira um formato válido');
    document.querySelector('input').value = '';
  }
}

async function autoFillInfo(obj) {
  const bairro = document.getElementById('bairro'),
    localidade = document.getElementById('localidade'),
    logradouro = document.getElementById('logradouro'),
    uf = document.getElementById('uf');

  bairro.value = obj.bairro;
  localidade.value = obj.localidade;
  logradouro.value = obj.logradouro;
  uf.value = obj.uf;
}