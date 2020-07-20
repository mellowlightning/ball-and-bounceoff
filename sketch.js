var ball1, ball2;
var paddle1,paddle2
function setup() {
  createCanvas(1200,800);
  ball1 = createSprite(100, 400, 50, 80);
  ball1.shapeColor = "green";
  ball2 = createSprite(800, 400,80,30);
  ball2.shapeColor = "green";
  
  ball2.velocityX = -5;
  ball1.velocityX = 5;

  paddle1 = createSprite(600,750,50,10)
  paddle2 = createSprite(600,50,50,10)

  paddle2.velocityY = 5
  paddle2.shapeColor = "red";
  paddle1.velocityY = -5 
  paddle1.shapeColor = "red";


}

function draw() {
  background(0,0,0);  
if(bounceOff(ball1,ball2)){
  ball2.shapeColor = "blue";
  ball1.shapeColor = "blue";
  
}
else{
  ball2.shapeColor = "green";
  ball1.shapeColor = "green";

}
if(bounceOff(paddle1,paddle2)){
  paddle2.shapeColor = "blue";
  paddle1.shapeColor = "blue";
  
}
else{
  paddle2.shapeColor = "red";
  paddle1.shapeColor = "red";

}
  drawSprites();
}
function bounceOff(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
  return true;
}

else if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
  return true;
}
else{
return false;

}
}