let img;

function preload(){
  img = loadImage ('assets/Balloon.png');
}
function setup() {//runs once
createCanvas (windowWidth, windowWidth);//creates a canvas 720 by 720 pixels



}

function draw() {//runs in a loop
  fill ('lavender');//Shape with RGB color
  strokeWeight (1);//assigns stroke weight
var num = 6;
var sideLen = windowWidth/num;


translate (-150,-150);

for (var y = 0; y < 2 * windowWidth; y = y + sideLen) {
for (var x = 0; x < 2 * windowWidth; x = x + sideLen) {
  image (img, x, y, windowWidth/num, windowWidth/num);
quad (x,y,
      x + sideLen, y,
      x + sideLen,y + sideLen,
      x,y + sideLen);

}
}
}
function windowResized (){ // allow window refresh w window resizing
    resizeCanvas (windowWidth, windowHeight);

}
