var player
var ob1,ob2,ob3,ob4,b3
var b1,b2,b3,b4
var en1,en2,en3
var end
function setup() {
createCanvas(innerWidth,innerHeight,)
player=createSprite(innerWidth/2,innerHeight/2,50,50)
player.shapeColor="magenta"
b1=createSprite(innerWidth/2,innerHeight/2+100,innerWidth*2,40)
b2=createSprite(innerWidth/2-600,innerHeight/2,40,innerHeight*2)
ob1=createSprite(innerWidth-750,innerHeight-780,900,40)
ob2=createSprite(innerWidth-250,innerHeight-620,500,300)
ob3=createSprite(innerWidth/2-200,innerHeight/2-60,770,40)
ob4=createSprite(innerWidth/2-400,innerHeight/2-600,40,350)
b3=createSprite(innerWidth/2,innerHeight-innerHeight-350,innerWidth*2,40)
b4=createSprite(innerWidth*2-750,innerHeight/2,40,innerHeight*2)
en1=createSprite(innerWidth/2-30,innerHeight/2-200,60,60)
en2=createSprite(innerWidth,innerHeight/2,60,60)
en3=createSprite(innerWidth+500,innerHeight/2-400,60,60)
end=createSprite(innerWidth/2-200,innerHeight/2-600,70,70)
b1.shapeColor="orange"
b2.shapeColor="orange"
b3.shapeColor="orange"
b4.shapeColor="orange"
ob1.shapeColor="orange"
ob2.shapeColor="orange"
ob3.shapeColor="orange"
ob4.shapeColor="orange"
en1.shapeColor="red"
en2.shapeColor="red"
en3.shapeColor="red"
end.shapeColor="yellow"

}
function draw() {
background(255)
en1.rotation=en1.rotation+10
en2.rotation=en1.rotation+10
textSize(25)
fill("yellow")
text("Be safe from enemy and find yellow door to exit",innerWidth/2,50)
if(keyDown(RIGHT_ARROW)){
RightScrolling()
}
if(keyWentUp(RIGHT_ARROW)){
Xnull()
}
if(keyDown(LEFT_ARROW)){
LeftScrolling()
}
if(keyWentUp(LEFT_ARROW)){
Xnull()
}
if(keyDown(UP_ARROW)){
Upscrolling()
}
if(keyWentUp(UP_ARROW)){
Ynull()
}
if(keyDown(DOWN_ARROW)){
Downscrolling()
}
if(keyWentUp(DOWN_ARROW)){
Ynull()
}
wallCollision()
if(player.isTouching(en1)||player.isTouching(en2)||player.isTouching(en3)){
textSize(50)
fill("yellow")
text("Dont touch",innerWidth/2,innerHeight/2)
}
if(player.isTouching(end)){
textSize(100)
text("Yay! You win",innerWidth/2,innerHeight/2)
}
drawSprites() 
}
function RightScrolling() {
  ob1.velocityX=-5
  ob2.velocityX=-5 
  ob3.velocityX=-5
  b1.velocityX=-5
  b2.velocityX=-5
  ob4.velocityX=-5
  b3.velocityX=-5
  b4.velocityX=-5
  en1.velocityX=-5
  en2.velocityX=-5
  en3.velocityX=-5
  end.velocityX=-5
}
function LeftScrolling() {
  ob1.velocityX=5
  ob2.velocityX=5 
  ob3.velocityX=5 
  b1.velocityX=5 
  b2.velocityX=5
  ob4.velocityX=5 
  ob4.velocityX=5 
  b3.velocityX=5 
  b4.velocityX=5 
  en1.velocityX=5
  en2.velocityX=5
  en3.velocityX=5
  end.velocityX=5
}
function Upscrolling() {
  ob1.velocityY=5
  ob2.velocityY=5
  ob3.velocityY=5
  b1.velocityY=5
  b2.velocityY=5
  ob4.velocityY=5
  b3.velocityY=5
  b4.velocityY=5
  en1.velocityY=5
  en2.velocityY=5
  en3.velocityY=5
  end.velocityY=5
}
function Downscrolling() {
  ob1.velocityY=-5
  ob2.velocityY=-5
  ob3.velocityY=-5
  b1.velocityY=-5
  b2.velocityY=-5
  ob4.velocityY=-5
  b3.velocityY=-5
  b4.velocityY=-5
  en1.velocityY=-5
  en2.velocityY=-5
  en3.velocityY=-5
  end.velocityY=-5
}
function Xnull() {
  ob1.velocityX=0
  ob2.velocityX=0
  ob3.velocityX=0
  b1.velocityX=0
  b2.velocityX=0
  ob4.velocityX=0
  b3.velocityX=0
  b4.velocityX=0
  en1.velocityX=0
  en2.velocityX=0
  en3.velocityX=0
  end.velocityX=0
}
function Ynull() {
  ob1.velocityY=0
  ob2.velocityY=0
  ob3.velocityY=0
  b1.velocityY=0
  b2.velocityY=0
  ob4.velocityY=0
  b3.velocityY=0
  b4.velocityY=0
  en1.velocityY=0
  en2.velocityY=0
  en3.velocityY=0
  end.velocityY=0
}
function wallCollision() {
  player.collide(ob1)
  player.collide(ob2)
  player.collide(ob3)
  player.collide(b1)
  player.collide(b2)
  player.collide(b3)
  player.collide(b4)
  player.collide(ob4)
}
