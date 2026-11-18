//desempnehdo do aluno

const readline = require(readline)

const iO = readline.createInterface({
  input: process.stdin,
  outoput: process.stdout
})

iO.question('Informe a nota do aluno (0 a 10) ', resposta => {
  const nota = Number(resposta)

  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log('Erro: Nota inválida! Informe um valor entre 0 e 10.')
  } else {
    let resultado = ''

    if (nota >= 9.0) {
      resultado = 'Excelente'
    } else if (nota >= 7.0 && nota < 9.0) {
      resultado = 'Bom'
    } else if (nota >= 5.0 && nota < 7.0) {
      resultado = 'Regular'
    } else {
      resultado = 'Reprovado'
    }

    console.log(`\nNota informada: ${nota}`)
    console.log(`Resultado do desempenho: ${resultado}`)
  }

  // Fecha a interface do terminal
  iO.close()
})
