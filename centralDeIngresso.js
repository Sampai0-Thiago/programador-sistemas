//Atividade extra 03

const readline = require('node:readline/promises');
const {stdin, stdout}= require('node:readline/promises');

async function main() {
    const rl = readline.createInterface({input: stdin, output: stdout})
    try{
        console.log('Valores por sessão');
        console.log('1 - Manhã (R$ 20.00)');
        console.log('2- Tarde (R$ 28.00)');
        console.log('2- Noite (R$ 35.00)');
        
        const opcaoTexto = await rl.question('Sessão (1 a 3):');
        const idadeTexto = await rl.question('Digite sua idade: ');
        const quantidadeTexto = await rl.question('Quantidade de ingressos: ');
        const associado = (await rl.question('Associado (sim/não): ')).trim().toLocaleLowerCase();
        const cupom = (await rl.question('Cupom (sim/não): ')).trim().toLocaleLowerCase();

        const opcao = Number(opcaoTexto);
        const idade = Number(idadeTexto);
        const quantidade= Number(quantidadeTexto);        
    } finally{
        rl.close();
    };

    if(!Number.isInteger(opcao) || opcao < 1 || opcao > 3){
        console.log('Erro: Opção inválida. Escolha entre as sessões 1, 2 ou 3')
        return;
    } 
    else if (idadeTexto.trim()==='' || !Number.isInteger(idade)|| idade <0 || idade > 120){
        console.log('Erro: Idade deve ser um inteiro entre 1 e 120.');
        return;
    } 
    else if (associado !== 'sim' && associado !== 'não' && associado !== 'nao') {
        console.log('Erro: responda sim ou não para associado.'); 
        return;
    }
    else if (cupom !== 'sim' || cupom !== 'não' && cupom !== 'sim' || cupom !== 'nao'){
        console.log('Erro: responda sim ou não para cupom.'); 
        return;
    }
}

    let sessao = '';
    let preco = 0;

    switch(opcao){
    case 1: 
        sessao = 'Manhã'; preco = 20;
        break;
    case 2: 
        sessao = 'Tarde'; preco = 28;
        break;
    case 3: 
        sessao = 'Noite'; preco = 35;
        break;
    }

    let dsconto = 0;

    if(idade <=12 ){
        desconto = 50;
    }
    else if (idade >= 60){
        desonto = 30;
    }
    else{
        desconto = 0;
    }

    if (cupom === 'sim' && quantidade >= 2){
        desconto += 10;
    }

    if(cumpom === 'sim' && (opcao === 1 || opcao === 2 )){
        desconto += 5;
    }

    let limite = false;

    //Acima de 60%





