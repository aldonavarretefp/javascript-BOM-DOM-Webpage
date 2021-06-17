import {digitalClock,alarm} from './reloj.js'
import hamburguerMenu from "./menu_hamburguesa.js";


const d = document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
})

