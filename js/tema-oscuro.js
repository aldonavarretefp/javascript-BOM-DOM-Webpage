const d = document;
export default function darkTheme(btn,classDark){
    const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

    let darkMode = 'dark_mode',
    lightMode = 'light_mode'
    console.log($selectors)

    d.addEventListener('click',e=>{
        // console.log($themeBtn.textContent)
        //Si el boton del tema es dark mode, cambialo a light mode
        if(e.target.matches(btn)){
            if($themeBtn.textContent === darkMode){
                $selectors.forEach(element=>{
                    element.classList.add(classDark)
                })
            $themeBtn.textContent = lightMode
            }else{
                $selectors.forEach(element=>{
                    element.classList.remove(classDark)
                })
            $themeBtn.textContent = darkMode
            }
        }
    })
}