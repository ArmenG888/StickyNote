



function save(){
    const Store = require('electron-store');
    const store = new Store();

    theme = document.getElementById('theme').value;
    store.set('theme', theme);
    console.log(store.get('theme'))
}
function themeChange(){
    if (document.getElementById("flexSwitchCheckChecked").checked == true){
        let themes = {1:['rgb(255,255,255)','black'], 2:['rgb(13,17,23)','white'], 3:['rgb(255,255,136)','black']}
        document.body.style.backgroundColor = themes[document.getElementById('theme').value][0];
        document.body.style.color =  themes[document.getElementById('theme').value][1];
        document.getElementById("theme").style.color = themes[document.getElementById('theme').value][1];
        document.getElementById("theme").style.backgroundColor = themes[document.getElementById('theme').value][0];
        document.getElementById("background_image").style.color = themes[document.getElementById('theme').value][1];
        document.getElementById("background_image").style.backgroundColor = themes[document.getElementById('theme').value][0];
    }
}