const Store = require('electron-store');
const store = new Store();
let themes = {1:['rgb(255,255,255)','black', 'Light', '#000000'], 2:['rgb(13,17,23)','white', 'Dark', '#ffffff'], 3:['rgb(255,255,136)','black', 'Yellow', '#000000']}
var r = document.querySelector(':root');
r.style.setProperty('--background-color', themes[store.get('theme')][0]);
r.style.setProperty('--font-color', themes[store.get('theme')][1]);