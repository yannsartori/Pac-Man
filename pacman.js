import {DISTANCE_BETWEEN_PELLETS, PIXEL_SIZE, WIDTH, HEIGHT, SIZE_OF_PELLET, GRID_SQUARE_SIZE, LEFT, UP, RIGHT, DOWN, REF_SPEED, drawBasedOnPixels, chompMusic1, chompMusic2, powerPellet, extraLifeMusic, scaredGhost} from "./constants.js";
import {grid} from "./gridData.js";

let level = 1;
let pellets = 244;
let eatingPellets = false; //speed purposes
let speedTimeout = 0; //used for speed between pellets
let powerTimer = 0;
export let powerMode = false;
export let curGhostEat = 0;
export function PacMan() {
  this.x = 13.5; //col
  this.y = 23; //row
  this.radius = GRID_SQUARE_SIZE * (3/5);
  this.animationFrame = 0;
  this.score = 0; 
  this.lives = 3;
  
  this.speed = 0;
  this.step = 1; //+ open pacman mouth, - close pacman mouth
  this.rotation = 0;
  this.awardedLife = false; //you are only allowed one one up
  this.drawPacMan = function(animationFrame) {
    if (!animationFrame) animationFrame = 0;
    let canvas = document.getElementById("main");
    let ctx = canvas.getContext("2d");
    ctx.save();
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(this.x*GRID_SQUARE_SIZE, this.y*GRID_SQUARE_SIZE);
    ctx.arc(this.x*GRID_SQUARE_SIZE, this.y*GRID_SQUARE_SIZE, this.radius, Math.PI/6 - this.animationFrame/6 + this.rotation, 2*Math.PI - Math.PI/6 + this.animationFrame/6 + this.rotation);
    ctx.fill();
    ctx.restore();
  };
  this.move = function(direction) {//returns [boolAtePellet, boolAteFruit]
    let tempCoords = [this.x, this.y]; //so we don't go into illegal territory
    let tempRotation = 0;
    this.speed = determineSpeed(); 
    switch (direction) {
      case LEFT:
        if (this.x > 0) tempCoords[0]-=this.speed;
        tempRotation = Math.PI;
        break;
      case UP:
        if (this.y > 0) tempCoords[1]-=this.speed;
        tempRotation = 3 * Math.PI / 2;
        break;
      case RIGHT:
        if (this.x < WIDTH - 1) tempCoords[0]+=this.speed;
        break;
      case DOWN:
        if (this.y < HEIGHT - 1) tempCoords[1]+=this.speed;
        tempRotation = Math.PI / 2;
        break;
    }
    let checkCoords = [Math.round(tempCoords[0]), Math.round(tempCoords[1])];
    if (!grid[checkCoords[1]][checkCoords[0]]) return [false, false]; //illegal territory :O
    this.rotation = tempRotation;
    //warps
    if (checkCoords[1] === 13 && checkCoords[0] === 0) this.x = WIDTH - 2;
    else if (checkCoords[1] === 13 && checkCoords[0] === WIDTH - 1) this.x = 1;
    else this.x = tempCoords[0]; 
    
    this.y = tempCoords[1];
    this.animationFrame += this.step;
    if (Math.abs(this.animationFrame) === 3) this.step *= -1;
    
    let dscore = handlePellet(checkCoords[1], checkCoords[0], this.speed); //returns val of pellet/fruit consumed, if any
    this.score += dscore;
    if (!this.awardedLife && this.score >= 10000) {
      extraLifeMusic.play();
      this.lives++;
      this.awardedLife = true;
    }
    if (!powerMode) curGhostEat = 0; //resets the point counter
    return [dscore > 0, dscore > 50]; 
  };
  this.ghostEat = function() {
    if (curGhostEat === 0) curGhostEat = 200;
    else curGhostEat *= 2;
    this.score += curGhostEat;
  };
  this.resetPosition = function() {//for death
    this.x = 13.5;
    this.y = 23;
    this.rotation = 0;
    this.animationFrame = 0;
  };
  this.getDrawingInfo = function() { //used for certain ghosts' targeting mechanism, and for detecting collision
    let direction = (this.rotation === 0) ? RIGHT : 
                    (this.rotation === Math.PI / 2) ? UP :
                    (this.rotation === Math.PI) ? LEFT :
                    DOWN;
    return [this.y, this.x, direction, this.radius];
  };
  this.updateLevel = function(_level) { if (level !== _level) pellets = 244; level = _level; };
  this.deathAnimation = function() {
    let frameOne = [
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,1,0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,1,0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0]
    ];
    let frameTwo = [
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,1,1,0,0,0,0,0],
      [0,0,0,1,0,0,0,0,1,0,0,0],
      [0,0,0,0,1,0,0,1,0,0,0,0],
      [0,0,1,0,0,0,0,0,0,1,0,0],
      [0,0,1,0,0,0,0,0,0,1,0,0],
      [0,0,0,0,1,0,0,1,0,0,0,0],
      [0,0,0,1,0,0,0,0,1,0,0,0],
      [0,0,0,0,0,1,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0]
    ];
    let frameThree = [
      [0,0,0,0,0,1,1,0,0,0,0,0],
      [0,1,0,0,0,1,1,0,0,0,1,0],
      [0,0,1,0,0,1,1,0,0,1,0,0],
      [0,0,0,1,0,0,0,0,1,0,0,0],
      [0,0,0,0,1,0,0,1,0,0,0,0],
      [1,1,1,0,0,0,0,0,0,1,1,1],
      [1,1,1,0,0,0,0,0,0,1,1,1],
      [0,0,0,0,1,0,0,1,0,0,0,0],
      [0,0,0,1,0,0,0,0,1,0,0,0],
      [0,0,1,0,0,1,1,0,0,1,0,0],
      [0,1,0,0,0,1,1,0,0,0,1,0],
      [0,0,0,0,0,1,1,0,0,0,0,0]
    ];
    setTimeout(() => drawBasedOnPixels(frameOne, this.x * GRID_SQUARE_SIZE - 4*PIXEL_SIZE, this.y * GRID_SQUARE_SIZE - 4*PIXEL_SIZE, "yellow"), 250);
    setTimeout(() => drawBasedOnPixels(frameTwo, this.x * GRID_SQUARE_SIZE - 4*PIXEL_SIZE, this.y * GRID_SQUARE_SIZE - 4*PIXEL_SIZE, "yellow"), 500);
    setTimeout(() => drawBasedOnPixels(frameThree, this.x * GRID_SQUARE_SIZE - 4*PIXEL_SIZE, this.y * GRID_SQUARE_SIZE - 4*PIXEL_SIZE, "yellow"), 750);
  };
  this.makePowerFalse = function() {powerMode = false;};
}

function handlePellet(i, j, speed) {
  let score = 0;
  if (grid[i][j].onBoard && grid[i][j].special) {
    pellets--;
    powerPellet.play();
    score = 50;
    powerMode = true;
    scaredGhost.loop = true;
    scaredGhost.play();
    powerTimer = determinePowerTime(); //based on level
    window.requestAnimationFrame(function powerModeDeactivate() {
      powerTimer -= 1000/60;
      if (powerTimer <= 0) {
        powerTimer = 0;
        powerMode = false;
        scaredGhost.loop = false;
        scaredGhost.pause();
        scaredGhost.currentTime = 0; //restarts
      } else window.requestAnimationFrame(powerModeDeactivate);
    });
  } else if (grid[i][j].fruit !== 0) {
    score = grid[i][j].fruit;
  } else if (grid[i][j].onBoard) {
    score = 10;
    pellets--;
    (pellets % 2 === 1) ? chompMusic2.play() : chompMusic1.play();
    speedTimeout = 500*speed/REF_SPEED; //this timeout is necessary. Simply setting it to false if no pellet creates speed up between pellets (due to how they are checked)
    if (!eatingPellets) {//timer resets when eating more pellets
      eatingPellets = true;
      window.requestAnimationFrame(speedLength);
    }
    eatingPellets = true;
  } 
  grid[i][j].onBoard = false;
  return score;
  
}
function determineSpeed() {
  /*https://www.gamasutra.com/view/feature/132330/the_pacman_dossier.php?page=3*/
  if (level === 1) {
    if (powerMode && eatingPellets) return REF_SPEED * 0.79;
    else if (powerMode) return REF_SPEED * 0.9;
    else if (eatingPellets) {return REF_SPEED * 0.71;}
    else {return REF_SPEED * 0.80;}
  } else if (level <= 4) {
    if (powerMode && eatingPellets) return REF_SPEED * 0.83;
    else if (powerMode) return REF_SPEED * 0.95;
    else if (eatingPellets) return REF_SPEED * 0.79;
    else return REF_SPEED * 0.90;
  } else if (level <= 20) {
    if (powerMode && eatingPellets) return REF_SPEED * 0.87;
    else if (powerMode) return REF_SPEED * 1.00;
    else if (eatingPellets) return REF_SPEED * 0.87;
    else return REF_SPEED * 1.00;
  } else {
    if (eatingPellets) return REF_SPEED * 0.79;
    else return REF_SPEED * 0.90;
  }
}
function determinePowerTime() {
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
}
function speedLength() {
  speedTimeout -= 1000/60;
  if (speedTimeout > 0) window.requestAnimationFrame(speedLength);
  else eatingPellets = false;
}
export function updatePowerTimer(frames) { //for when there is a pause
  powerTimer += frames * 1000/60;
}