const d = document

export function shorcuts(e){
    // console.log(e.type)
    // console.log(e);
    // console.log(e.keyCode);
    // console.log(e.key)
    // console.log(e.cntrlKey)

    /* Vamos a decir que si
    el usuario presiona alt+i mando una alerta */
    if(e.key === 'a' && e.altKey === true){
        window.alert('Hola como estas')
    }

}