// let nota = prompt("Qual a nota do colaborador? (0 a 10)");
// let frequencia = prompt("Qual a frequência do colaborador? (0 a 100%)")


// if (nota >= 7 && frequnacia >= 75){
//     console.log("Aprovado!");

// } else if (nota >= 5 && frequencia>= 75 ){
//     console.log("Recuperação!");

// }else {
//     console.log("Reprovado!");
// }

const inquirer = require('inquirer');

inquirer.prompt([
    {name: 'nota', message: 'Informe a nota (0 a 10): '},
    {name: 'frequqncia', message: 'Informe a frequência (0 a 100%): '}    
]).then(respostas =>{
    const nota = Number(respostas.nota);
    const frequencia = Number(respostas.frequencia);

    let resultado;

    if(nota >= 7 && frequencia >= 75){
        resultado = "Aprovado";
    } else if (nota >= 5 && frequencia >= 75 ){
        resultado = "Recuperação"
    } else {
        resultado = "Reprovado";
    }
    console.log(`Resultado: ${resultado}`);


});