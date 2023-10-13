function adicionarContato() {
    const inputNomeContato = document.getElementById("contact-name").value;
    let inputNumeroContato = document.getElementById("contact-number").value;

    const numeroLimpo = inputNumeroContato.replace(/\D/g, '');

    if (inputNomeContato === "" || inputNumeroContato === "" ) {
        alert("Por favor, preencha todos os campos");
        return;
    }

    const tabelaContatos = document.querySelector("table");
    const novaLinha = tabelaContatos.insertRow(-1);

    const nomeContato = novaLinha.insertCell(0);
    const numeroContato = novaLinha.insertCell(1);

    nomeContato.textContent = inputNomeContato;
    numeroContato.textContent = inputNumeroContato;

    document.getElementById("contact-name").value = '';
    document.getElementById("contact-number").value = '';

}




