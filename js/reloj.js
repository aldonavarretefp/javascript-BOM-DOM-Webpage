const d = document;

export function digitalClock(clock,btnPlay,btnStop){
    let clockTempo
    let clockHour ;
    d.addEventListener('click',e=>{
        if(e.target.matches(btnPlay)){
            clockHour = new Date().toLocaleTimeString();
            d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            clockTempo = setInterval(()=>{
                clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
                
            },1000);
            e.target.disabled = true
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTempo)
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false
            
        }
    })
}
export function alarm(){

}