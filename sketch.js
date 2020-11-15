var fixedrect,movingrect
function setup() {
  createCanvas(400,400);
fixedrect=createSprite(200,200,50,50)
fixedrect.shapeColor="green"
movingrect=createSprite(100,100,50,50)
movingrect.shapeColor="green"
}

function draw() {
  background("black")  
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
    movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
    fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2&&
    movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2){
      movingrect.shapeColor="red"
      fixedrect.shapeColor="red"
    }
  else{
    movingrect.shapeColor="green"
    fixedrect.shapeColor="green"
  }
    drawSprites();
}