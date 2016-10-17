var strokeColor = 'red';
var easer = 'white'

function setup() {
  createCanvas(400,400);
}

function draw() {
  if (mouseIsPressed); {
    strokeWeight(20);
  stroke(strokeColor);
  line(pmouseX,pmouseY,mouseX,mouseY);
}
}

function keyTyped() {
  if (key === 'b') {
  strokeColor = '#CC0BE8';
  } else if (key === 'r') {
  strokeColor = '#FF1E0C';
} else if (key === 'e') {
  strokeColor = easer
  weight = 20 
    

}
}
