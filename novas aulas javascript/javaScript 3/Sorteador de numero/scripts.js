function generateNumber(){
    const min = Math.ceil(document.querySelector(".inputMin").value)
    const max = Math.floor(document.querySelector(".inputMax").value)

    const result = Math.floor(Math.random() * (max - min + 1 )) + min;

    if(min >= max){
        alert("O número Minimo não pode ser maior que o numero Maximo")
    }else{
    alert(result)
    }
}