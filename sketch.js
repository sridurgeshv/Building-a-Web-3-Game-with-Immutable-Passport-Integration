let alienImage; 
let invaders;
let shooterImage;
let player;
let allDebris = [];
let gameOver = false;
let canvas;
let canvasEl;
let loading = 10;
let loadingPlus = true;
let resumeButton;
let upgradedShooterImage;

const NUM_DEBRIS = 5; // number of space debris

function preload() {
  alienImage = loadImage("invader1.png");
  shooterImage = loadImage('player.png');
  upgradedShooterImage = loadImage('playerv2.png');
}

function setup() {
  canvasEl = document.getElementById('sketch-holder')
  canvas = createCanvas(canvasEl.offsetWidth, 400);
  canvas.style('display', 'block');
  canvas.parent('sketch-holder');
  invaders = new Invaders(alienImage, 4);
  player = new Player(shooterImage);

  // create the debris objects
  for (let i = 0; i < NUM_DEBRIS; i++) {
    if (allDebris.length < NUM_DEBRIS) {
      allDebris.push(new Debris());
    }
  }

  // Create the resume game button but hide it initially
  resumeButton = createButton('Resume Game');
  resumeButton.position(width / 2 - 40, height / 2 + 220);
  resumeButton.mousePressed(resumeGame);
  resumeButton.hide();
}

function showGameOver() {
  background(0);
  gameOver = true;
  fill(255);
  let gameOverT = "GAME OVER! Click to continue. Your score was " + player.score;
  textSize(16);
  text(gameOverT, width / 2 - textWidth(gameOverT) / 2, height / 2);
}

function connectToStart() {
  background(100);
  fill(255);
  textSize(16);
  let startText1 = "Game will start after successful authentication";
  let startText2 = "Click on Connect passport";
  let textXpos1 = width / 2 - textWidth(startText1) / 2;
  let textXpos2 = width / 2 - textWidth(startText2) / 2;
  let textYpos = height / 2;

  if (window.isconnecting) {
    startText1 = "Connecting ...";
    textXpos1 = width / 2 - textWidth(startText1) / 2;
    if (loadingPlus === true && loading == 100) {
      loadingPlus = false;
    } else if (loading == 10 && loadingPlus === false) {
      loadingPlus = true;
    }
    if (loadingPlus) {
      loading++;
    } else {
      loading--;
    }
    fill(loading + 150);
  }

  text(startText1, textXpos1, textYpos);
  text(startText2, textXpos2, textYpos + 20);
}

function resumeGame() {
  console.log('Resuming game, hiding resume button');
  player.resumeGame();
  resumeButton.hide();
  loop(); 
  let nft = document.getElementById("nft");
  nft.innerHTML = ""
}

function draw() {
  if (gameOver) {
    showGameOver();
  } else if (window?.userProfile?.email) {
    if (!player.gamePaused) {
      background(0);
      player.update();
      updateDebrisAndCheckCollisions();
      invaders.update(player);
    }

    player.draw();
    player.drawInfo();
    invaders.draw();
    
    // Check if the game needs to be paused
    if (player.gamePaused && resumeButton.elt.style.display=== 'none') {
      console.log('Pausing game, showing resume button');
      noLoop();
      resumeButton.show();
    }
    
    if (player.lives == 0) {
      gameOver = true;
    }
  } else {
    connectToStart();
  }

  // Update button visibility based on authentication status
  document.getElementById('btn-passport').hidden = window?.userProfile?.email;
  document.getElementById('btn-logout').hidden = !window?.userProfile?.email;
}

function mousePressed() {
  if (gameOver === true) {
    gameOver = false;
    setup();
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW || keyCode == 88) {
    player.moveRight();
  } else if (keyCode === LEFT_ARROW || keyCode == 90) {
    player.moveLeft();
  } else if (keyCode === 32) {
    player.shoot();
  }

  if (keyCode === UP_ARROW) {
    player.moveUp()
  } else if (keyCode == DOWN_ARROW) {
    player.moveDown();
  }
}

function updateDebrisAndCheckCollisions() {
  for (let i = 0; i < allDebris.length; i++) {
    allDebris[i].update();
    allDebris[i].display();

    if (allDebris[i].hasHitPlayer(player)) {
      allDebris.splice(i, 1);
      player.loseLife();
      break;
    }
  }
}
function windowResized() {
  resizeCanvas(canvasEl.offsetWidth, 400)
  background(0)
}