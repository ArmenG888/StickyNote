const { ipcRenderer } = require('electron');


function save(){
    const Store = require('electron-store');
    const store = new Store();

    store.set('theme', document.getElementById('theme').value);
    let themes = {1:['rgb(255,255,255)','black', 'Light'], 2:['rgb(13,17,23)','white', 'Dark'], 3:['rgb(255,255,136)','black', 'Yellow']}
    var r = document.querySelector(':root');
    r.style.setProperty('--background-color', themes[store.get('theme')][0]);
    r.style.setProperty('--font-color', themes[store.get('theme')][1]);
    if(document.getElementById("background_image").files[0]){
        store.set("bg_image", document.getElementById("background_image").files[0].path)
    }
    if(store.get("stay-on-top") != document.getElementById("stay-on-top").checked){
        store.set('stay-on-top', document.getElementById("stay-on-top").checked);
        ipcRenderer.send('stay-on-top');
    }
}
