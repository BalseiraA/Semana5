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
    
      let tiempos = setInterval(() => {
        tiempo.innerHTML = min + ":" + seg;  
        console.log(min + ":" + seg);
        
        if(seg > 0 && min > 0){
          if(seg <= 59 && seg > 0){
            seg--;
          }else{
            seg=59;
            min--;
          }
        }else{
          clearInterval(tiempos);
        }
      }, 1000);
    
    var tempo = setTimeout(()=>{
      alarma=true;
      console.log("si"+alarma);
      if(alarma == true){
        alarmita.volume=0.5;
        alarmita.play();
      }
    }, (minutos.value * 60000) + (segundos.value * 1000))
  }
  iniciar.addEventListener("click", ()=>{
    clearTimeout(tempo);
  })
  parar.addEventListener("click", ()=>{
    clearTimeout(tempo);
  })
})

