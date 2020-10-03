

function preload() {
  
    spaceshipimg1 = loadImage('spaceship1.png');
    spaceshipimg2 = loadImage('spaceship2.png');
    spaceshipimg3 = loadImage('spaceship3.png');
    spaceshipimg4 = loadImage('spaceship4.png');

    playerspaceshipimg = loadImage('player.jpg');

    rightbuttonimg = loadImage('buttonright.jpg');
    leftbuttonimg = loadImage('buttonleft.jpg');

    asteroidsimg = loadImage('asteroid.png');
    rock_img = loadImage('spacerock.png')
    
    blastimg = loadImage('blast.png');

    backgroundimg = loadImage('spacebackground.png');

}

function setup() {
  createCanvas(windowWidth,windowHeight);



  player = createSprite(width-100,height-100,50,50);
  player.addImage(playerspaceshipimg);
  player.scale = 0.2;

  computerplayer = createSprite(width-1400,height-100,50,50);
  computerplayer.addImage(playerspaceshipimg);
  computerplayer.scale = 0.2;
}

function draw() {
  background(backgroundimg);  

  if(keyDown(RIGHT_ARROW)) {
     player.x = player.x+5
  }

  if(keyDown(LEFT_ARROW)) {
    player.x = player.x - 5
  }

spawnSpaceShip()

  drawSprites();
}


 function spawnSpaceShip() {
    if(frameCount % 50 === 0) {
      var enemy = createSprite(600,height-height,10,40);
          enemy.x = Math.round(random(width/0.5,3.3))

      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: enemy.addImage(spaceshipimg1);
                enemy.scale = 0.3
                break;
        case 2: enemy.addImage(spaceshipimg2);
                enemy.scale = 0.150
                break;
        case 3: enemy.addImage(spaceshipimg3);
                enemy.scale = 0.5
                break;
        case 4: enemy.addImage(spaceshipimg4);
                enemy.scale = 0.450
                break;
        default: break;
      }
      enemy.velocityY = 2
    }
    }

    function spawnBullet() {
      if(frameCount % 10) {
        var bullet = createSprite()
      }
    }