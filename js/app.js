function comprar() {
    //Obter o tipo de ingresso e a quantidade
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    //Testa se a quantidade é positva. Se não for exibe mensagem error.
    if (quantidade < 0) {
        alert('Erro, numero negativo de ingressos. Passe um número positivo de ingressos.')
    } else {
        //Se a quantidade for maior do que a dispnível, exibir um alerta
        if (quantidade > pegaQuantidadeDoItemSelecionadoEmEstoque(tipoDeIngresso)) {
            alert('Os ingressos acabaram ou a quantidade exigida não esta disponivel no estoque');
        } else {
            //Decrementar os ingressos comprados dos ingressos disponíveis
            alert('Compra realizada com sucesso!');
            decrementaQuantidadeDoItem(tipoDeIngresso, quantidade);
        }
    }


}

function decrementaQuantidadeDoItem(id, quantidade) {
    if (id == 'inferior') {
        document.getElementById('qtd-inferior').textContent = parseInt(document.getElementById('qtd-inferior').textContent) - quantidade;
    } else if (id == 'superior') {
        document.getElementById('qtd-superior').textContent = parseInt(document.getElementById('qtd-superior').textContent) - quantidade;
    } else if (id == 'pista') {
        document.getElementById('qtd-pista').textContent = parseInt(document.getElementById('qtd-pista').textContent) - quantidade;
    }
}

function pegaQuantidadeDoItemSelecionadoEmEstoque(id) {
    if (id == 'inferior') {
        return parseInt(document.getElementById('qtd-inferior').textContent);
    } else if (id == 'superior') {
        return parseInt(document.getElementById('qtd-superior').textContent);
    } else if (id == 'pista') {
        return parseInt(document.getElementById('qtd-pista').textContent);
    }
}