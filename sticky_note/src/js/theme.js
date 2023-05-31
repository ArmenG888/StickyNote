const Store = require('electron-store');
const store = new Store();

let themes = {1:['rgb(255,255,255)','black'], 2:['rgb(13,17,23)','white'], 3:['rgb(255,255,136)','black']}
document.body.style.backgroundColor = themes[store.get('theme')][0];
document.body.style.color =  themes[store.get('theme')][1];
document.getElementById("theme").style.color = themes[store.get('theme')][1];
document.getElementById("theme").style.backgroundColor = themes[store.get('theme')][0];
document.getElementById("background_image").style.color = themes[store.get('theme')][1];
document.getElementById("background_image").style.backgroundColor = themes[store.get('theme')][0];