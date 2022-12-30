function save(){
    let themes = {1:['rgb(255,255,255)','black'], 2:['rgb(13,17,23)','white'], 3:['rgb(255,255,136)','black']}
    document.body.style.backgroundColor = themes[document.getElementById('theme').value][0];
    document.body.style.color =  themes[document.getElementById('theme').value][1];
    
}