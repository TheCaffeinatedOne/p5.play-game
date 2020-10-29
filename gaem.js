// variable for pictures, and other
let bill;
let xface = "left";

function setup() {
	createCanvas(600, 700);
 	bill = loadImage('assets/billystill.png');
	billLeft = plr.mirrorX(1);
  plr = createSprite(width/2, height/2, 50, 50);
  plr.velocity.y;
  plr.velocity.x;
	plr.addImage(bill);
}
function draw() {
	background(255);
  drawSprites();
}
function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			plr.velocity.x = -5;
			plr.mirrorX(-1);
			break;
		case 39:
		case 68:
			plr.velocity.x = 5;
			plr.mirrorX(1);
			break;
		case 38:
		case 87:
			plr.velocity.y = -5;
			break;
		case 40:
		case 83:
			plr.velocity.y = 5;
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			plr.velocity.x = 0;
			break;
		case 39:
		case 68:
			plr.velocity.x = 0;
			break;
		case 38:
		case 87:
			plr.velocity.y = 0;
			break;
		case 40:
		case 83:
			plr.velocity.y = 0;
			break;
	}
}
