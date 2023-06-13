const { ipcRenderer } = require('electron');

document.getElementById("color_picker").value = themes[store.get('theme')][3];
var line_width = 1;
var canvas =  document.querySelector("canvas");
var context = canvas.getContext("2d");
var lastEvent;
var isMouseDown = false;

function draw(){
	document.getElementById('note').style.display = "none";
	color = document.getElementById("color_picker").value;
	line_width = 5;
}
function text(){
	document.getElementById('note').style.display = "block";
}
function erase(){
	color = themes[store.get('theme')][0];
	line_width = 50;
}
function open_nav(){
	var icons = document.getElementsByClassName('icons');
	for (var i = 0; i < icons.length; ++i) {
		var item = icons[i];  
		item.style.visibility = "visible";
		item.style.opacity = 1;
		item.style.transition = "opacity 0.5s "; 

		
	}
	document.getElementById('color-button').style.opacity = 1;
	document.getElementById('color-button').style.transition = "opacity 0.5s "; 
	document.getElementById('right').style.transform = "rotateY(180deg)"
	document.getElementById('right').setAttribute('onclick','close_nav()')
}
function close_nav(){
	var icons = document.getElementsByClassName('icons');
	document.getElementById('color-button').style.opacity = 0;
	document.getElementById('color-button').style.transition = "opacity 0.5s "; 
	for (var i = 0; i < icons.length; ++i) {
		var item = icons[i];  
		item.style.opacity = 0;
		item.style.transition = "opacity 0.5s "; 
		item.style.visibility = "hidden";
	}
	
	document.getElementById('right').style.transform = "rotateY(0deg)"
	document.getElementById('right').setAttribute('onclick','open_nav()')
	
}
function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

window.addEventListener("load", startup, false);
function startup() {
	let colorWell = document.querySelector("#color_picker");
	colorWell.value = themes[store.get('theme')][3];
	colorWell.addEventListener("input", updateFirst, false);
	colorWell.addEventListener("change", updateAll, false);
	colorWell.select();
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
window.onresize = function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};
function updateFirst(event) {
	document.getElementById("color-button").style = "background-color:" + event.target.value;
	document.getElementById("color-button").style.opacity = 1;
	color = componentToHex(event.target.value);
}

function updateAll(event) {
	document.getElementById("color-button").style = "background-color:" + event.target.value;
	document.getElementById("color-button").style.opacity = 1;
	color = componentToHex(event.target.value);
}


canvas.addEventListener("mousedown", function(e){
	lastEvent = e;
	isMouseDown = true;
});
canvas.addEventListener("mousemove", function(e){
	if(isMouseDown) {
		context.beginPath();
		context.moveTo(lastEvent.offsetX,lastEvent.offsetY);	
		context.lineWidth = line_width
		context.strokeStyle  = color;
		context.lineTo(e.offsetX,e.offsetY);
		context.stroke();
		lastEvent = e;		
	}
});
canvas.addEventListener("mouseup", function(){
	isMouseDown = false;
});



document.addEventListener('DOMContentLoaded', () => {
  const quitButton = document.getElementById('close');

  quitButton.addEventListener('click', () => {
    ipcRenderer.send('quit-app');
  });
});
download = document.getElementById("download")
download.addEventListener('click', function (e) {
	const link = document.createElement('a');
	link.download = 'download.png';
	link.href = canvas.toDataURL();
	link.click();
	link.delete;
});

draw();
