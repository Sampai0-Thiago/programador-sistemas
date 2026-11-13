const nomeProduto = "mesa para jogos" ;
const precoUnit = 2500 ;
const qntUnidades = 1;
const descontoPercent = 10; 

const ValorDesconto = subTotal * (descontoPercent/100);

const subTotal = precoUnit * quantidade;

const totalPagar = subTotal - valorDesconto ;

const pedidoValido = ;
const freteGratis = ;
const ofertaEspecial = ;

if ( precoUnit > 0 && qntUnidades > 0 && descontoPercent >= 0 && descontoPercent <= 100){
    pedidoValido = true;
    console.log("Pedido válido")
}



//----------------------------------------------

// const produto = "Caderno"; 
// const precoUnitario = 40; 
// const quantidade = 4; 
// const descontoPercentual = 10;
// const subtotal = precoUnitario * quantidade;
// const valorDesconto = subtotal * (descontoPercentual / 100); 
// const total = subtotal - valorDesconto; 


// const pedidoValido = precoUnitario > 0 && quantidade > 0 && descontoPercentual >= 0 && descontoPercentual <=
// 100; 
// const freteGratis = total >= 150 && quantidade >= 3; 

// const ofertaEspecial = total >= 100 || quantidade >= 5; 