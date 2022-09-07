const form = document.getElementById('form-contatos'); //pegando o formulário do HTML
const nome = []; //array para armazenar os nomes
const numero = [];//array para armazenar os telefones
let contatos = '';//variável para concatenar com a outra variável contatos
let numeroCorreto = false; //variável para validar se o número é válido na função adicionaContato()



//funcao para ouvir o comportamento do botao submit do formulario
form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaAgenda();
})

//funcao para preencher um contato
// condição: se o número inserido já estiver em uso, vai apresentar um erro
function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(numero.includes(inputNumeroContato.value)) {
    alert(`O número:${inputNumeroContato.value} já foi inserido para outro contato, verifique!`);

    } else {
    nome.push(inputNomeContato.value);
    numero.push(inputNumeroContato.value);
    let contato = '<tr>';
    contato += `<td>${inputNomeContato.value}</td>`;
    contato +=`<td>${inputNumeroContato.value}</td>`;
    contato += '</tr>';

    contatos += contato;
    }

    inputNomeContato.value = ' ';
    inputNumeroContato.value = ' ';
}

//funcao para adicionar o conteúdo inserido no forms na página HTML
function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = contatos;
}

