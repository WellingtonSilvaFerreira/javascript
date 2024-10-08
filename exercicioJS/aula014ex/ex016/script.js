 function contar(){
    let ini = document.querySelector('#ini')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    }else{
        res.innerHTML='Contando'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
            for( let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1f449} `
            }
        } else {
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
            res.innerHTML += '\u{1f3c1}'
        
        }
        
    }
