var a;
var b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(500,200,50,50);
  a.shapeColor="green";
  b.shapeColor="green";
  a.debug=true;
  b.debug=true;
}

function draw() {
  background("black");  

  a.x=mouseX;
  a.y=mouseY;
  drawSprites();
  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2){

   a.shapeColor="red";
   b.shapeColor="Yellow";   
  }
else{

  a.shapeColor="green";
  b.shapeColor="green";

}
}
