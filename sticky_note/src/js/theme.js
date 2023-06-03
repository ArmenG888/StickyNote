var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
if (sPage == "index.html"){
    document.getElementById("top-nav").style.fill = themes[store.get('theme')][1];
}
