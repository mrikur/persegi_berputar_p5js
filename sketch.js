function setup() {
  createCanvas(700, 700);
  background(255);
}
function draw() {
  background(255);
  push();
  translate(width/2, height/2);
  //matahari
  stroke('red');
  strokeWeight(4);
  fill(255);
  ellipse(0, 0, 500, 500);
  strokeWeight(3);
  stroke(0);
  rotate(millis()*0.001*radians(20) );
  fill('#ad2d17');
  rectMode(CENTER);
  rect(0,0,150, 150);
  //BUMI
  translate(250, 0);
  rotate(millis()*0.001*radians(120) );
  fill('#1ad2d9');
  rect(0,0,100, 100);
  //BULAN
  push();
  translate(100, 0);
  rotate(millis()*0.001*radians(120) );
  fill('#bc1ad9');
  rect(0,0,50, 50);
  pop();
  pop();
}