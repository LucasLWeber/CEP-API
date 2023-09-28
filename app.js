const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cep = document.querySelector('input').value;
  getInfoFromCep(cep);
});

async function getInfoFromCep(cep){
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const info = await response.json();
  autoFillInfo(info);
}

// function fixFormat(cep){
//   if(cep.length < 9){
//     return false;
//   } else {
//     return true;
//   }
// }

async function autoFillInfo(obj){
  const bairro = document.getElementById('bairro'), 
        localidade = document.getElementById('localidade'), 
        logradouro = document.getElementById('logradouro'), 
        uf = document.getElementById('uf');
        
  bairro.value = obj.bairro;
  localidade.value = obj.localidade;
  logradouro.value = obj.logradouro;
  uf.value = obj.uf;
}

