// Etapa 1 — Criar, acessar e modificar a lista
let materiais = ["Caderno", "Lápis", "Régua", "Cola"]; 
console.log(materiais[0]); 
materiais[1] = "Caneta"; 
materiais.push("Borracha", "Tesoura"); 
console.log(materiais.length); 

// Etapa 2 — Remover, buscar e ordenar
console.log(materiais.pop()); 
console.log(materiais.shift()); 
let posicao = materiais.indexOf("Régua");
if (posicao !== -1) { 
  materiais.splice(posicao, 1); 
} 
console.log(materiais.includes("Cola")); 
console.log(materiais.includes("Mochila")); 
materiais.sort();
for (let i = 0; i < materiais.length; i++) { 
  console.log(i, materiais[i]); 
} 

// Etapa 3 — Calcular e classificar compras
const compras = [12, 8, 20, 10]; 
let total = 0; 
for (let i = 0; i < compras.length; i++) { 
  total += compras[i]; // Soma o valor atual
  if (compras[i] >= 10 && compras[i] <= 20) { 
    console.log(compras[i], "Na faixa"); 
  } else { 
    console.log(compras[i], "Fora da faixa"); 
  } 
} 

// Etapa 4 — Finalizar o relatório
const media = total / compras.length; 
const maior = Math.max(...compras); 
const menor = Math.min(...compras); 
console.log("Total: R$", total); 
console.log("Média: R$", media.toFixed(2)); 
console.log("Maior:", maior, "Menor:", menor); 
const status = total <= 50 ? "No orçamento" : "Acima"; 
console.log(status); 