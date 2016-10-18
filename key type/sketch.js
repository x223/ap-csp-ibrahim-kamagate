var strokeColor = 'red';
var easer = 'white';

function setup() {
  createCanvas(400,400);
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(20);
    stroke(strokeColor);
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}

function keyTyped() {
  if (key === 'b') {
  strokeColor = '#0411FF';
  } else if (key === 'r') {
  strokeColor = '#FF1E0C';
} else if (key === 'e') {
  strokeColor = 'white';
  weight = 20 
} else if (key === 'g') {
 strokeColor = '#E86A0C';
} else if (key === 'p') {
 strokeColor = '#B00CE8';

}
}
