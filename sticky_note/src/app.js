function switch_draw_write(){
	console.log(document.getElementById('switch').innerText);
	if(document.getElementById('switch').innerText == "Draw"){
		document.getElementById('switch').innerHTML = "Write";
		document.getElementById('note').style.display = "none";
	}
	else{
		document.getElementById('switch').innerHTML = "Draw";
		document.getElementById('note').style.display = "block";
	}
	
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


