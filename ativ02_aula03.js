const inquirer = require('inquirer');

inquirer
  .prompt([
    { name: 'nota', message: 'Qual a nota do colaborador? (0 a 10)' },
    {
      name: 'frequencia',
      message: 'Qual a frequência do colaborador? (0 a 100%)'
    }
  ])
  .then(respostas => {
    const nota = Number(respostas.nota);
    const frequencia = Number(respostas.frequencia);

    if (nota >= 7 && frequencia >= 75) {
        console.log("Aprovado!");
    } else if (nota >= 5 && frequencia >= 75) {
        console.log("Recuperação!");
    } else {
        console.log("Reprovado!");
    }
});
