import {DISTANCE_BETWEEN_PELLETS, PIXEL_SIZE, WIDTH, HEIGHT, SIZE_OF_PELLET, GRID_SQUARE_SIZE, FRUIT_POS, LEFT, UP, RIGHT, DOWN, REF_SPEED, drawBasedOnPixels, numbers} from "./constants.js";
import {grid} from "./gridData.js";
import {powerMode, curGhostEat} from "./pacman.js";
//for drawing
const frameOne = [
  [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,0,1,1,1,0,0,1,1,1,0,1,1],
  [1,0,0,0,1,1,0,0,1,1,0,0,0,1]
  ];
const frameTwo = [
  [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,0,1,1,1,1,0,1,1,1,1],
  [0,1,1,0,0,0,1,1,0,0,0,1,1,0]
  ];
const eyeRightOut = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,0,0,0,0,1,1,0,0],
  [0,0,0,1,1,1,1,0,0,1,1,1,1,0],
  [0,0,0,1,1,1,1,0,0,1,1,1,1,0],
  [0,0,0,1,1,1,1,0,0,1,1,1,1,0],
  [0,0,0,0,1,1,0,0,0,0,1,1,0,0]
  ];
const eyeUpOut = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,0,0,0,0,1,1,0,0,0],
  [0,0,1,1,1,1,0,0,1,1,1,1,0,0],
  [0,0,1,1,1,1,0,0,1,1,1,1,0,0],
  [0,0,1,1,1,1,0,0,1,1,1,1,0,0],
  [0,0,0,1,1,0,0,0,0,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ];
const eyeLeftOut = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,1,1,0,0,0,0],
  [0,1,1,1,1,0,0,1,1,1,1,0,0,0],
  [0,1,1,1,1,0,0,1,1,1,1,0,0,0],
  [0,1,1,1,1,0,0,1,1,1,1,0,0,0],
  [0,0,1,1,0,0,0,0,1,1,0,0,0,0]
  ];
const eyeDownOut = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,0,0,0,0,1,1,0,0,0],
  [0,0,1,1,1,1,0,0,1,1,1,1,0,0],
  [0,0,1,1,1,1,0,0,1,1,1,1,0,0],
  [0,0,1,1,1,1,0,0,1,1,1,1,0,0],
  [0,0,0,1,1,0,0,0,0,1,1,0,0,0]
  ];
const eyeLeftIn = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,0,0,0,0,1,1,0,0,0,0,0],
  [0,1,1,0,0,0,0,1,1,0,0,0,0,0]
  ];
const eyeRightIn = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,1,0,0,0,0,1,1,0],
  [0,0,0,0,0,1,1,0,0,0,0,1,1,0]
  ];
const eyeDownIn = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,0,0,0,0,1,1,0,0,0],
  [0,0,0,1,1,0,0,0,0,1,1,0,0,0]
  ];
const eyeUpIn = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,0,0,0,0,1,1,0,0,0],
  [0,0,0,1,1,0,0,0,0,1,1,0,0,0]
  ];
const frightFace = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,0,0,1,1,0,0,0,0],
  [0,0,0,0,1,1,0,0,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,1,1,0,0,1,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,0,0,1,0],
  ];
const DIRECTION = 2;

let level = 1;
let flashTimer = 0; //for fright flashes
let pellets = 244;
let pacManPosition = [0, 0, 0];
let PACMAN_RADIUS = 0;
let scatter = true;
let consumeTimer = 0;
let defaultPos = [10, 13];
function Ghost(colour, y, x) {
  this.x = (!x) ? 0 : x; //for drawing
  this.y = (!y) ? 0 : y;
  this.frame = 0;
  this.colour = colour;
  this.centerX = this.x + 0.5; //for collision
  this.centerY = this.y + 0.5;
  this.committedPosition = (colour === "red") ? [Math.round(this.centerY), Math.round(this.centerX)] : [15, Math.round(this.centerX)]; //start in house if not blinky
  this.direction = UP;
  this.fright = [false, false]; //[normalFright, haveBeenEatenDuringFright]
  this.dead = false;
  this.pelletCounter = 0; //used for when they should leave the house
  this.inGhostHouse = true;
  this.draw = function() {
    let i = this.y;
    let j = this.x;
    let colour = (this.fright[0]) ? 
    (((flashTimer <= 1000 && flashTimer >= 800) || (flashTimer <= 600 && flashTimer >= 400) || (flashTimer <= 200)) ?
    "white" : "blue") : this.colour;
    if (!this.dead) {//dead only have eyes
      if (this.frame < 6) drawBasedOnPixels(frameOne, j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, colour);
      else drawBasedOnPixels(frameTwo, j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, colour);
    }
    this.frame++;
    if (this.frame === 12) this.frame = 0;
    if (!this.dead && this.fright[0]) {
      if (colour === "blue") drawBasedOnPixels(frightFace, j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, "white");
      else drawBasedOnPixels(frightFace, j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, "red");
      return;
    }
    switch (this.direction) {
      case LEFT:
        drawBasedOnPixels(eyeLeftOut, j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, "white");
        drawBasedOnPixels(eyeLeftIn, j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, "blue");
        break;
      case UP:
        drawBasedOnPixels(eyeUpOut, j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, "white");
        drawBasedOnPixels(eyeUpIn, j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, "blue");
        break;
      case RIGHT:
        drawBasedOnPixels(eyeRightOut, j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, "white");
        drawBasedOnPixels(eyeRightIn, j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, "blue");
        break;
      case DOWN:
        drawBasedOnPixels(eyeDownOut, j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, "white");
        drawBasedOnPixels(eyeDownIn, j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, "blue");
        break;
    }
  };
  this.consumeDraw = function() { //draws point val
    let LETTER_PIXEL = 2;
    let ctx = document.getElementById("main").getContext("2d");
    ctx.fillStyle = "white";
    for (let i = 0; i < (curGhostEat.toString()).length; i++) 
      numbers[(curGhostEat.toString())[i]](this.x*GRID_SQUARE_SIZE/2 + 6*i, this.y*GRID_SQUARE_SIZE/2, LETTER_PIXEL, 0, ctx);
  };
  this.determineSpeed = function() {
    if (this.dead) return REF_SPEED * 6;
    if (!this.fright[0] && this.colour === "red" && pellets <= elroyOnePellet(level) && pellets > elroyOnePellet(level) / 2) return elroyOneSpeed(level);
    else if (!this.fright[0] && this.colour === "red" && pellets <= elroyOnePellet(level) / 2) return elroyTwoSpeed(level);
    if (level === 1) {
      if (this.fright[0]) return REF_SPEED * 0.5;
      return REF_SPEED * 0.75;
    } else if (level < 5) {
      if (this.fright[0]) return REF_SPEED * 0.55;
      return REF_SPEED * 0.85;
    } else {
      if (this.fright[0]) return REF_SPEED * 0.60;
      return REF_SPEED * 0.95;
    }
  };
  this.move = function() {
    if (powerMode && flashTimer === 0) flashHandler(level); //determines the length of powerMode and updates
    if (this.inGhostHouse && this.colour != "red") {
      if (pellets <= this.pelletCounter || consumeTimer <= 0) {
        this.committedPosition = [[13, 13], [10, 13]]; //moves out of house
        this.inGhostHouse = false;
      } else {
        inHouseMovement.call(this);
      }
    }
    if (!powerMode) this.fright[1] = false;
    this.speed = this.determineSpeed();
    if (this.dead) deathMove.call(this);
    else if (this.fright[0] && !this.inGhostHouse) frightMove.call(this);
    else {
      try {
        switch (this.colour) {
          case "red": blinkyMove.call(this); break;
          case "pink": pinkyMove.call(this); break;
          case "cyan": inkyMove.call(this); break;
          case "orange": clydeMove.call(this); break;
        }
      } catch (error) {
        //in case there is some weird rounding error and they try to acess an illegal position.
        //In that case, they choose a random, valid tile to go to, then resume normal path finding
        frightMove.call(this);
      }
    }
    moveToCommittedPosition.call(this);
    fixPos.call(this); //centers the ghost
    this.centerX = this.x + 0.5; 
    this.centerY = this.y + 0.5;
    this.fright[0] = powerMode && !this.fright[1];
    return checkCollision.call(this);
  };
  this.speed = this.determineSpeed();
}
function inHouseMovement() { //bounces back and forth
  if (!this.committedPosition) {
    if (Math.round(this.centerY) === 11) this.committedPosition = [15, Math.round(this.centerX)];
    else if (Math.round(this.centerY) === 15) this.committedPosition = [11, Math.round(this.centerX)];
  }
}
function frightMove() {
  let chooseSquare = false;
  if (this.committedPosition) {
    switch (this.direction) { //determines if we moved to the committedPosition yet or not
      case (LEFT):
        chooseSquare = (this.centerX <= this.committedPosition[1]); break;
      case (UP):
        chooseSquare = (this.centerY <= this.committedPosition[0]); break;
      case (RIGHT):
        chooseSquare = (this.centerX >= this.committedPosition[1]); break;
      case (DOWN):
        chooseSquare = (this.centerY >= this.committedPosition[0]); break;
    }
  } else {
    chooseSquare = true;
    this.committedPosition = [Math.round(this.y), Math.round(this.x)];
  }
  if (chooseSquare) {//determines which tiles in its proximity are valid, excluding that in the reverse direction
    let possibleDirections = [];
    let possiblePositions = [];
    if (this.direction !== UP && this.committedPosition[0] + 1 < HEIGHT && grid[this.committedPosition[0] + 1][this.committedPosition[1]]) {
      possibleDirections.push(DOWN);
      possiblePositions.push([this.committedPosition[0] + 1,this.committedPosition[1]]);
    } if (this.direction !== DOWN && this.committedPosition[0] - 1 >= 0 && grid[this.committedPosition[0] - 1][this.committedPosition[1]]) {
      possibleDirections.push(UP);
      possiblePositions.push([this.committedPosition[0] - 1,this.committedPosition[1]]);
    } if (this.direction !== LEFT && this.committedPosition[1] + 1 < WIDTH && grid[this.committedPosition[0]][this.committedPosition[1] + 1]) {
      possibleDirections.push(RIGHT);
      possiblePositions.push([this.committedPosition[0],this.committedPosition[1] + 1]);
    } if (this.direction !== RIGHT && this.committedPosition[1] - 1 >= 0 && grid[this.committedPosition[0]][this.committedPosition[1] - 1]) {
      possibleDirections.push(LEFT);
      possiblePositions.push([this.committedPosition[0],this.committedPosition[1] - 1]);
    }
    let chosenIndex = Math.floor(Math.random()*possibleDirections.length);
    this.direction = possibleDirections[chosenIndex];
    this.committedPosition = possiblePositions[chosenIndex];
  }
}

function deathMove() {
  let path = pathFromTileToTile(Math.round(this.centerY), Math.round(this.centerX), defaultPos[0], defaultPos[1]); //goes back to house
  if (!path) {
    this.dead = false;
    this.fright[0] = false; 
    this.fright[1] = true;
    return;
  }
  this.committedPosition = path[0];
}

function blinkyMove() {
  if (scatter) {
    let scatterPositions = [[1, WIDTH-2], [5, WIDTH-2], [5, WIDTH - 7], [1, WIDTH-7]]; //top right
    scatterMove.call(this, scatterPositions);
  } else {
    if (!this.committedPosition || this.committedPosition.length === 0) { //path is pac man
      if (grid[Math.round(pacManPosition[0])][Math.round(pacManPosition[1])])
        this.committedPosition = pathFromTileToTile(Math.round(this.centerY), Math.round(this.centerX), Math.round(pacManPosition[0]), Math.round(pacManPosition[1]));
      else if (grid[Math.floor(pacManPosition[0])][Math.floor(pacManPosition[1])])
        this.committedPosition = pathFromTileToTile(Math.round(this.centerY), Math.round(this.centerX), Math.floor(pacManPosition[0]), Math.floor(pacManPosition[1]));
      else if (grid[Math.ceil(pacManPosition[0])][Math.ceil(pacManPosition[1])])
      this.committedPosition = pathFromTileToTile(Math.round(this.centerY), Math.round(this.centerX), Math.ceil(pacManPosition[0]), Math.ceil(pacManPosition[1]));
      else if (grid[Math.floor(pacManPosition[0])][Math.ceil(pacManPosition[1])])
        this.committedPosition = pathFromTileToTile(Math.round(this.centerY), Math.round(this.centerX), Math.floor(pacManPosition[0]), Math.ceil(pacManPosition[1]));
      else 
        this.committedPosition = pathFromTileToTile(Math.round(this.centerY), Math.round(this.centerX), Math.ceil(pacManPosition[0]), Math.floor(pacManPosition[1]));
    }
  }
}

function pinkyMove() {
  if (scatter) {
    let scatterPositions = [[1, 1], [5, 1], [5, 6], [1, 6]]; //top left
    scatterMove.call(this, scatterPositions);
  } else {
    if (!this.committedPosition || this.committedPosition.length === 0) { //path is two tiles ahead of pacMan
      let tileOfInterest = null;
      let i = 2;
      switch (pacManPosition[DIRECTION]) {
        case (LEFT):
          do {
            tileOfInterest = [Math.round(pacManPosition[0]), Math.round(pacManPosition[1]) - i]; 
            i--;
          } while (!grid[tileOfInterest[0]][tileOfInterest[1]]); //makes sure two tiles ahead is valid
          break;
        case (UP): 
          do {
            tileOfInterest = [Math.round(pacManPosition[0]) - i, Math.round(pacManPosition[1])];
            i--;
          } while (!grid[tileOfInterest[0]][tileOfInterest[1]]);
          break;
        case (RIGHT): 
          do {
            tileOfInterest = [Math.round(pacManPosition[0]), Math.round(pacManPosition[1]) + i]; 
            i--;
          } while (!grid[tileOfInterest[0]][tileOfInterest[1]]);
          break;
        case (DOWN):
          do {
            tileOfInterest = [Math.round(pacManPosition[0]) + i, Math.round(pacManPosition[1])];
            i--;
          } while (!grid[tileOfInterest[0]][tileOfInterest[1]]);
          break;
      }
      this.committedPosition = pathFromTileToTile(Math.round(this.centerY), Math.round(this.centerX), tileOfInterest[0], tileOfInterest[1]);
    }
  }
}

function inkyMove() {
  if (scatter) { //bottom right
    let scatterPositions = [[HEIGHT - 2, WIDTH - 13], [HEIGHT - 5, WIDTH - 13], [HEIGHT - 5, WIDTH - 10], [HEIGHT - 8, WIDTH - 10], [HEIGHT - 8, WIDTH - 7], [HEIGHT - 5, WIDTH - 7], [HEIGHT - 5, WIDTH - 2], [HEIGHT - 2, WIDTH - 2]];
    scatterMove.call(this, scatterPositions);
  } else {
    if (!this.committedPosition || this.committedPosition.length === 0) { 
      //finds tile two distances away from pacman, and goes to the the position 2v, where v is the vector from blink's position to said tile
      let tileOfInterest = null;
      switch (pacManPosition[DIRECTION]) {
        case (LEFT): tileOfInterest = [Math.round(pacManPosition[0]), Math.round(pacManPosition[1]) - 2]; break;
        case (UP): tileOfInterest = [Math.round(pacManPosition[0]) - 2, Math.round(pacManPosition[1])]; break;
        case (RIGHT): tileOfInterest = [Math.round(pacManPosition[0]), Math.round(pacManPosition[1]) + 2]; break;
        case (DOWN): tileOfInterest = [Math.round(pacManPosition[0]) + 2, Math.round(pacManPosition[1])]; break;
      }
      let blinkyPosition = [Math.round(ghosts[0].centerY), Math.round(ghosts[0].centerX)];
      tileOfInterest = [2*tileOfInterest[0] - blinkyPosition[0], 2*tileOfInterest[1] - blinkyPosition[1]];
      //stays in bounds
      if (tileOfInterest[0] >= HEIGHT) tileOfInterest[0] = HEIGHT - 1;
      else if (tileOfInterest[0] < 0) tileOfInterest[0] = 0;
      if (tileOfInterest[1] >= WIDTH) tileOfInterest[1] = WIDTH - 1;
      else if (tileOfInterest[1] < 0) tileOfInterest[1] = 0;
      let k = 0;
      while (!grid[tileOfInterest[0]][tileOfInterest[1]]) { //stays in bounds
        for (let i = tileOfInterest[0] - 1 - k; i <= tileOfInterest[0] + 1 + k; i++) {
          for (let j = tileOfInterest[1] - 1 - k; j <= tileOfInterest[1] + 1 + k; j++) {
            if (i < HEIGHT && j < WIDTH && i >= 0 && j >= 0) {
              if (grid[i][j]) {
                this.committedPosition = pathFromTileToTile(Math.round(this.centerY), Math.round(this.centerX), i, j);
                return;
              }
            }
          }
        }
        k++;
      }
      this.committedPosition = pathFromTileToTile(Math.round(this.centerY), Math.round(this.centerX), tileOfInterest[0], tileOfInterest[1]);
    }
  }
}

function clydeMove() {
  if (scatter) { //bottom left
    let scatterPositions = [[HEIGHT - 2, 1], [HEIGHT - 2, 12], [HEIGHT - 5, 12], [HEIGHT - 5, 9], [HEIGHT - 8, 9], [HEIGHT - 8, 6], [HEIGHT - 5, 6], [HEIGHT - 5, 1]];
    scatterMove.call(this, scatterPositions);
  } else {
    if (!this.committedPosition || this.committedPosition.length === 0) {
      if (Math.sqrt((this.centerY - pacManPosition[0])**2 + (this.centerX - pacManPosition[1])**2) <= 8) { //if he is too close to pac-man, he goes to lower left corner
        this.committedPosition = pathFromTileToTile(Math.round(this.centerY), Math.round(this.centerX), HEIGHT - 2, 1);
      } else { //otherwise tracks pacman
        blinkyMove.call(this, !false);
      }
    } 
  }
}

function pathFromTileToTile(iFrom, jFrom, iTo, jTo) { //bfs with parent pointers
  if (iFrom === iTo && jFrom === jTo) return null;
  let pathObj = function(i, j, pointer) {
    this.i = i;
    this.j = j;
    this.pointer = pointer;
    this.size = (this.pointer) ? this.pointer.size + 1 : 0;
  }
  let positions = [new pathObj(iFrom, jFrom, null)];
  let visited = [];
  for (let i = 0; i < HEIGHT; i++) {
    visited.push([]);
    for (let j = 0; j < WIDTH; j++) {
      visited[i].push(false); 
    }
  }
  let curPos = null;
  while (true) {
    curPos = positions.shift();
    if (curPos.i === iTo && curPos.j === jTo) break;
    // we are in bounds and we aren't adding our parent (circular references :( )
    if (curPos.i + 1 < HEIGHT && grid[curPos.i + 1][curPos.j] && !visited[curPos.i + 1][curPos.j]) {
      positions.push(new pathObj(curPos.i + 1, curPos.j, curPos));
      visited[curPos.i + 1][curPos.j] = true;
    } 
    if (curPos.i - 1 >= 0 && grid[curPos.i - 1][curPos.j] && !visited[curPos.i - 1][curPos.j]) {
      positions.push(new pathObj(curPos.i - 1, curPos.j, curPos));
      visited[curPos.i - 1][curPos.j] = true;
    } 
    if (curPos.j + 1 < WIDTH && grid[curPos.i][curPos.j + 1] && !visited[curPos.i][curPos.j + 1]) {
      positions.push(new pathObj(curPos.i, curPos.j + 1, curPos));
      visited[curPos.i][curPos.j + 1] = true;
    } 
    if (curPos.j >= 0 && grid[curPos.i][curPos.j - 1] && !visited[curPos.i][curPos.j - 1]) {
      positions.push(new pathObj(curPos.i, curPos.j - 1, curPos));
      visited[curPos.i][curPos.j - 1] = true;
    }
  }
  let path = [];
  while (curPos.pointer)  {
    path = [[curPos.i, curPos.j]].concat(path);
    curPos = curPos.pointer;
  }
  return path;
}

function moveToCommittedPosition() {
  let curTile = this.committedPosition;
  if (!curTile || !curTile[0]) {
    this.committedPosition = null;
    return;
  }
  if (curTile[0][0]) curTile = curTile[0]; //sometimes we pass full paths
  if (curTile[0] < Math.round(this.centerY)) this.direction = UP;
  else if (curTile[0] > Math.round(this.centerY)) this.direction = DOWN;
  else if (curTile[1] < Math.round(this.centerX)) this.direction = LEFT;
  else if (curTile[1] > Math.round(this.centerX)) this.direction = RIGHT;
  switch (this.direction) {
    case LEFT:
      this.x-=this.speed;
      break;
    case UP:
      this.y-=this.speed;
      break;
    case RIGHT:
      this.x+=this.speed; 
      break;
    case DOWN:
      this.y+=this.speed; 
      break;
  }
  let chooseSquare = false;
  switch (this.direction) {
    case (LEFT):
      chooseSquare = (this.centerX <= curTile[1]); break;
    case (UP):
      chooseSquare = (this.centerY <= curTile[0]); break;
    case (RIGHT):
      chooseSquare = (this.centerX >= curTile[1]); break;
    case (DOWN):
      chooseSquare = (this.centerY >= curTile[0]); break;
  }
  if (chooseSquare) { //we reached our desired tile
    if (this.committedPosition[0][0]) this.committedPosition.shift();
    else this.committedPosition = null;
  } 
  //deals with warps
  if ((Math.round(this.y) === 13 || Math.round(this.y) === 12) && Math.round(this.x) <= 0) {
      this.x = WIDTH - 1 - 0.51;
      curTile[1] = WIDTH - 3;
    } else if ((Math.round(this.y) === 13 || Math.round(this.y) === 12) && Math.round(this.x) >= WIDTH - 1) {
      this.x = 0.51;
      curTile[1] = 2;
    }
}

function scatterMove(scatterPositions) { //goes around in circles
  let i = 0;
  for (i; i < scatterPositions.length; i++) {
    if ((scatterPositions[i][0] === Math.ceil(this.centerY) || scatterPositions[i][0] === Math.floor(this.centerY)) && 
    (scatterPositions[i][1] === Math.ceil(this.centerX) || scatterPositions[i][1] === Math.floor(this.centerX))) {
        break;
    }
  }
  if (i < scatterPositions.length) {// we are at a scatterPoint. Move on to the next
    this.committedPosition = scatterPositions[(i + 1) % scatterPositions.length];
  }
  else { //go to the furthest one from current position
    let maxDistance = -1;
    let index = 0;
    for (i = 0; i < scatterPositions.length; i++) {
      if (Math.sqrt((this.centerY - scatterPositions[i][0])**2 + (this.centerX - scatterPositions[i][1])**2) > maxDistance) {
        maxDistance = Math.sqrt((this.centerY - scatterPositions[i][0])**2 + (this.centerX - scatterPositions[i][1])**2);
        index = i;
      }
    }
    if (!this.committedPosition) {
      this.committedPosition = pathFromTileToTile(Math.round(this.centerY), Math.round(this.centerX), scatterPositions[index][0], scatterPositions[index][1])
    }    
  }
}

function fixPos() { //sometimes the ghosts aren't perfectly centered. Reduces ghost clipping and prevents getting stuck
  if (this.direction === UP || this.direction === DOWN) {
    if (Math.abs(this.centerX - Math.round(this.centerX)) > this.speed) {
      if (this.centerX < Math.round(this.centerX)) this.x += this.speed;
      else this.x -= this.speed;
    } 
  } else {
    if (Math.abs(this.centerY - Math.round(this.centerY)) > this.speed) {
      if (this.centerY < Math.round(this.centerY)) this.y += this.speed;
      else this.y -= this.speed;
    }
  }
}

function checkCollision() {//radius * 1.5 because you could hide in certain corners and get away with it
  return (Math.sqrt((this.centerY - pacManPosition[0])**2 + (this.centerX - pacManPosition[1])**2)*GRID_SQUARE_SIZE <= PACMAN_RADIUS*1.5);
}

function _scatterModeSwitches(delays) {//switches between aggressive and passive
  if (delays.length > 0) {
    delays[0] -= 1000/60;
    if (powerMode) delays[0] += 1000/60; //pauses the timer
    if (delays[0] <= 0) {
      delays.shift();
      scatter = !scatter;
    }
    window.requestAnimationFrame(function() {_scatterModeSwitches(delays);});
  }
}

function elroyOnePellet(level) {
  switch (level) {
    case 1: return 20;
    case 2: return 30;
    case 3:  
    case 4:
    case 5: return 40;
    case 6:
    case 7:
    case 8: return 50;
    case 9:
    case 10:
    case 11: return 60;
    case 12:
    case 13:
    case 14: return 80;
    case 15:
    case 16:
    case 17:
    case 18: return 100;
    default: return 120;
  }
}
function elroyOneSpeed(level) {
  switch (level) {
    case 1: return REF_SPEED * 0.8;
    case 2: 
    case 3:  
    case 4: return REF_SPEED * 0.9;
    default: return REF_SPEED;
  }
}
function elroyTwoSpeed(level) {
  switch (level) {
    case 1: return REF_SPEED * 0.85;
    case 2: 
    case 3:  
    case 4: return REF_SPEED * 0.95;
    default: return REF_SPEED * 1.05;
  }
}
function flashHandler(level) {
  flashTimer = (function() { //determines length of power pellet.
    switch (level) {
      case 1: return 6000;
      case 2:
      case 6:
      case 10: return 5000;
      case 3: return 4000;
      case 4:
      case 14: return 3000;
      case 5:
      case 7:
      case 8:
      case 11: return 2000;
      case 9:
      case 12:
      case 13:
      case 15:
      case 16:
      case 18: return 1000;
      default: return 0;
    }
  })();
  window.requestAnimationFrame(function decreaseFlash() {
    flashTimer -= 1000/60;
    if (flashTimer > 0) window.requestAnimationFrame(decreaseFlash);
    else flashTimer = 0;
  })
}
export let ghosts = [new Ghost("red", 10,13), new Ghost("cyan", 13,11), new Ghost("pink", 13,13), new Ghost("orange", 13, 15)];

export function ghostUpdateLevel(_level) { level = _level; }
export function ghostUpdatePelletCount(_pellets) {
  if (_pellets === pellets) consumeTimer -= 1000/60; //prevents hiding in a corner to prevent ghosts from leaving house
  else {
    pellets = _pellets; 
    consumeTimer = (level < 5) ? 4000 : 3000;
  }
}
export function scatterModeSwitches() {
  scatter = true;
  let delays = [];
  switch (level) {
    case (1):
      delays.push(7*1000);delays.push(20*1000);delays.push(7*1000);delays.push(20*1000);delays.push(5*1000);delays.push(20*1000);delays.push(5*1000);break;
    case (2):
    case (3):
    case (4):
      delays.push(7*1000);delays.push(20*1000);delays.push(7*1000);delays.push(20*1000);delays.push(5*1000);break;
    default:
      delays.push(5*1000);delays.push(20*1000);delays.push(5*1000);delays.push(20*1000);delays.push(5*1000);break;
  }
  window.requestAnimationFrame(function() {_scatterModeSwitches(delays)});
}
export function ghostUpdatePacManCoords(position){
  pacManPosition[0] = position[0];
  pacManPosition[1] = position[1];
  pacManPosition[DIRECTION] = position[DIRECTION];
  PACMAN_RADIUS = position[3];
}
export function updateFlash(frames) {
  flashTimer += frames * 1000/60;
}
export function ghostReset(death) {
  consumeTimer = (level < 5) ? 4000 : 3000;
  for (let ghost of ghosts) {
    ghost.inGhostHouse = true;
    if (!death) { //pellet count is greater-- we are at the beginning of a level
      switch(ghost.colour) {
        case "red":
          ghost.pelletCounter = pellets;
          ghost.x = 13; ghost.y = 10;
          ghost.centerX = ghost.x + 0.5; ghost.centerY = ghost.y + 0.5;
          ghost.committedPosition = [Math.round(ghost.centerY), Math.round(ghost.centerX)];
          break;
        case "pink":
          ghost.pelletCounter = pellets;
          ghost.x = 13; ghost.y = 13;
          ghost.centerX = ghost.x + 0.5; ghost.centerY = ghost.y + 0.5;
          ghost.committedPosition = [15, Math.round(ghost.centerX)];
          break;
        case "cyan":
          if (level === 1) ghost.pelletCounter = pellets-30; //leave after 30 pellets consumed
          else ghost.pelletCounter = pellets;
          ghost.x = 11; ghost.y = 13;
          ghost.centerX = ghost.x + 0.5; ghost.centerY = ghost.y + 0.5;
          ghost.committedPosition = [15, Math.round(ghost.centerX)];
          break; 
        case "orange":
          if (level === 1) ghost.pelletCounter = pellets - 60;
          else if (level === 2) ghost.pelletCounter = pellets - 50;
          else ghost.pelletCounter = pellets;
          ghost.x = 15; ghost.y = 13;
          ghost.centerX = ghost.x + 0.5; ghost.centerY = ghost.y + 0.5;
          ghost.committedPosition = [15, Math.round(ghost.centerX)];
          break;
      }
    } else {
      switch(ghost.colour) {
        case "red":
          ghost.pelletCounter = pellets; 
          ghost.x = 13; ghost.y = 10;
          ghost.centerX = ghost.x + 0.5; ghost.centerY = ghost.y + 0.5;
          ghost.committedPosition = [Math.round(ghost.centerY), Math.round(ghost.centerX)];
          break;
        case "pink":
          ghost.pelletCounter = pellets - 7; 
          ghost.x = 13; ghost.y = 13;
          ghost.centerX = ghost.x + 0.5; ghost.centerY = ghost.y + 0.5;
          ghost.committedPosition = [15, Math.round(ghost.centerX)];
          break;
        case "cyan":
          ghost.pelletCounter = pellets - 17; 
          ghost.x = 11; ghost.y = 13;
          ghost.centerX = ghost.x + 0.5; ghost.centerY = ghost.y + 0.5;
          ghost.committedPosition = [15, Math.round(ghost.centerX)];
          break; 
        case "orange":
          ghost.pelletCounter = pellets - 32; 
          ghost.x = 15; ghost.y = 13;
          ghost.centerX = ghost.x + 0.5; ghost.centerY = ghost.y + 0.5;
          ghost.committedPosition = [15, Math.round(ghost.centerX)];
          break;
      }
    }
  }
}