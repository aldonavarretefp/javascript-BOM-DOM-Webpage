const d =document;
export default function countDown(id,limitDate,message){
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=>{
        let now = new Date().getTime(),
        limitTime = countdownDate-now,
        days = Math.floor(limitTime/(1000*60*60*24)),
        hours = ("0" + Math.floor(limitTime % (1000*60*60*24) / (1000*60*60))).slice(-2) , //Porque es el residuo
        minutes = ("0" + Math.floor(limitTime % (1000*60*60) / (1000*60))).slice(-2), //Porque es el residuo
        seconds = ("0" + Math.floor(limitTime % (1000*60) / (1000))).slice(-2); //Porque es el residuo
       

        $countdown.innerHTML = `<h3>Faltan: ${days} Dias,${hours} Horas,${minutes} Minutos,${seconds} Segundos</h3>`

        //Cuando llegue a la fecha designada
        if(limitTime<0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${message}</h3>`;
        } 

    },1000)
}