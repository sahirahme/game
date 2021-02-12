var movingrect
var fixedrect




function setup() {
  createCanvas(800,800);
  movingrect=createSprite(400,400,50,50)
  movingrect.shapeColor="yellow"
  fixedrect=createSprite(200,200,50,50)
  fixedrect.shapeColor="red"
  movingrect.debug=true
  fixedrect.debug=true
}

function draw() {
  background("blue"); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.width/2+fixedrect.width/2&&
    fixedrect.y-movingrect.y<movingrect.width/2+fixedrect.width/2){
      movingrect.shapeColor="green"
      fixedrect.shapeColor="green"
    }else{
      movingrect.shapeColor="yellow"
      fixedrect.shapeColor="red"
    }
    
    
  drawSprites();
}