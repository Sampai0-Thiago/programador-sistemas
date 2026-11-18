//Atividade-01   Aula_03

const preco = 39.9
const quantidade = 3
const taxaDesconto = 0.1

const total = preco * quantidade
const desconto = total * taxaDesconto
const valorFinal = total - desconto

console.log('Preço do produto: R$ ' + preco.toFixed(2))
console.log('Quantidade: ' + quantidade)
console.log('Valor total: R$ ' + total.toFixed(2))
console.log('Desconto (10%):' + desconto.toFixed(2))
console.log('Valor final: R$ ' + valorFinal.toFixed(2))
