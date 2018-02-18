var x = 0;
var y = 0;
var tamano = 20;

function setup() {
	createCanvas(600, 600);
	background(100);
	noStroke();
	stroke(255);
}

function draw() {
	
	if(random(10) > 5)
		line(x, y, x + tamano, y + tamano);
	else
		line(x + tamano, y, x, y + tamano);
	
	x = x + tamano;
	
	if(x > width){
		y = y + tamano;
		x = 0;
	}
}