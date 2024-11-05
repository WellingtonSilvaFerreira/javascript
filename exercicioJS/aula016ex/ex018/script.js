let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
    return false
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n))
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){

    }else{
        alert('Valor invvalido ou já se encontra na lista')
    }
}