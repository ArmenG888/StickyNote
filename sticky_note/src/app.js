function draw(){
	if(document.getElementById('note').style.display == "block")
	{
		document.getElementById('note').style.display = "none";
	}
	
}
function write(){
	console.log(document.getElementById('note').style.display);
	if(document.getElementById('note').style.display == "none")
	{
		document.getElementById('note').style.display = "block";
	}
	
}

function open_nav(){
	document.getElementById('draw').style.opacity = 1;
	document.getElementById('draw').style.transition = "opacity 0.5s "; 
	document.getElementById('text').style.opacity = 1;
	document.getElementById('text').style.transition = "opacity 0.5s"; 
	document.getElementById('palette').style.opacity = 1;
	document.getElementById('palette').style.transition = "opacity 0.5s"; 
	document.getElementById('color-button').style.opacity = 1;
	document.getElementById('color-button').style.transition = "opacity 0.5s"; 
	
	document.getElementById('right').src = "icons/left.png";
	document.getElementById('right').setAttribute('onclick','close_nav()')
}
function close_nav(){
	document.getElementById('draw').style.opacity = 0;
	document.getElementById('draw').style.transition = "opacity 0.5s "; 
	document.getElementById('text').style.opacity = 0;
	document.getElementById('text').style.transition = "opacity 0.5s"; 
	document.getElementById('palette').style.opacity = 0;
	document.getElementById('palette').style.transition = "opacity 0.5s"; 
	document.getElementById('color-button').style.opacity = 0;
	document.getElementById('color-button').style.transition = "opacity 0.5s"; 
	document.getElementById('right').src = "icons/right.png";
	document.getElementById('right').setAttribute('onclick','open_nav()')
}
let colorWell;
const defaultColor = "#000000";
var color = "#000000"

window.addEventListener("load", startup, false);
function startup() {
	colorWell = document.querySelector("#color_picker");
	colorWell.value = defaultColor;
	colorWell.addEventListener("input", updateFirst, false);
	colorWell.addEventListener("change", updateAll, false);
	colorWell.select();
}
function updateFirst(event) {
	document.getElementById("color-button").style = "background-color:" + event.target.value;
	document.getElementById("color-button").style.opacity = 1;
	color = event.target.value;
}

function updateAll(event) {
	document.getElementById("color-button").style = "background-color:" + event.target.value;
	document.getElementById("color-button").style.opacity = 1;
	color = console.log(event.target.value);
}

var canvas =  document.querySelector("canvas");
var context = canvas.getContext("2d");

var lastEvent;
var isMouseDown = false;
canvas.addEventListener("mousedown", function(e){
	lastEvent = e;
	isMouseDown = true;
});
canvas.addEventListener("mousemove", function(e){
	if(isMouseDown) {
		context.beginPath();
		context.moveTo(lastEvent.offsetX,lastEvent.offsetY);	
		context.fillStyle  = color;
		context.lineTo(e.offsetX,e.offsetY);
		context.stroke();
		lastEvent = e;		
	}
});
canvas.addEventListener("mouseup", function(){
	isMouseDown = false;
});


