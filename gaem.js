// variable for pictures, and other
let bill;
let sprOne;
let walkOne
function preload(){
	walkOne = loadAnimation("assets/billywalk1.png","assets/billywalk2.png");
	bill = loadImage('assets/billystill.png');
}
function setup() {
	createCanvas(1350, 600);
 	sprOne = createSprite(width/2, height/2, 50, 50);
  sprOne.velocity.y;
  sprOne.velocity.x;
	sprOne.addAnimation("bruh", walkOne);
}
function draw() {
	background(255);
  drawSprites();
}

function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			sprOne.velocity.x = -5;
			sprOne.mirrorX(-1);
			break;
		case 39:
		case 68:
			sprOne.velocity.x = 5;
			sprOne.mirrorX(1);
			break;
		case 38:
		case 87:
			sprOne.velocity.y = -5;
			break;
		case 40:
		case 83:
			sprOne.velocity.y = 5;
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			sprOne.velocity.x = 0;
			sprOne.mirrorX(-1);
			break;
		case 39:
		case 68:
			sprOne.velocity.x = 0;
			sprOne.mirrorX(1);
			break;
		case 38:
		case 87:
			sprOne.velocity.y = 0;
			break;
		case 40:
		case 83:
			sprOne.velocity.y = 0;
			break;
	}
}
