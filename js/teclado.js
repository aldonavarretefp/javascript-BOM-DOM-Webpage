const d = document

export function shorcuts(e){
    // console.log(e.type)
    // console.log(e);
    // console.log(e.keyCode);
    // console.log(e.key)
    // console.log(e.cntrlKey)

    /* Vamos a decir que si
    el usuario presiona alt+i mando una alerta */
    if((e.key === 'a' || e.key === 'A') && e.altKey === true){
        window.alert('Hola como estas')
    }
    if((e.key === 'a' || e.key === 'A') && e.ctrlKey === true){
        let respuesta = window.prompt('Escribe algo')
        let $div = d.createElement('h3')
        let $seccion = d.getElementById('seccion2')
        $div.innerText = respuesta
        console.log($div)
        $seccion.appendChild($div)
    }
    

}