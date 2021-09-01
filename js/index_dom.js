import {digitalClock,alarm} from './reloj.js'
import hamburguerMenu from "./menu_hamburguesa.js";
import { shorcuts } from './teclado.js';
import countDown from './cuenta _regresiva.js';
import scrollTopButton from './btn_scroll.js';
import darkTheme from './tema-oscuro.js';
import responsiveMedia from './objeto-responsive.js';
import responsiveTester from './prueba_responsive.js';
import userDeviceInfo from './deteccion-dispositivos.js';
const d = document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("../assets/iphone_alarm_morning.mp3","#activar-alarma","#desactivar-alarma")
    countDown("countdown",new Date("20 Mar 2022"),"FELICIDADES, TU CUMPLEAÑOS HA PASADO YA!")
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width:1024px)",
    `<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=gNabJjHm6EM" >Ver Video</a>`,

    `<iframe width="560" height="315" src="https://www.youtube.com/embed/MnrJzXM7a6o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    
    responsiveMedia("gmaps","(min-width:1024px)",
    `<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/eCswiW4o4yn7wXw36" >Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3308153496612!2d-99.16869369179001!3d19.427020596721842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1629818531580!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);

    responsiveTester("responsive-tester");
    userDeviceInfo("user-device")

})

//La propiedad keydown tiene un code 18, viene
//en sus propiedades como objeto en consola.
//up cuando sueltas la tecla, down cuando la presionas y press cuando tengas presionada la tecla
//Cntrl Shift, se ponen en booleano, y es para los shorcuts
d.addEventListener('keyup', e=>{
    
    shorcuts(e);
})
darkTheme('.dark-theme-btn','dark-mode');