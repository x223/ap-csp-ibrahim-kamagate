var color = 'White';
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background('white');
  text(mouseX + "," + mouseY,10,10);
  fill('grey');
  rect(149,94,50,130);
  fill('white')
  //ellipse();
  //ellipse();
  //ellipse();
  if(mouseX < windowHeight) {
  ellipse(175,150,30,30);
  ellipse();
  ellipse();
  }
}