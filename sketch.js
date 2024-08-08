let xPos = 250;
let yPos = 250;

let xSpeed;
let ySpeed;

let xDirection = 1;
let yDirection = 1;

let pingSound;
let dvdLogo;

function preload(){
  pingSound = loadSound("audio/ping.mp3")
  dvdLogo = loadImage("images/dvdLogo.png")
}

function setup() {
  createCanvas(500, 500);
  background(0);
  xSpeed = random(-5, 5)
  ySpeed = random(-5, 5)
  imageMode(CENTER)
}

function draw() {
  background(0);
  image(dvdLogo, xPos, yPos, 50, 50)
  xPos += xSpeed * xDirection
  yPos += ySpeed * yDirection

  if(xPos < 25 || xPos > 475){
     xDirection *= -1
     //pingSound.play()
    }

  if(yPos < 25 || yPos > 475){
    yDirection *= -1
    //pingSound.play()
  }
  
} // end of draw
