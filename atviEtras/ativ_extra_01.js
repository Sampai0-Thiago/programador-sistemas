const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('1. Informe o nome do produto: ', nomeProduto => {
  rl.question('2. Informe o preço unitário em reais: ', inputPreco => {
    rl.question('3. Informe a quantidade de unidades: ', inputQtd => {
      rl.question(
        '4. Informe o percentual de desconto (0 a 100): ',
        inputDesconto => {
          const precoUnitario = Number(inputPreco)
          const quantidade = Number(inputQtd)
          const percentualDesconto = Number(inputDesconto)

          if (
            precoUnitario <= 0 ||
            quantidade <= 0 ||
            percentualDesconto < 0 ||
            percentualDesconto > 100
          ) {
            console.log(
              '\nErro: Dados inválidos! Verifique se preço e quantidade são maiores que zero e o desconto está entre 0 e 100.'
            )
            rl.close()
            return
          }

          const subtotal = precoUnitario * quantidade // Passo 5
          const valorDesconto = (subtotal * percentualDesconto) / 100 // Passo 6
          const totalAposDesconto = subtotal - valorDesconto // Passo 7

          const freteGratis = totalAposDesconto >= 150 && quantidade >= 3

          const ofertaEspecial = totalAposDesconto >= 100 || quantidade >= 5

          console.log('\n--- RESUMO DO PEDIDO ---')
          console.log(`Produto: ${nomeProduto}`)
          console.log(`Preço Unitário: R$ ${precoUnitario.toFixed(2)}`)
          console.log(`Quantidade: ${quantidade}`)
          console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`)
          console.log(
            `Desconto (${percentualDesconto}%): R$ ${valorDesconto.toFixed(2)}`
          )
          console.log(`Total após desconto: R$ ${totalAposDesconto.toFixed(2)}`)
          console.log('------------------------')
          console.log(`Frete Grátis: ${freteGratis}`)
          console.log(`Oferta Especial: ${ofertaEspecial}`)

          // Fecha a interface do terminal
          rl.close()
        }
      )
    })
  })
})
