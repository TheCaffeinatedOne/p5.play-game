// variable for pictures, and other
let bill;
let sprOne;
let walkOne
function preload(){
	walkOne = loadAnimation("assets/billywalk1.png","assets/billywalk1.png","assets/billywalk1.png","assets/billywalk1.png","assets/billywalk2.png","assets/billywalk2.png","assets/billywalk2.png","assets/billywalk2.png",);
	bill = loadAnimation("assets/billystill.png","assets/billystill.png");
}
function setup() {
	createCanvas(1350, 600);
 	sprOne = createSprite(width/2, height/2, 50, 50);
  sprOne.velocity.y;
  sprOne.velocity.x;
	sprOne.addAnimation("still", bill);
  let walking = sprOne.addAnimation("walkin",animation)
}
function draw() {
	background(255);
  drawSprites();
}

let walkSpd = 3.5;
function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			sprOne.velocity.x = -walkSpd;
			sprOne.mirrorX(-1);
			sprOne.changeAnimation("walkin");
			break;
		case 39:
		case 68:
			sprOne.velocity.x = walkSpd;
			sprOne.mirrorX(1);
			sprOne.changeAnimation("walkin");
			break;
		case 38:
		case 87:
			sprOne.velocity.y = -walkSpd;
			sprOne.changeAnimation("walkin");
			break;
		case 40:
		case 83:
			sprOne.velocity.y = walkSpd;
			sprOne.changeAnimation("walkin");
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			sprOne.velocity.x = 0;
			sprOne.mirrorX(-1);
			sprOne.changeAnimation("idk");
			break;
		case 39:
		case 68:
			sprOne.velocity.x = 0;
			sprOne.mirrorX(1);
			sprOne.changeAnimation("idk");
			break;
		case 38:
		case 87:
			sprOne.velocity.y = 0;
			sprOne.changeAnimation("idk");
			break;
		case 40:
		case 83:
			sprOne.velocity.y = 0;
			sprOne.changeAnimation("idk");
			break;
	}
}
