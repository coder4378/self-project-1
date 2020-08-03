function bounceOff(object1,object2) {
    if (object1.x-object2.x<object1.width/2+object2.width/2&&object2.x-object1.x<object1.width/2+object2.width)  {
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
        }
      if(object1.y-object2.y<object1.height/2+object2.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
      }
}
function edgeBounce (bouncer1,bouncer2){
    if (bouncer1.x>1000||bouncer1.x<0){
      bouncer1.velocityX=bouncer1.velocityX*(-1);
    }
    if (bouncer2.x>1000||bouncer2.x<0){
      bouncer2.velocityX=bouncer2.velocityX*(-1);
    }
  }
  function isTouching(object1,object2){
    if (object1.x-object2.x<object1.width/2+object2.width/2&&object2.x-object1.x<object1.width/2+object2.width
        &&object1.y-object2.y<object1.height/2+object2.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){
             return true;
             
   
  }
  else
   return false;
}
function bounce(object1,object2) {
  if (object1.x-object2.x<object1.width/2+object2.width/2&&object2.x-object1.x<object1.width/2+object2.width)  {
    object1.velocityX=object1.velocityX*(-1);

      }
    if(object1.y-object2.y<object1.height/2+object2.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){
      object1.velocityY=object1.velocityY*(-1);

    }
}


