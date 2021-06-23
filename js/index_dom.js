import {digitalClock,alarm} from './reloj.js'
import hamburguerMenu from "./menu_hamburguesa.js";
import { shorcuts } from './teclado.js';

const d = document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("../assets/iphone_alarm_morning.mp3","#activar-alarma","#desactivar-alarma")
    
})

//La propiedad keydown tiene un code 18, viene
//en sus propiedades como objeto en consola.
//up cuando sueltas la tecla, down cuando la presionas y press cuando tengas presionada la tecla
//Cntrl Shift, se ponen en booleano, y es para los shorcuts
d.addEventListener('keyup', e=>{
    console.warn('Nueva tecla')
    shorcuts(e);
})