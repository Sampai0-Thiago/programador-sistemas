const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');

const SESSIONS = {
  1: { name: 'Manhã', price: 20 },
  2: { name: 'Tarde', price: 28 },
  3: { name: 'Noite', price: 35 },
};

function calculatePurchase(opcao, idade, quantidade, associado, cupom) {
  const session = SESSIONS[opcao];

  if (!session) {
    return { error: 'Erro: sessão inválida. Escolha 1, 2 ou 3.' };
  }

  if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
    return { error: 'Erro: idade deve ser um inteiro entre 0 e 120.' };
  }

  if (!Number.isInteger(quantidade) || quantidade < 1 || quantidade > 5) {
    return { error: 'Erro: quantidade deve ser um inteiro entre 1 e 5.' };
  }

  const normalizedAssociado = String(associado).trim().toLowerCase();
  if (!['sim', 'não', 'nao'].includes(normalizedAssociado)) {
    return { error: 'Erro: responda sim ou não para associado.' };
  }

  const normalizedCupom = String(cupom).trim().toLowerCase();
  if (!['sim', 'não', 'nao'].includes(normalizedCupom)) {
    return { error: 'Erro: responda sim ou não para cupom.' };
  }

  let desconto = 0;
  if (idade <= 12) {
    desconto = 50;
  } else if (idade >= 60) {
    desconto = 30;
  }

  if (normalizedAssociado === 'sim' && quantidade >= 2) {
    desconto += 10;
  }

  if (normalizedCupom === 'sim' && (opcao === 1 || opcao === 2)) {
    desconto += 5;
  }

  let limiteAplicado = false;
  if (desconto > 60) {
    desconto = 60;
    limiteAplicado = true;
  }

  const subtotal = session.price * quantidade;
  const valorDesconto = subtotal * desconto / 100;
  const total = subtotal - valorDesconto;

  return {
    sessao: session.name,
    preco: session.price,
    quantidade,
    subtotal,
    desconto,
    valorDesconto,
    total,
    mensagem: desconto > 0 ? 'Benefício aplicado' : 'Preço integral',
    limiteAplicado,
  };
}

function validateOption(value) {
  return Number.isInteger(Number(value)) ? Number(value) : null;
}

async function main() {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  try {
    console.log('1 - Manhã (R$ 20,00)');
    console.log('2 - Tarde (R$ 28,00)');
    console.log('3 - Noite (R$ 35,00)');

    const opcaoTexto = await rl.question('Sessão (1 a 3): ');
    const idadeTexto = await rl.question('Idade: ');
    const quantidadeTexto = await rl.question('Quantidade (1 a 5): ');
    const associado = await rl.question('Associado (sim/não): ');
    const cupom = await rl.question('Cupom (sim/não): ');

    const opcao = validateOption(opcaoTexto);
    const idade = idadeTexto.trim() === '' ? NaN : Number(idadeTexto);
    const quantidade = quantidadeTexto.trim() === '' ? NaN : Number(quantidadeTexto);

    const resultado = calculatePurchase(
      opcao,
      idade,
      quantidade,
      associado,
      cupom,
    );

    if (resultado.error) {
      console.log(resultado.error);
      return;
    }

    console.log('\n--- RESUMO DA COMPRA ---');
    console.log('Sessão:', resultado.sessao);
    console.log('Preço unitário: R$', resultado.preco.toFixed(2));
    console.log('Quantidade:', resultado.quantidade);
    console.log('Subtotal: R$', resultado.subtotal.toFixed(2));
    console.log('Desconto total:', resultado.desconto + '%');
    console.log('Total a pagar: R$', resultado.total.toFixed(2));
    console.log(resultado.mensagem);

    if (resultado.limiteAplicado) {
      console.log('Desconto máximo aplicado');
    }
  } finally {
    rl.close();
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

module.exports = { calculatePurchase };
