function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert(`[Erro] Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero='Homem'

            if(idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src','crianca-m.jpg')
            }else if ( idade <21){
                //jovem
                img.setAttribute('src','jovem-m.jpg')
            }else if(idade <59){
                //adulto
                img.setAttribute('src','adulto-m.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'

            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'crianca-f.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovem-f.jpg')
            }else if(idade < 59){
                //adulto
                img.setAttribute('src','adulto-f.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }
} 