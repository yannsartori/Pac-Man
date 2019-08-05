import {DISTANCE_BETWEEN_PELLETS, PIXEL_SIZE, WIDTH, HEIGHT, SIZE_OF_PELLET, GRID_SQUARE_SIZE, FRUIT_POS, LEFT, UP, RIGHT, DOWN, beginningMusic, deathMusic, fruitMusic, eatGhostMusic, numbers} from "./constants.js";
import {Pellet, grid, drawGrid, drawPellets, repopulatePellets} from "./gridData.js";
import {PacMan, powerMode, updatePowerTimer} from "./pacman.js";
import {fruits} from "./fruit.js";
import {drawScore, drawLives, gameOver} from "./gui.js";
import {ghosts, ghostUpdateLevel, ghostUpdatePacManCoords, ghostUpdatePelletCount, scatterModeSwitches, ghostReset, updateFlash} from "./ghosts.js";
/*
* TODO:
* Fix pacman so that he snaps to the pellets (maybe)
* make it so ghosts don't turn around when doing a chase mode recalculation
* fix ghosts turning around over intersections
* fix eaten ghost issue
*/

//M
//first time stuff
export let pacMan = new PacMan();
let keyDown = null;
let level = 0;
let pelletCount = 244;
let placeFruit = false;
let displayFruit = -1;
let restartLevel = false;
let ghostConsumePause = 0; //the slight pause when pacman eats a ghost
let frame = 0;
let fruitDrawInfo = [false, 45, 0]; //to draw the score once consumed. [drawScore, framesOnScreen, valToDraw]
let mainCanvas = document.getElementById("main");

drawGrid();
pacMan.drawPacMan();
drawLives(pacMan.lives, pacMan.radius);
for (let elem of ghosts) elem.draw(RIGHT);

let playLevel = function(restart) {
  if (!restart) { //we didn't die
    level++;
    pacMan.updateLevel(level);
    ghostUpdateLevel(level);
    ghostReset(false); //false for we didn't die
    pelletCount = 244;
  } else {
    restartLevel = false;
    ghostReset(true);
  }
  scatterModeSwitches(); //resets the timing between aggressive and passive modes for ghost
  window.requestAnimationFrame(smoothMovement);
  window.requestAnimationFrame(ghostBehaviour);
  window.requestAnimationFrame(drawEntities);
  window.requestAnimationFrame(checkPellets);
};

function checkPellets() {
  if (ghostConsumePause > 0) { 
    window.requestAnimationFrame(checkPellets);
    return;
  }
  if (pelletCount === 244 - 70 || pelletCount === 244 - 170) {
    addFruit();
  }
  if (pelletCount === 0) { //level over
    setTimeout(function() {
      keyDown = null;
      pacMan.makePowerFalse();
      clearScreen();
      ghostReset(false);
      for (let ghost of ghosts) ghost.draw();
      repopulatePellets();
      resetPositions();
      beginningMusic.play();
      setTimeout(playLevel, Math.round(beginningMusic.duration*1000));
    }, 1000);
  }
  if (pelletCount !== 0 && !restartLevel) {
    window.requestAnimationFrame(checkPellets);
  }    
}

function resetPositions() {
  pacMan.resetPosition();
  drawEntities();
}
function removeFruit() {
  fruitMusic.play();
  fruitDrawInfo[0] = true; fruitDrawInfo[2] = grid[Math.ceil(FRUIT_POS[1])][FRUIT_POS[0]].fruit;
  grid[Math.ceil(FRUIT_POS[1])][FRUIT_POS[0]].fruit = 0;
  displayFruit = -1;
}

function addFruit() {
  if (level === 1 || level === 2) displayFruit = level - 1;
  else if (level < 13) displayFruit = Math.ceil(level / 2);
  else displayFruit = fruits.length - 1;
  grid[Math.ceil(FRUIT_POS[1])][FRUIT_POS[0]].fruit = fruits[displayFruit].points;
  setTimeout(() => {displayFruit = -1; grid[Math.ceil(FRUIT_POS[1])][FRUIT_POS[0]].fruit = 0}, 10000); //the fruit gets removed after 10s, or if eaten
}

function ghostBehaviour() {
  if (ghostConsumePause > 0) {
    window.requestAnimationFrame(ghostBehaviour);
    return;
  }
  let collision = false;
  ghostUpdatePacManCoords(pacMan.getDrawingInfo()); //passes coords, direction, and radius (needed for movement and collision detection)
  for (let ghost of ghosts) {
    collision = ghost.move();
    if (collision && (!powerMode || ghost.fright[1])) {//ghost.fright[1] is true when a ghost was eaten and it is still powerMode
      onDeath();
      break;
    }
    else if (collision && !ghost.dead) {
      pacMan.ghostEat();
      eatGhostMusic.play();
      ghost.dead = true;
      clearScreen();
      drawPellets();
      if (displayFruit >= 0) {
        fruits[displayFruit].draw();
      }
      for (let elem of ghosts) {
        if (elem.dead) elem.consumeDraw(); //shows point vals
        else elem.draw();
      }
      ghostConsumePause = 15;
      updatePowerTimer(ghostConsumePause); //increases duration by 15 frames
      updateFlash(ghostConsumePause);
      window.requestAnimationFrame(function ghostConsumePauseCallback() {
        ghostConsumePause--;
        if (ghostConsumePause > 0) window.requestAnimationFrame(ghostConsumePauseCallback);
      });
    }
  }
  ghostUpdatePelletCount(pelletCount);
  if (pelletCount !== 0 && !restartLevel) window.requestAnimationFrame(ghostBehaviour);
}

function onDeath() {
  pacMan.lives--;
  restartLevel = true;
  setTimeout(function() {
      keyDown = null;
      clearScreen();
      pacMan.deathAnimation();
      deathMusic.play();
      if (pacMan.lives === 0) {
        setTimeout(() => gameOver(pacMan.score), Math.round(deathMusic.duration*1000 + 250));
        return;
      } else setTimeout(() => {resetPositions(); playLevel(true);}, Math.round(beginningMusic.duration*1000));
    }, 1000);
}

//V

function drawEntities() {
  if (ghostConsumePause > 0) {
    window.requestAnimationFrame(drawEntities);
    return;
  }
  clearScreen();
  if (frame === 30) frame = 0;
  drawPellets((frame < 15)); //.25s flashes for power pellets (PP)
  frame++;
  if (displayFruit >= 0) {
    fruits[displayFruit].draw();
  }
  if (fruitDrawInfo[0]) drawFruitVal();
  pacMan.drawPacMan(pacMan.animationFrame);
  for (let ghost of ghosts) ghost.draw();
  drawScore(pacMan.score);
  drawLives(pacMan.lives, pacMan.radius);
  if (pelletCount !== 0 && !restartLevel) window.requestAnimationFrame(drawEntities);
}

function clearScreen() {
  mainCanvas.getContext("2d").clearRect(0, 0, mainCanvas.width, mainCanvas.height);
}
function drawFruitVal() {
  let ctx = document.getElementById("main").getContext("2d");
  let LETTER_PIXEL = 2;
  let score = grid[Math.ceil(FRUIT_POS[1])][FRUIT_POS[0]].fruit;
  ctx.save();
  ctx.fillStyle = "white";
  for (let i = 0; i < (fruitDrawInfo[2].toString()).length; i++) 
    numbers[(fruitDrawInfo[2].toString())[i]](FRUIT_POS[0] * GRID_SQUARE_SIZE / 2 + 6*i, Math.ceil(FRUIT_POS[1]) * GRID_SQUARE_SIZE / 2, LETTER_PIXEL, 0, ctx);
  fruitDrawInfo[1]--;
  ctx.restore();
  if (fruitDrawInfo[1] === 0) { 
    fruitDrawInfo[0] = false;
    fruitDrawInfo[1] = 45;
  }
}
//C
mainCanvas.addEventListener("keydown", event => {
  if ([UP, DOWN, LEFT, RIGHT].includes(event.keyCode)) keyDown = event.keyCode;
  event.preventDefault();
});

function smoothMovement() {
  if (ghostConsumePause > 0) {
    window.requestAnimationFrame(smoothMovement);
    return;
  }
  if (keyDown) {
    let move = pacMan.move(keyDown);
    if (move[0] && !move[1]) pelletCount--; //[bool atePellet, bool ateFruit]
    if (move[1]) removeFruit();
  }
  if (pelletCount !== 0 && !restartLevel) window.requestAnimationFrame(smoothMovement);
}
setTimeout(() => {
  beginningMusic.play();
  setTimeout(playLevel, Math.round(beginningMusic.duration*1000));
}, 1000);