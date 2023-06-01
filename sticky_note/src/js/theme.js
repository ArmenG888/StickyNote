const Store = require('electron-store');
const store = new Store();
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);


let themes = {1:['rgb(255,255,255)','black'], 2:['rgb(13,17,23)','white'], 3:['rgb(255,255,136)','black']}
document.body.style.backgroundColor = themes[store.get('theme')][0];
document.body.style.color =  themes[store.get('theme')][1];
if (sPage == "settings.html")
{
    document.getElementById("close").style.fill = themes[store.get('theme')][1];
    // document.getElementById("theme").style.color = themes[store.get('theme')][1];
    // document.getElementById("theme").style.backgroundColor = themes[store.get('theme')][0];
    // document.getElementById("background_image").style.color = themes[store.get('theme')][1];
    // document.getElementById("background_image").style.backgroundColor = themes[store.get('theme')][0];

}
else if (sPage == "index.html"){
    document.getElementById("top-nav").style.fill = themes[store.get('theme')][1];
}
