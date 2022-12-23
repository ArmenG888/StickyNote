function draw(){
	document.getElementById('note').style.display = "none";
}
function write(){
	document.getElementById('note').style.display = "block";
}
function open_nav(){
	document.getElementById('draw').style.opacity = 1;
	document.getElementById('draw').style.transition = "opacity 1s "; 
	document.getElementById('text').style.opacity = 1;
	document.getElementById('text').style.transition = "opacity 1s"; 
	document.getElementById('right').src = "icons/left.png";
	document.getElementById('right').setAttribute('onclick','close_nav()')
}
function close_nav(){
	document.getElementById('draw').style.opacity = 0;
	document.getElementById('draw').style.transition = "opacity 1s "; 
	document.getElementById('text').style.opacity = 0;
	document.getElementById('text').style.transition = "opacity 1s"; 
	document.getElementById('right').src = "icons/right.png";
	document.getElementById('right').setAttribute('onclick','open_nav()')
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
		context.lineTo(e.offsetX,e.offsetY);
		context.stroke();
		lastEvent = e;		
	}
});
canvas.addEventListener("mouseup", function(){
	isMouseDown = false;
});


