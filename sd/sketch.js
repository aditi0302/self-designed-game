var introImg, playerImg, scoldedImg, scoldingImg;
var boy1, boy2, boy3, mother;
var h1Img, h2Img, h3Img, h4Img, h5Img, h6Img, h7Img, u1Img, u2Img, u3Img, u4Img, u5Img, u6Img;
var h1, h2, h3, h4, h5, h6, h7, u1, u2, u3, u4, u5 , u6;
var healthyGroup, unhealthyGroup;
var uhoh, great, ohno,good;
var un1, un2, he1, he2;
var counter = 0 ;
var PLAY, END;
var GameState = PLAY;



function preload(){

  introImg = loadImage("images/sd2.0.png")
  playerImg = loadImage("images/sd2.1.png")
  scoldedImg = loadImage("images/sd2.3.png")
  scoldingImg = loadImage("images/mother.angry.png")
 
  h1Img = loadImage("images/broccoli.png")
  h2Img = loadImage("images/carrot.png")
  h3Img = loadImage("images/cheese.png")
  h4Img = loadImage("images/grapes.png")
  h5Img = loadImage("images/milk.png")
  h6Img = loadImage("images/oranges.png")
  h7Img = loadImage("images/salad.png")

  u1Img = loadImage("images/burger.png")
  u2Img = loadImage("images/cake.png")
  u3Img = loadImage("images/doughnut.png")
  u4Img = loadImage("images/frenchfries.png")
  u5Img = loadImage("images/pzza.png")
  u6Img = loadImage("images/toffee.png")

  uhoh = loadImage("images/uhoh.png")
  ohno = loadImage("images/oh_no.png")


  great = loadImage("images/great.png")
  good = loadImage("images/good.png")

}


function setup() {
  createCanvas(1500,800);
  //createSprite(400, 200, 50, 50);
  
   
boy1= createSprite(400,100,50,50)
boy1.addImage(introImg)
boy1.visible = false;

boy2= createSprite(400,300,50,50)
boy2.addImage(playerImg)
//boy2.visible = false;

boy3= createSprite(200,100,50,50)
boy3.addImage(scoldedImg)
boy3.visible = false;

mother= createSprite(600,200,50,50)
mother.addImage(scoldingImg)
mother.visible = false;

he1 = createSprite(700,450,50,50)
he1.addImage(great)
he1.visible = false;

he2 = createSprite(700,450,50,50)
he2.addImage(good)
he2.visible = false;

un2 = createSprite(700,450,50,50)
un2.addImage(uhoh)
un2.visible = false;

un1 = createSprite(700,450,50,50)
un1.addImage(ohno)
un1.visible = false;





healthyGroup= new Group();
unhealthyGroup = new Group();



}

function draw() {
   

  if (GameState === PLAY)
  {
    background("black");
    boy2.x = World.mouseX
    boy2.y = World.mouseY
    healthy();
    unhealthy();
    if (healthyGroup.isTouching(boy2))
  {
    healthyGroup.destroyEach();
    //he2.visible = true;
   // he2.lifetime = 20;
  }

  if (unhealthyGroup.isTouching(boy2))
{
  unhealthyGroup.destroyEach();
  counter= counter+1;
  console.log(counter)
  GameState===END
  //un2.visible = true;
 // un2.lifetime = 20;
}


  }



 

else if (GameState === END)
 {
   counter=0
   background("blue");
   mother.visible = true;
 }






drawSprites();
}

function healthy()
{
  
  if (frameCount%150===0)
  {
    var position=Math.round(random(1,2));
    healthy1=createSprite(Math.round(random(300,1100)),100,20,20);
    healthy1.scale=2
    //if(position==1)
    //{
    //healthy1.x=300;
    //fruit.velocityX-(7+(score/4))
   // }
    //else
    //{
    //if (position==2)
   // {
   // healthy1.x=0;
    //healthy1.velocitX=(7+(score/4))
   // }
   // }
    fall=Math.round(random(1,4));
    if (fall==1)
    {
      healthy1.addImage(h1Img);
    }
    else if(fall==2)
    {
      healthy1.addImage(h2Img);
    }
    else if (fall==3)
    {
      healthy1.addImage(h3Img);
    }
    else if (fall==4)
    {
      healthy1.addImage(h4Img);
    }
    else if (fall==5)
    {
      healthy1.addImage(h5Img);
    }

    else if (fall==6)
    {
      healthy1.addImage(h6Img);
    }

    else 
    {
      healthy1.addImage(h7Img);
    }
    
    healthy1.y= Math.round(random(50,400));
    healthy1.velocityY=8;
    healthy1.setLifetime=100;
    healthyGroup.add(healthy1)
  }
  
}

function unhealthy()
{
  
  if (frameCount%150===0)
  {
    var position=Math.round(random(1,2));
    unhealthy1=createSprite(Math.round(random(300,1100)),100,20,20);
    unhealthy1.scale=2
    //if(position==1)
    //{
    //healthy1.x=300;
    //fruit.velocityX-(7+(score/4))
   // }
    //else
    //{
    //if (position==2)
   // {
   // healthy1.x=0;
    //healthy1.velocitX=(7+(score/4))
   // }
   // }
    fall=Math.round(random(1,4));
    if (fall==1)
    {
      unhealthy1.addImage(u1Img);
    }
    else if(fall==2)
    {
      unhealthy1.addImage(u2Img);
    }
    else if (fall==3)
    {
      unhealthy1.addImage(u3Img);
    }
    else if (fall==4)
    {
      unhealthy1.addImage(u4Img);
    }
    else if (fall==5)
    {
      unhealthy1.addImage(u5Img);
    }

    else if (fall==6)
    {
      unhealthy1.addImage(u6Img);
    }

    else 
    {
      unhealthy1.addImage(u7Img);
    }
    
    unhealthy1.y= Math.round(random(50,400));
    unhealthy1.velocityY=8;
    unhealthy1.setLifetime=100;
    unhealthyGroup.add(unhealthy1)
  }
  
}