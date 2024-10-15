let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function adicionar(){
    if(isNumero(num.value) && inLista(num.value)){

    }else{
        alert('Valor invçalido ou já se encontra na lista')
    }
}