const d = document,w = window;
export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener('scroll',e=>{
        //Para detectar que distancia se ha movido verticalmente
        //lo puedo hacer desde el objeto window o desde la etiqueta HTML
        // console.log(w.scrollY.valueOf())
        let scrollTop = w.scrollY.valueOf() || d.documentElement.scrollTop;
        if(scrollTop >= 600){
            $scrollBtn.classList.remove('hidden')
        }else{
            $scrollBtn.classList.add('hidden')
        }

    })
    d.addEventListener('click',e=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: 'smooth',
                top:0,
                
            })
        }
    })
}