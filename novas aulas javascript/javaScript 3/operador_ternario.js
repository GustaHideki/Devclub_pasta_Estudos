/* 

Operador Ternário


? = if (se)

: = else (se não)

&& = (if sem o else)

*/

const salary = 200000

// exemplo usando if e else com operador ternário

salary <= 3000 ? console.log("O programador é Junior") : console.log("O programador é Senior")

// exemplo usando apenas o if com operador ternario

salary >= 10000 && console.log("Ele é Diretor")

// exemplo usando varios if e else com o operador ternário

salary <= 3000 ? console.log("O programador é junior") : salary > 3000 && salary <=5000 ? console.log("O programador é Pleno") : salary >5000 && salary <= 20000 ? console.log("O programador é Sênior") : console.log("Ele é diretor")

