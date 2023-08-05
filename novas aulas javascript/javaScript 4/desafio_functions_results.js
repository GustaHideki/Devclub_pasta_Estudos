/* 
Calcula desconto: 

Todos os produtos acima de R$ 30,00 tem 10% de desconto.


*/


const cart = [10, 244, 99, 2, 20, 33, 250]
let precofinal = 0
let precoTotal = 0

for (let i = 0; i < cart.length; i++) {
   precoTotal =  precoTotal + cart[i];
    }
    

function calculaDesconto(preco, desconto){
    const resultado = (preco * desconto) / 100
    return resultado
}

cart.forEach(valor => {
    if(valor >30){
        const desconto = calculaDesconto(valor, 10)
        precofinal += (valor-desconto)
    }else{
        precofinal += valor
    }
    });


console.log(`O valor final final da compra foi de: R$ ${precoTotal.toFixed(2)}, porém você teve desconto, irá pagar apenas: R$ ${precofinal.toFixed(2)},
 você economizou:  R$ ${(precoTotal - precofinal).toFixed(2)}`)

 