const Store = require('electron-store');
const store = new Store();
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);


let themes = {1:['rgb(255,255,255)','black', 'Light'], 2:['rgb(13,17,23)','white', 'Dark'], 3:['rgb(255,255,136)','black', 'Yellow']}
document.body.style.backgroundColor = themes[store.get('theme')][0];
document.body.style.color =  themes[store.get('theme')][1];

if (sPage == "index.html"){
    document.getElementById("top-nav").style.fill = themes[store.get('theme')][1];
}
