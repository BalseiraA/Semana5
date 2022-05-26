const iniciar = document.getElementById("iniciar");
const parar = document.getElementById("parar");
const minutos = document.getElementById("min");
const segundos = document.getElementById("seg");
const tiempo = document.getElementById("testo-tempo");
const alarmita = new Audio("./statics/media/sonido-para-celular-rosalia.mp3");

tiempo.innerHTML = "00:00"; 

iniciar.addEventListener("click", ()=>{
  let min=0;
  let seg=0;
  let alarma = false;
  if(minutos.value > 59){
    minutos.value=59;
    console.log(minutos.value);
  }
  if(segundos.value > 59){
    segundos.value=59;
    console.log(segundos.value);
  }
  if(minutos.value <= 00 && segundos.value <= 00){
    alert("No has ingresado una cantidad de tiempo!!!");
  }
  else{
    min = minutos.value;
    seg = segundos.value;
    
    var tiempos = setInterval(() => {
      if(min < 10 && seg < 10){
        tiempo.innerHTML = 0 + min + ":" + 0 + seg;  
      }
      if(min < 10 && seg >= 10){
        tiempo.innerHTML = 0 + min + ":" + seg;  
      }
      if(min >= 10 && seg < 10){
        tiempo.innerHTML = min + ":" + seg;
      } 
      console.log(min + ":" + seg);
      
      if(min >= 0){
        if(seg <= 59 && seg > 0){
          seg--;
        }else if(min > 0){
          seg=59;
          min--;
        }
      }
    }, 1000);
    
    var tempo = setTimeout(()=>{
      alarma=true;
      console.log("si"+alarma);
      if(alarma == true){
        min=0;
        seg=0;
        clearInterval(tiempos);
        alarmita.volume=0.5;
        alarmita.play();
        tiempo.innerHTML = 0 + min + ":" + 0 + seg;
      }
    }, (minutos.value * 60000) + (segundos.value * 1000)+1000)
    
  }
  iniciar.addEventListener("click", ()=>{
    clearTimeout(tempo);
  })
  parar.addEventListener("click", ()=>{
    clearTimeout(tempo);
    clearInterval(tiempos);
    min=0;
    seg=0;
    tiempo.innerHTML = 0 + min + ":" + 0 + seg;
  })
})

