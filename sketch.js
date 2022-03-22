var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var coin, coin2, coin3;
var energydrinkGroups, bomb, bombblast;

var score;



function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  coinImg = loadImage("coin.png",);
  energyDrinkImg = loadImage("energyDrink.png");
  coin3Img = loadImage("coin3.png",);
  coin2Img = loadImage("coin2.png",);
  bombImg = loadImage("bomb.png");
  bombblastImg = loadImage("bombblast.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;
path.y = path.height/30;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.6;
boy.addAnimation("JakeRunning",boyImg);

//creating coins
coin = createSprite(100,150,30,30);
coin.addImage(coinImg);
coin.y = coin.height/2;
coin.scale = 0.5;
coin.velocityY = 5;

coin2 = createSprite(200,150,30,30);
coin2.addImage(coin2Img);
coin2.y = coin2.height/2;
coin2.scale = 0.5;
coin2.velocityY = 5;

coin3 = createSprite(300,150,30,30);
coin3.addImage(coin3Img);
coin3.y = coin3.height/2;
coin3.scale = 0.5;
coin3.velocityY = 5;

bomb1 = createSprite(100,-650,30,30);
bomb1.addImage(bombImg);
bomb1.scale = 0.10;
bomb1.velocityY = 5;

bomb2 = createSprite(200,-450,30,30);
bomb2.addImage(bombImg);
bomb2.scale = 0.10;
bomb2.velocityY = 5;

bomb3 = createSprite(300,-250,30,30);
bomb3.addImage(bombImg);
bomb3.scale = 0.10;
bomb3.velocityY = 5;

score = 0;






leftBoundary=createSprite(0,0,100,800);

 //leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 5;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  
  //code to reset the background

  if(path.y > 500 ){
    path.y = height/2;
  }

   //if boy is touching coin or bomb or energy drink so these are destroy
   if(boy.isTouching(bomb1)){
     bomb1.destroy();
  
   }

   if(boy.isTouching(bomb2)){
     bomb2.destroy();
   }

   if(boy.isTouching(bomb3)){
     bomb3.destroy();
   }

        
 reset();
  drawSprites();
}

function reset(){

  if(boy.isTouching(coin)){
    coin.x = 100;
    coin.y = -5;  
  }

  if(boy.isTouching(coin2)){
    coin2.x = 200;
    coin2.y = -15;  
  }

  if(boy.isTouching(coin3)){
    coin3.x = 300;
    coin3.y = -25;  
  }
  if(coin.y > 420){
    coin.x = 100;
    coin.y = -10;
  }

  if(coin2.y > 430){
    coin2.x = 200;
    coin2.y = -10;
  }

  if(coin3.y > 410){
    coin3.x = 300;
    coin3.y = -10;
  }

  if(coin3.y > 410){
    coin3.x = 300;
    coin3.y = -10;
  }

  if(bomb1.y > 410){
    bomb1.x = 100;
    bomb1.y = -900;
    bomb1.velocityY = 8;
  }
  if(bomb2.y > 410){
    bomb2.x = 200;
    bomb2.y = -1100;
    bomb2.velocityY = 8;
  }

  if(bomb3.y > 410){
    bomb3.x = 300;
    bomb3.y = -1100;
    bomb3.velocityY = 8;
  }


 }
 