var color = 'White';
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background('white');
  text(mouseX + "," + mouseY,10,10);
  fill('black')
  rect(165,220,20,1000);
  fill('grey');
  rect(149,94,50,130);
  fill('white')
  if (mouseX < 1 * windowWidth /3) {
  fill('white');
  ellipse(175,120,30,30);
  ellipse(175,160,30,30);
  fill('green');
  ellipse(175,200,30,30);
   } else if (mouseX < 2 * windowWidth /3) {
  fill('white');
  ellipse(175,120,30,30);
  fill('yellow')
  ellipse(175,160,30,30);
  fill('white');
  ellipse(175,200,30,30);
  } else if (mouseX < windowWidth ) {
  fill('red');
  ellipse(175,120,30,30);
  fill('white');
  ellipse(175,160,30,30);
  ellipse(175,200,30,30);
}
  
}