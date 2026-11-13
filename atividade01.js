const preco = 39.90;
const quantidade =  3  
const taxaDesconto = 0.10;   

const total = preco * quantidade;
const desconto = total * taxaDesconto;
const valorFinal = total - desconto;

console.log("Preço do produto: R$ " + preco.toFixed(2));
console.log("Quantidade: " + quantidade);
console.log("Valor total: R$ " + total);
console.log("Desconto (10%):" + desconto.toFixed(2) );
console.log("Valor final: R$ " + valorFinal.toFixed(2));