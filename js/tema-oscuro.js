const d = document,ls=localStorage;
export default function darkTheme(btn,classDark){
    const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

    let darkMode = 'dark_mode',lightMode = 'light_mode'

    const dark = () =>{
        $selectors.forEach(element=>{element.classList.add(classDark)})
        $themeBtn.textContent = lightMode
        ls.setItem('theme','dark')
    }
    const light = () =>{
        $selectors.forEach(element=>{element.classList.remove(classDark)})
        $themeBtn.textContent = darkMode
        ls.setItem('theme','light')
    }

    d.addEventListener('click',e=>{
        // console.log($themeBtn.textContent)
        //Si el boton del tema es dark mode, cambialo a light mode
        if(e.target.matches(btn)){
            if($themeBtn.textContent === darkMode){dark()}else{light()}
        }
    })
    //No podemos tener dos eventos del mismo tipo, ya teniamos un DOMContentLoaded en index.js
    //entonces la quitamos de ahi en index.js
    d.addEventListener('DOMContentLoaded',e=>{
        let theme = ls.getItem('theme') 
        console.log(theme)  
        if (theme === null)ls.setItem('theme','light');
        if(theme === 'light')light();
        if(theme === 'dark')dark();
    })


}