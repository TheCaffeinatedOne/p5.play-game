// variable for pictures, and other
let bill;
let sprOne;
let walkOne
function preload(){
	walkOne = loadAnimation("assets/billywalk1.png","assets/billywalk1.png","assets/billywalk1.png","assets/billywalk1.png","assets/billywalk2.png","assets/billywalk2.png","assets/billywalk2.png","assets/billywalk2.png",);
	bill = loadImage('assets/billystill.png');
}
function setup() {
	createCanvas(1350, 600);
 	sprOne = createSprite(width/2, height/2, 50, 50);
  sprOne.velocity.y;
  sprOne.velocity.x;
	sprOne.addImage(bill);

}
function draw() {
	background(255);
  drawSprites();
}

function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			sprOne.velocity.x = -3.5;
			sprOne.mirrorX(-1);
			sprOne.addAnimation("bruh", walkOne);
			break;
		case 39:
		case 68:
			sprOne.velocity.x = 3.5;
			sprOne.mirrorX(1);
			sprOne.addAnimation("bruh", walkOne);
			break;
		case 38:
		case 87:
			sprOne.velocity.y = -3.5;
			sprOne.addAnimation("bruh", walkOne);
			break;
		case 40:
		case 83:
			sprOne.velocity.y = 3.5;
			sprOne.addAnimation("bruh", walkOne);
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			sprOne.velocity.x = 0;
			sprOne.mirrorX(-1);
			sprOne.addImage(bill);
			break;
		case 39:
		case 68:
			sprOne.velocity.x = 0;
			sprOne.mirrorX(1);
			sprOne.addImage(bill);
			break;
		case 38:
		case 87:
			sprOne.velocity.y = 0;
			sprOne.addImage(bill);
			break;
		case 40:
		case 83:
			sprOne.velocity.y = 0;
			sprOne.addImage(bill);
			break;
	}
}
