var WIDHT = 600;
var HEIGTH = 600;
var x = 0;
var y = 0;
var tamano = 40;

function setup() {
	createCanvas(WIDHT, HEIGTH);
	background(100);
}

function draw() {
	
	if(random(10) > 5)
		line(x, y, x + tamano, y + tamano);
	else
		line(x + tamano, y, x, y + tamano);
	
	x = x + tamano;
	
	if(x > WIDHT){
		y = y + tamano;
		x = 0;
	}
}