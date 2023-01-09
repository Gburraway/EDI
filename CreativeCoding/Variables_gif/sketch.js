function setup() {//runs once
createCanvas (windowWidth, windowWidth);//creates a canvas 720 by 720 pixels

}

function draw() {//runs in a loop
  fill ('lavender');//Shape with RGB color
  strokeWeight (1);//assigns stroke weight
var num = 6;
var sideLen = windowWidth/num;
for (var y = 0; y < windowWidth; y = y + sideLen) {
for (var x = 0; x < windowWidth; x = x + sideLen) {
quad (x,y,
      x + sideLen, y,
      x + sideLen,y + sideLen,
      x,y + sideLen);

}
}
}
