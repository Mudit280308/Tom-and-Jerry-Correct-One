var bgImg,bg;
var cat,mouse;
var catImage,catAnimation,catEndAnimation,mouseImage,mouseAnimation,mouseEndAnimation;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImage = loadImage("images/cat1.png");
    mouseImage = loadImage("images/mouse1.png");
    catAnimation = loadAnimation("images/cat2.png","images/cat3.png");
    mouseAnimation = loadAnimation("images/mouse2.png","images/mouse3.png");
    catEndAnimation = loadAnimation("images/cat4.png");
    mouseEndAnimation = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(800,500);
    //create tom and jerry sprites here

    bg = createSprite(400,450,10,10);
    bg.addImage("bgImage",bgImg);
    bg.scale = 1.2;

    cat = createSprite(700,400,10,10);
    cat.addImage("catI",catImage);
    cat.scale = 0.1;

    mouse = createSprite(70,400,10,10);
    mouse.addImage("mouseI",mouseImage);
    mouse.scale = 0.1;

   

}

function draw() {

    background("255");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouseE",mouseEndImage);
        mouse.changeAnimation("mouseE");

        cat.addAnimation("catE",catEndImage);
        cat.changeAnimation("catE");

        cat.setVelocity(0,0);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseA",mouseAnimation)
      mouse.changeAnimation("mouseA");

      cat.addAnimation("catA",catAnimation);
      cat.changeAnimation("catA");

      cat.setVelocity(-4,0);

  }



}
