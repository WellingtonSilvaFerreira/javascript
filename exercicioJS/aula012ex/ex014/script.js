 function carregar(){

 var msg = document.getElementById('msg')
 var img = document.querySelector('#imagem')
 var data = new Date()
 var hora = data.getHours()
 //var hora = 18
 msg.innerHTML = `Agora são ${hora}:00 horas.`

 if(hora >= 0 && hora < 12){
    //Bom dia
    img.src = 'manha.jpg'
    document.body.style.background= '#FAB074'
 }else if(hora >= 12 && hora < 18){
    //Boa tarde
    img.src='tarde.jpg'
    document.body.style.background= '#DC8935'
 }else{
    //Boa noite
    img.src = 'noite.jpg'
    document.body.style.background = '#071C1D'
 }
 }