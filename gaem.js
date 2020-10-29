function setup() {
	createCanvas(1350, 600);
  spr = createSprite(
    width/2, height/2, 50, 50);
  spr.shapeColor = color(255);
  spr.velocity.y;
  spr.velocity.x;
}


function draw() {
	background(0);

	fill(0);
	text("Use the arrow keys (or WASD) to move the square around", 25, 25);
  drawSprites();
}

function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			spr.velocity.x = -5;
			break;
		case 39:
		case 68:
			spr.velocity.x = 5;
			break;
		case 38:
		case 87:
			spr.velocity.y = -5;
			break;
		case 40:
		case 83:
			spr.velocity.y = 5;
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			spr.velocity.x = 0;
			break;
		case 39:
		case 68:
			spr.velocity.x = 0;
			break;
		case 38:
		case 87:
			spr.velocity.y = 0;
			break;
		case 40:
		case 83:
			spr.velocity.y = 0;
			break;
	}
}
