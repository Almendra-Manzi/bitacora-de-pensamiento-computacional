let posx = 400;
let posy = 300;

let sentidox = 1;
let sentidoy = 1;

let diametro = 200;

function setup() {
  createCanvas(800, 600);
  
frameRate();
}

function draw() {
  background(250,0,0);

posx = posx + 4 * sentidox;
posy = posy + 2 * sentidoy;
  
if (posx > width - diametro/2){
  sentidox = -1;
  frameRate(30);
}
  
if (posx < 0 + diametro / 2){
  sentidox = 1;
  frameRate(40);
}
  
if (posy > height - diametro/2) {
  sentidoy = -1;
  frameRate(20);
 }
  
if (posy < 0 + diametro / 2){
  sentidoy = 1;
  frameRate(60);
}
  
push();

translate(posx, posy);
  
noStroke();
  fill(250,0,0);
  circle(0,0,diametro);
  
  push();
  translate(-200,-220);
  noStroke();
  fill(240,200,0);
  circle(200,200,150);
  fill(250,0,0);
  circle(185,195,125);
  fill(250,0,0)
  square(100,215,50)
  stroke(240,200,0);
  strokeWeight(10);
  line(155,255,115,300);
  
  stroke(240,200,0);
  strokeWeight(20);
  line(140,270,115,300);
  
  stroke(240,200,0);
  strokeWeight(20);
  line(180,200,290,295);
  
  angleMode(DEGREES);
  rotate(-50);
  noStroke();
  fill(240,200,0);
  rect(-75, 230, 80, 32);
  
  rotate(50)
  fill(250,0,0);
  rect(160, 140, 50, 25)
  
  pop();
pop();
}
