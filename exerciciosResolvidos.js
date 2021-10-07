// Exercício 1
function exercicio1() {
    var total = 0;

    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        total = total + produto.qtdEstoque;
    }
    console.log("Total de produtos em estoque = " + total);
}

// Exercício 2
function exercicio2() {
    var total = 0;
    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];

        if (produto.emDestaque == "sim") {
            total = total + produto.qtdEstoque;
        }

    }
    console.log("Quantidade total de itens em destaque é = " + total);
}

// Exercício 3
function exercicio3() {
    var total = 0;
    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];

        if (produto.disponivel == "sim") {
            total = total + produto.qtdEstoque;
        }

    }
    console.log("Quantidade total de itens disponivel é = " + total);
}

// Exercício 4
function exercicio4() {
    var total = 0;

    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];

        if (produto.emDestaque == "sim" && produto.disponivel == "sim") {
            total += produto.qtdEstoque;
        }
    }
    console.log("Total de produtos em estoque disponíveis e em destaque = " + total);

}

// Exercício 5
function exercicio5() {
    var TotalInventario = 0;
    var valorInventario = 0;


    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];

        if (produto.qtdEstoque > 0) {
            valorInventario = produto.preco * produto.qtdEstoque
            TotalInventario += valorInventario
        }
    }
    console.log("o valor do inventario é R$ " + TotalInventario);
}

// Exercício 6
function exercicio6() {
    let produtoMaisCaro = listaProdutos[0];
    for (i = 1; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.preco > produtoMaisCaro.preco) {
            produtoMaisCaro = produto;
        }
    }
    console.log("Produto mais caro da empresa é o  " + produtoMaisCaro.descricao + " cujo preço é R$ " + produtoMaisCaro.preco);
}

// Exercício 7

function exercicio7() {
    let produtoMaisBarato = listaProdutos[0];

    for (i = 1; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.preco < produtoMaisBarato.preco) {
            produtoMaisBarato = produto;
        }
    }
    console.log("Produto mais barato da empresa é o  " + produtoMaisBarato.descricao + " cujo preço é R$ " + produtoMaisBarato.preco);


}

// Exercício 8
function exercicio8() {
    let estoqueMaisValioso = listaProdutos[0];
    for (i = 1; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.qtdEstoque > 0) {
            if (produto.preco * produto.qtdEstoque > estoqueMaisValioso.preco * estoqueMaisValioso.qtdEstoque) {
                estoqueMaisValioso = produto;
            }
        }
    }
    console.log("O estoque mais valioso é do produto " + estoqueMaisValioso.descricao +
        " cujo valor está estimado em R$ " + (estoqueMaisValioso.preco * estoqueMaisValioso.qtdEstoque));
}


// Exercício 9
function exercicio9() {
    let estoqueMaisBarato = listaProdutos[0];
    for (i = 1; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.qtdEstoque > 0) {
            if (produto.preco * produto.qtdEstoque < estoqueMaisBarato.preco * estoqueMaisBarato.qtdEstoque) {
                estoqueMaisBarato = produto;
            }
        }
    }
    console.log("O estoque mais barato é do produto " + estoqueMaisBarato.descricao +
        " cujo valor está estimado em R$ " + (estoqueMaisBarato.preco * estoqueMaisBarato.qtdEstoque));


}

// Exercício 10
function exercicio10() {
    var total = 0;
    var qtd = 0;
    for (i = 0; i < listaProdutos.length; i++) {
        let produtos = listaProdutos[i];

        total += produtos.preco;
        qtd = ++qtd

    }

    let ticketMedio = total / qtd;
    console.log("O ticket médio é: " + ticketMedio.toFixed(2));
    
}