var x = 1;
var y = 1;
var xposition = 1;
var yposition = 1;

function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  x = x + 1 * xposition;
	y = y + random(10) * yposition;
	
	background(random(255));
line(windowWidth/2, 0, windowWidth/2, windowHeight);
	ellipse(x,y,50,50);
if (mouseX > windowWidth/2){
//fill(12,250,240);
fill(random(255),random(255));
}	
	else {
	fill(198,55,250);
	//fill(random(255),random(255),random(255));
	}

	if(x >= windowWidth || x <= 0 ){
	xposition = xposition * -1;
	}
	
	if(y >= windowHeight || y <= 0){
	yposition = yposition * -1;
	}
	
}