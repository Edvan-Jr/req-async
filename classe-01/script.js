const cepInput = document.querySelector('#cep');
const ufpInput = document.querySelector('#uf');
const cidadeInput = document.querySelector('#cidade');
const ruaInput = document.querySelector('#rua');

cepInput.addEventListener('change', function () {
    if (cepInput.value.length !== 8) {
        window.alert('O CEP deve ter 8 dígitos!');
        return;
    }

    const resp = fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`);

    resp.then(function (resposta) {
        if (!resposta.ok) {
            console.log("ERRO");
            return;
        }

        const promiseBody = resposta.json();

        promiseBody.then(function (body) {
            if (body.erro) {
                console.log("ERRO");
                return;
            }
            ufpInput.value = body.uf;
            cidadeInput.value = body.localidade;
            ruaInput.value = body.logradouro;
        });
    });
});