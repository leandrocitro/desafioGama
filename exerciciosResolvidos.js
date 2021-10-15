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


// Exercício 11
function exercicio11() {

    var listaDeptos = [];
    let codDepto = 0;
    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.departamento.idDepto != codDepto) {
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                somatoriaItens: 0
            };
            listaDeptos.push(itemLista);
            codDepto = produto.departamento.idDepto;
        }
    }

    for (i = 0; i < listaProdutos.length; i++) {

        let produto = listaProdutos[i];


        for (j = 0; j < listaDeptos.length; j++) {
            if (produto.departamento.idDepto == listaDeptos[j].idDepto) {
                listaDeptos[j].somatoriaItens += produto.qtdEstoque;
                break;
            }
        }
    }

    console.log(listaDeptos);
}


// Exercício 12

function exercicio12() {
    var listDeptos = [];
    let codDeptos = 0;

    for (i = 0; i < listaProdutos.length; i++) {

        let produto = listaProdutos[i];
        if (produto.departamento.idDepto != codDeptos) {

            let listItem = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                somatoriaItens: 0
            }
            listDeptos.push(listItem)
            codDeptos = produto.departamento.idDepto
        }
    }


    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i]

        for (j = 0; j < listDeptos.length; j++) {


            if (produto.departamento.idDepto == listDeptos[j].idDepto) {
                listDeptos[j].somatoriaItens += (produto.qtdEstoque * produto.preco)
                break
            }
        }
    }

    console.log(listDeptos)

}


// Exercício 13

function exercicio13() {
    var listaDeptos = [];
    let codDepto = 0;
    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.departamento.idDepto != codDepto) {
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                somatoriaItens: 0,
                totalEstoque: 0,
                ticketMedio: 0
            };
            listaDeptos.push(itemLista);
            codDepto = produto.departamento.idDepto;
        }
    }

    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        for (j = 0; j < listaDeptos.length; j++) {
            if (produto.departamento.idDepto == listaDeptos[j].idDepto) {
                listaDeptos[j].somatoriaItens += produto.qtdEstoque;
                listaDeptos[j].totalEstoque += produto.preco * produto.qtdEstoque;
                break;
            }
        }
    }


    for (j = 0; j < listaDeptos.length; j++) {
        listaDeptos[j].ticketMedio = listaDeptos[j].totalEstoque / listaDeptos[j].somatoriaItens;
    }

    console.log(listaDeptos);


}


// Exercício 14

function exercicio14() {
    var listaDeptos = [];
    let codDepto = 0;
    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.departamento.idDepto != codDepto) {
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                somatoriaItens: 0,
                valorTotal: 0,
                totalInventario: 0
            };
            listaDeptos.push(itemLista);
            codDepto = produto.departamento.idDepto;
        }
    }

    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        for (j = 0; j < listaDeptos.length; j++) {
            if (produto.departamento.idDepto == listaDeptos[j].idDepto) {
                listaDeptos[j].valorTotal += produto.preco;
                listaDeptos[j].somatoriaItens += produto.qtdEstoque;
                break;
            }
        }
    }
    let deptoMaisValioso = {
        totalInventario: 0
    }
    for (j = 0; j < listaDeptos.length; j++) {
        listaDeptos[j].totalInventario += listaDeptos[j].valorTotal * listaDeptos[j].somatoriaItens;
        if (deptoMaisValioso.totalInventario < listaDeptos[j].totalInventario) {
            deptoMaisValioso = listaDeptos[j];
        }
    }
    console.log(`O departamento mais valioso é o: ${deptoMaisValioso.nomeDepto}, cuja a soma total é: ${deptoMaisValioso.totalInventario.toLocaleString()}`);
}

// Exercício 15

function exercicio15() {
    var listaDepartamentos = [];
    let codigoDepartamento = 0;
    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        if (produto.departamento.idDepto != codigoDepartamento) {
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                somatoriaItens: 0,
                valorTotal: 0,
                totalInventario: 0
            };
            listaDepartamentos.push(itemLista);
            codigoDepartamento = produto.departamento.idDepto;
        }
    }

    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];
        for (j = 0; j < listaDepartamentos.length; j++) {
            if (produto.departamento.idDepto == listaDepartamentos[j].idDepto) {
                listaDepartamentos[j].valorTotal += produto.preco;
                listaDepartamentos[j].somatoriaItens += produto.qtdEstoque;
                break;
            }
        }
    }
    let deptoMenosValioso = {
        totalInventario: 0
    }
    for (j = 0; j < listaDepartamentos.length; j++) {
        listaDepartamentos[j].totalInventario += listaDepartamentos[j].valorTotal * listaDepartamentos[j].somatoriaItens;
        if (deptoMenosValioso.totalInventario == 0) {
            deptoMenosValioso = listaDepartamentos[j];
        } else if (listaDepartamentos[j].totalInventario < deptoMenosValioso.totalInventario) {
            deptoMenosValioso = listaDepartamentos[j];
        }
    }
    console.log(`O departamento menos valioso é o: ${deptoMenosValioso.nomeDepto}, cuja a soma total é: ${deptoMenosValioso.totalInventario.toFixed(2)}`);
}