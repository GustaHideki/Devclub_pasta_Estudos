/*Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'.
 Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não.
  Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem*/

  let numeroPremiado=(Math.floor(Math.random()* (10 - 1)+ 1))
  let numeroSorteio=(Math.floor(Math.random()* (10-1)+1))

 console.log(numeroPremiado)
 console.log(numeroSorteio)

  if (numeroPremiado==numeroSorteio){
    console.log('Parabens seu numero foi sorteado')
  }else{
    console.log('Sinto muito! Não foi dessa vez.')
  }
