
// ==========================================
//  CONTROLE DE ESTOQUE
// ==========================================


let produtos = ["Monitor", "Mouse", "Teclado", "Webcam"];
let estoque = [4, 12, 7, 2];


console.log("\n===== ESTOQUE INICIAL =====");

for (let i = 0; i < produtos.length; i++) {
    console.log(
        `Índice: ${i} | Produto: ${produtos[i]} | Quantidade: ${estoque[i]}`
    );
}


console.log("\n===== CADASTROS =====");

function cadastrarProduto(nome, quantidade) {

    
    if (nome !== "" && !produtos.includes(nome) && quantidade >= 0) {

        
        produtos.push(nome);

        
        estoque.push(quantidade);

        console.log(`${nome} cadastrado com sucesso!`);

    } else {

        
        console.log(`Cadastro de ${nome} recusado!`);
    }
}


cadastrarProduto("Headset", 9);


cadastrarProduto("Mouse", 5);


console.log("\n===== ATUALIZAÇÃO =====");

let indice = produtos.indexOf("Teclado");

if (indice !== -1) {

    estoque[indice] = 10;

    console.log("Teclado atualizado para 10 unidades!");

} else {

    console.log("Teclado não encontrado!");
}

indice = produtos.indexOf("Impressora");

if (indice === -1) {
    console.log("Impressora não encontrada!");
}

console.log("\n===== REMOÇÕES =====");

let removido = produtos.pop();


estoque.pop();

console.log("Último produto removido:", removido);


removido = produtos.shift();


estoque.shift();

console.log("Primeiro produto removido:", removido);


indice = produtos.indexOf("Webcam");


if (indice !== -1) {

    produtos.splice(indice, 1);
    estoque.splice(indice, 1);

    console.log("Webcam removida com sucesso!");
}


console.log("\n===== NOVOS CADASTROS =====");

// Cadastra Monitor com 4 unidades
cadastrarProduto("Monitor", 4);

// Cadastra Headset com 9 unidades
cadastrarProduto("Headset", 9);

// 6. RELATÓRIO DE ESTOQUE
console.log("\n===== RELATÓRIO DE ESTOQUE =====");


let reposicao = 0;


for (let i = 0; i < produtos.length; i++) {

    
    if (estoque[i] < 5) {

        console.log(`${produtos[i]}: Repor`);
        reposicao++;

   
    } else if (estoque[i] <= 10) {

        console.log(`${produtos[i]}: Atenção`);

    
    } else {

        console.log(`${produtos[i]}: Normal`);
    }
}


console.log("Produtos para reposição:", reposicao);


console.log("\n===== ESTATÍSTICAS =====");


let soma = 0;


for (let i = 0; i < estoque.length; i++) {

    
    soma += estoque[i];
}


if (estoque.length > 0) {

    let media = soma / estoque.length;

    let maior = Math.max(...estoque);

  
    let menor = Math.min(...estoque);


    console.log("Total de unidades:", soma);
    console.log("Média:", media);
    console.log("Maior quantidade:", maior);
    console.log("Menor quantidade:", menor);

} else {

    
    console.log("Estoque vazio. Não é possível calcular média e extremos.");
}


console.log("\n===== LISTA ALFABÉTICA =====");


let produtosOrdenados = [];

for (let i = 0; i < produtos.length; i++) {

    produtosOrdenados.push(produtos[i]);
}


produtosOrdenados.sort();


console.log(produtosOrdenados);

console.log("\n===== MENU =====");

let opcao = 1;

switch (opcao) {

    case 1:

        console.log("Total de unidades:", soma);
        break;

    case 2:

        console.log("Quantidade de produtos:", produtos.length);
        break;

    default:

        console.log("Opção inválida!");
        break;
}

console.log("\n===== SITUAÇÃO DA REPOSIÇÃO =====");

let situacao = reposicao > 0
    ? "Existe reposição pendente!"
    : "Não existe reposição pendente!";

console.log(situacao);

console.log("\n===== TESTES DE VALIDAÇÃO =====");

cadastrarProduto("Impressora", -2);

cadastrarProduto("Caixa de Som", 0);

console.log("Produtos após testes:", produtos.length);
