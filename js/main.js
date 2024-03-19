
let div_cronometro = document.querySelector(".cronometro");
let entrada = document.querySelector(".t1");
let btn = document.querySelector(".btn");

let tiempo;

function iniciar_cronometro (minutos, segundos){

    function actualizar (){
      
        if (segundos==1 & minutos==0) {
            clearInterval(tiempo);
        }
        segundos--;
     
        div_cronometro.innerHTML="";

        if (segundos == 0){
            if (minutos >= 1) {
                segundos = 59;
                minutos--;
            }
        }

        if (segundos < 10) {
            div_cronometro.innerHTML=`0${minutos}:0${segundos}` 
            ;
            if (minutos < 10){
                div_cronometro.innerHTML=`0${minutos}:0${segundos}`; 
            }else{
                div_cronometro.innerHTML=`${minutos}:0${segundos}`; 
            }
        }else{
        div_cronometro.innerHTML=`0${minutos}:${segundos}`;
        }
    }
    
    // intervalo de tiempo 1000 ms = 1 segundo
    // realizar una accion cada 1 segundo
    tiempo = setInterval (actualizar, 1000);
};

btn.addEventListener("click", () => {
    let minutos = parseInt(entrada.value);
    iniciar_cronometro(minutos, 1);
    let segundos = parseInt(entrada.value);
    iniciar_cronometro(segundos, 1);
});