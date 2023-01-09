function setup() {//runs once
createCanvas (720, 720);//creates a canvas 720 by 720 pixels
background (255, 255, 0);
}

function draw() {//runs in a loop
  fill (255, 0, 0);//Shape with RGB color
  strokeWeight (5);//assigns stroke weight
  translate (60, 60);//creates a new origen point at 60, 60
for (var y = 0; y < 600; y = y + 300)
for (var x = 0; x < 600; x = x + 300) {
quad (x,y,
      x + 300, y,
      x + 300,y + 300,
      x,y + 300);

}



}
