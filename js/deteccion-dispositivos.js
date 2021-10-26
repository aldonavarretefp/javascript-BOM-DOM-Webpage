const d = document,n = navigator, ua = n.userAgent;
export default function userDeviceInfo(id){

    const $id       = d.getElementById(id), 
          isMobile  = {
              android: () => ua.match(/Android/i),
              ios: () => ua.match(/iPhone|iPad|iPod/i),
              windows: () => ua.match(/Windows Phone/i),
              any: function(){
                  return this.android() || this.ios() || this.windows();
              }
          },
          isDesktop = {
                mac: () => ua.match(/Mac/i),
                windows: () => ua.match(/Windows/i),
                linux: () => ua.match(/Linux/i),
                any: function(){
                    return this.mac() || this.windows() || this.linux();
                }
          },
          isBrowser = {
                chrome: () => ua.match(/Chrome/i),
                firefox: () => ua.match(/Firefox/i),
                safari: () => ua.match(/Safari/i),
                opera: () => ua.match(/Opera/i),
                ie: () => ua.match(/MSIE/i),
                any: function(){
                    return this.chrome() || this.firefox() || this.safari() || this.opera() || this.ie();
                }
            };
            console.log($id);
    if(isMobile.any()){
        $id.innerText += 'Mobile';
    }
    if(isDesktop.any()){
        $id.innerText += ' Desktop';
    }
    if(isBrowser.any()){
        $id.innerText += ' Browser';
    }
    console.log(isMobile.any());
    $id.innerHTML += `
        <ul>
            <li><b>User Agent:</b> ${ua}</li>
            <li><b>Plafaforma:</b> ${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
            <li><b>Browser:</b> ${isBrowser.any() ? isBrowser.any() : 'Not detected'}</li>
    `;

    if(isBrowser.chrome()){
        $id.innerHTML += `
            <p>Chrome: ${ua.match(/Chrome\/(\d+)/i)[1]}
            Contenido que solo se puede ver en Chrome</p>
        `;
    }
    
    
}