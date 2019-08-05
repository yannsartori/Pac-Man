//There was probably a better way to do the below...
import {DISTANCE_BETWEEN_PELLETS, PIXEL_SIZE, WIDTH, HEIGHT, SIZE_OF_PELLET, GRID_SQUARE_SIZE} from "./constants.js";
let canvas = document.getElementById("maze"); //only drawn on once
let ctx = canvas.getContext("2d");
let dCanvas = document.getElementById("main"); //(d)ynamic canvas
let dctx = dCanvas.getContext("2d");
ctx.fillStyle = "black";


export function Pellet(special, onBoard) {
  this.special = special; //power pellet
  this.onBoard = onBoard;
  this.fruit = 0;
}
//just for shortening purposes...
function p() {return new Pellet(false, true);} //p(ellet)
function f() {return new Pellet(false, false);} // f(alse) i.e. consumed
function s() {return new Pellet(true, true);} // s(pecial)
function n() {return null;} //n(ull)
/* http://www.todayifoundout.com/wp-content/uploads/2013/08/pacman.jpg .*/
/* https://youtu.be/E4rVgZ3FFYE?t=62 */
export let grid = [
[n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n()],
[n(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), n(), n(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), n()],
[n(), p(), n(), n(), n(), n(), p(), n(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), n(), p(), n(), n(), n(), n(), p(), n()],
[n(), s(), n(), n(), n(), n(), p(), n(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), n(), p(), n(), n(), n(), n(), s(), n()],
[n(), p(), n(), n(), n(), n(), p(), n(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), n(), p(), n(), n(), n(), n(), p(), n()],
[n(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), n()],
[n(), p(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), p(), n()],
[n(), p(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), p(), n()],
[n(), p(), p(), p(), p(), p(), p(), n(), n(), p(), p(), p(), p(), n(), n(), p(), p(), p(), p(), n(), n(), p(), p(), p(), p(), p(), p(), n()],
[n(), n(), n(), n(), n(), n(), p(), n(), n(), n(), n(), n(), f(), n(), n(), f(), n(), n(), n(), n(), n(), p(), n(), n(), n(), n(), n(), n()],
[n(), n(), n(), n(), n(), n(), p(), n(), n(), n(), n(), n(), f(), n(), n(), f(), n(), n(), n(), n(), n(), p(), n(), n(), n(), n(), n(), n()],
[n(), n(), n(), n(), n(), n(), p(), n(), n(), f(), f(), f(), f(), f(), f(), f(), f(), f(), f(), n(), n(), p(), n(), n(), n(), n(), n(), n()],
[n(), n(), n(), n(), n(), n(), p(), n(), n(), f(), n(), n(), n(), n(), n(), n(), n(), n(), f(), n(), n(), p(), n(), n(), n(), n(), n(), n()],
[f(), f(), f(), f(), f(), f(), p(), f(), f(), f(), n(), n(), n(), n(), n(), n(), n(), n(), f(), f(), f(), p(), f(), f(), f(), f(), f(), f()],
[n(), n(), n(), n(), n(), n(), p(), f(), f(), f(), n(), n(), n(), n(), n(), n(), n(), n(), f(), f(), f(), p(), n(), n(), n(), n(), n(), n()],
[n(), n(), n(), n(), n(), n(), p(), f(), f(), f(), n(), n(), n(), n(), n(), n(), n(), n(), f(), f(), f(), p(), n(), n(), n(), n(), n(), n()],
[n(), n(), n(), n(), n(), n(), p(), n(), n(), f(), n(), n(), n(), n(), n(), n(), n(), n(), f(), n(), n(), p(), n(), n(), n(), n(), n(), n()],
[n(), n(), n(), n(), n(), n(), p(), n(), n(), f(), f(), f(), f(), f(), f(), f(), f(), f(), f(), n(), n(), p(), n(), n(), n(), n(), n(), n()],
[n(), n(), n(), n(), n(), n(), p(), n(), n(), f(), n(), n(), n(), n(), n(), n(), n(), n(), f(), n(), n(), p(), n(), n(), n(), n(), n(), n()],
[n(), n(), n(), n(), n(), n(), p(), n(), n(), f(), n(), n(), n(), n(), n(), n(), n(), n(), f(), n(), n(), p(), n(), n(), n(), n(), n(), n()],
[n(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), n(), n(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), n()],
[n(), p(), n(), n(), n(), n(), p(), n(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), n(), p(), n(), n(), n(), n(), p(), n()],
[n(), s(), n(), n(), n(), n(), p(), n(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), n(), p(), n(), n(), n(), n(), s(), n()],
[n(), p(), p(), p(), n(), n(), p(), p(), p(), p(), p(), p(), p(), f(), f(), p(), p(), p(), p(), p(), p(), p(), n(), n(), p(), p(), p(), n()],
[n(), n(), n(), p(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), p(), n(), n(), n()],
[n(), n(), n(), p(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), p(), n(), n(), n()],
[n(), p(), p(), p(), p(), p(), p(), n(), n(), p(), p(), p(), p(), n(), n(), p(), p(), p(), p(), n(), n(), p(), p(), p(), p(), p(), p(), n()],
[n(), p(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), p(), n()],
[n(), p(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), p(), n(), n(), p(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), p(), n()],
[n(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), p(), n()],
[n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n(), n()]];
let referenceGrid = deepCopyGrid(grid);
function deepCopyGrid(grid) { //for restoration purposes
  let newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    newGrid.push([]);
    for (let j = 0; j < grid[i].length; j++) {
      if (!grid[i][j]) newGrid[i].push(n());
      else if(grid[i][j].special) newGrid[i].push(s());
      else if(grid[i][j].onBoard) newGrid[i].push(p());
      else newGrid[i].push(f());
    }
  }
  return newGrid;
}
function drawPellet(top, left, special) {
  if (special) {
    dctx.fillRect((left * SIZE_OF_PELLET * DISTANCE_BETWEEN_PELLETS) - SIZE_OF_PELLET, (top * SIZE_OF_PELLET * DISTANCE_BETWEEN_PELLETS) - 2 *SIZE_OF_PELLET, 3 * SIZE_OF_PELLET, 5 * SIZE_OF_PELLET);
    dctx.fillRect((left * SIZE_OF_PELLET * DISTANCE_BETWEEN_PELLETS) - 2 * SIZE_OF_PELLET, (top * SIZE_OF_PELLET * DISTANCE_BETWEEN_PELLETS) - SIZE_OF_PELLET, 5 * SIZE_OF_PELLET, 3 * SIZE_OF_PELLET);
  } else dctx.fillRect((left * SIZE_OF_PELLET * DISTANCE_BETWEEN_PELLETS), (top * SIZE_OF_PELLET * DISTANCE_BETWEEN_PELLETS), SIZE_OF_PELLET,  SIZE_OF_PELLET);
}
export function drawGrid() {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.fillStyle = "blue";
  //The following below all deal with drawing the outline
  //Based on this photo:
  /* http://www.todayifoundout.com/wp-content/uploads/2013/08/pacman.jpg .*/
  let outLineTopLeft = function(i, j) {
    ctx.fillRect(3*PIXEL_SIZE + j*GRID_SQUARE_SIZE, PIXEL_SIZE + i*GRID_SQUARE_SIZE, 7*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(2*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 2*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(PIXEL_SIZE + j*GRID_SQUARE_SIZE, 3*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, 7*PIXEL_SIZE);
    ctx.fillRect(4*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 3*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 6*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(3*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 4*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, 6*PIXEL_SIZE);
  };
  let outLineTopLeftSpec = function(i, j) {
    ctx.fillRect(3*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 7*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 7*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(2*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 8*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(PIXEL_SIZE + j*GRID_SQUARE_SIZE, 9*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, 7*PIXEL_SIZE);
    ctx.fillRect(4*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 9*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 6*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(3*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 10*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, 6*PIXEL_SIZE);
  };
  let outLineTopRight = function(i, j) {
    ctx.fillRect(j*GRID_SQUARE_SIZE, PIXEL_SIZE + i*GRID_SQUARE_SIZE, 8*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(8*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 2*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(9*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 3*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, 7*PIXEL_SIZE);
    ctx.fillRect(j*GRID_SQUARE_SIZE, 3*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 7*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(7*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 4*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, 6*PIXEL_SIZE);
  };
  let outLineTopRightSpec = function(i, j) {
    ctx.fillRect(j*GRID_SQUARE_SIZE, 7*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 8*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(8*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 8*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(9*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 9*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, 7*PIXEL_SIZE);
    ctx.fillRect(j*GRID_SQUARE_SIZE, 9*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 7*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(7*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 10*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, 6*PIXEL_SIZE);
  };
  let outLineBottomRight = function(i, j) {
    ctx.fillRect(9*PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, PIXEL_SIZE, 8*PIXEL_SIZE);
    ctx.fillRect(8*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 8*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(j*GRID_SQUARE_SIZE, 9*PIXEL_SIZE   + i*GRID_SQUARE_SIZE, 8*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(7*PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, PIXEL_SIZE, 7*PIXEL_SIZE);
    ctx.fillRect(j*GRID_SQUARE_SIZE, 7*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 7*PIXEL_SIZE, PIXEL_SIZE);
  };
  let outLineBottomRightSpec = function(i, j) {
    ctx.fillRect(3*PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, PIXEL_SIZE, 8*PIXEL_SIZE);
    ctx.fillRect(2*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 8*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(j*GRID_SQUARE_SIZE, 9*PIXEL_SIZE   + i*GRID_SQUARE_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, PIXEL_SIZE, 7*PIXEL_SIZE);
    ctx.fillRect(j*GRID_SQUARE_SIZE, 7*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
  };
  //It wasn't lining up correctly, so I had to do some wizadry
  let weirdCaseOne = function(i, j) {
    ctx.fillRect(j*GRID_SQUARE_SIZE, PIXEL_SIZE + i*GRID_SQUARE_SIZE, 7*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(7*PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE - 5*PIXEL_SIZE, PIXEL_SIZE, 6*PIXEL_SIZE);
    ctx.fillRect(j*GRID_SQUARE_SIZE, 3*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 8*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(8*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 2*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(9*PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE - 4*PIXEL_SIZE, PIXEL_SIZE, 6*PIXEL_SIZE);
  };
  let outLineBottomLeft = function(i, j) {
    ctx.fillRect(PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, PIXEL_SIZE, 8*PIXEL_SIZE);
    ctx.fillRect(2*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 8*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(3*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 9*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 7*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(3*PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, PIXEL_SIZE, 7*PIXEL_SIZE);
    ctx.fillRect(4*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 7*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 6*PIXEL_SIZE, PIXEL_SIZE);
  };
  let outLineBottomLeftSpec = function(i, j) {
    ctx.fillRect(7*PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, PIXEL_SIZE, 8*PIXEL_SIZE);
    ctx.fillRect(8*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 8*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(9*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 9*PIXEL_SIZE + i*GRID_SQUARE_SIZE, GRID_SQUARE_SIZE + PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(9*PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, PIXEL_SIZE, 7*PIXEL_SIZE);
    ctx.fillRect(10*PIXEL_SIZE + j*GRID_SQUARE_SIZE, 7*PIXEL_SIZE + i*GRID_SQUARE_SIZE, GRID_SQUARE_SIZE, PIXEL_SIZE);
  };
  let outLineTopHorizontal = function(i, j) {
    ctx.fillRect(j*GRID_SQUARE_SIZE, PIXEL_SIZE + i*GRID_SQUARE_SIZE, GRID_SQUARE_SIZE, PIXEL_SIZE);
    ctx.fillRect(j*GRID_SQUARE_SIZE, 3*PIXEL_SIZE + i*GRID_SQUARE_SIZE, GRID_SQUARE_SIZE, PIXEL_SIZE);
  };
  let outLineBottomHorizontal = function(i, j) {
    ctx.fillRect(j*GRID_SQUARE_SIZE, 9*PIXEL_SIZE + i*GRID_SQUARE_SIZE, GRID_SQUARE_SIZE, PIXEL_SIZE);
    ctx.fillRect(j*GRID_SQUARE_SIZE, 7*PIXEL_SIZE + i*GRID_SQUARE_SIZE, GRID_SQUARE_SIZE, PIXEL_SIZE);
  };
  let outLineLeftVertical = function(i, j) {
    ctx.fillRect(PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, PIXEL_SIZE, GRID_SQUARE_SIZE);
    ctx.fillRect(3*PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, PIXEL_SIZE, GRID_SQUARE_SIZE);
  };
  let outLineRightVertical = function(i, j) {
    ctx.fillRect(7*PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, PIXEL_SIZE, GRID_SQUARE_SIZE);
    ctx.fillRect(9*PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE, PIXEL_SIZE, GRID_SQUARE_SIZE);
    
  };
  outLineTopLeft(0,0);
  for (let j = 1; j <= 11; j++) outLineTopHorizontal(0,j);
  outLineTopRight(0, 12);
  outLineRightVertical(1,12);
  outLineRightVertical(2,12);
  outLineBottomLeftSpec(3, 12);
  outLineBottomRightSpec(3, 14); //weird inconsistency
  outLineLeftVertical(1, 14);
  outLineLeftVertical(2, 14);
  outLineTopLeft(0, 14);
  for (let j = 15; j < WIDTH - 2; j++) outLineTopHorizontal(0, j);
  outLineTopRight(0, WIDTH - 2);
  for (let i = 1; i <= 7; i++) outLineRightVertical(i, WIDTH - 2);
  outLineBottomRight(8, WIDTH - 2);
  for (let j = WIDTH - 3; j >= WIDTH - 5; j--) outLineBottomHorizontal(8, j);
  outLineTopLeftSpec(8, WIDTH - 6);
  outLineLeftVertical(9, WIDTH - 6);
  outLineLeftVertical(10, WIDTH - 6);
  outLineBottomLeft(11, WIDTH - 6);
  for (let j = WIDTH - 5; j < WIDTH - 1; j++) outLineBottomHorizontal(11, j);
  outLineTopLeftSpec(13, WIDTH - 6);
  for (let j = WIDTH - 5; j < WIDTH - 1; j++) outLineBottomHorizontal(13, j);
  for (let i = 14; i<= 17; i++) outLineLeftVertical(i, WIDTH - 6);
  outLineBottomLeft(18, WIDTH - 6);
  for (let j = WIDTH - 5; j < WIDTH - 2; j++) outLineBottomHorizontal(18, j);
  outLineTopRightSpec(18, WIDTH - 2);
  for (let i = 19; i <= 22; i++) outLineRightVertical(i, WIDTH - 2);
  outLineBottomRight(23, WIDTH - 2);
  outLineTopLeftSpec(23, WIDTH - 3);
  outLineBottomLeft(24, WIDTH - 3);
  outLineTopRightSpec(24, WIDTH - 2);
  for (let i = 25; i <= 28; i++) outLineRightVertical(i, WIDTH - 2);
  outLineBottomRight(29, WIDTH - 2);
  for (let j = WIDTH - 3; j >= 1; j--) outLineBottomHorizontal(29, j);
  outLineBottomLeft(29, 0);
  for (let i = 28; i >= 26; i--) outLineLeftVertical(i, 0);
  outLineTopLeft(25, 0);
  weirdCaseOne(25, 1);
  outLineTopRightSpec(23, 1);
  outLineBottomLeft(23, 0);
  for (let i = 22; i >= 19; i--) outLineLeftVertical(i, 0);
  outLineTopLeftSpec(18, 0);
  for (let j = 1; j <= 3; j++) outLineBottomHorizontal(18, j);
  outLineBottomRight(18, 4);
  for (let i = 17; i >= 14; i--) outLineRightVertical(i, 4);
  outLineTopRightSpec(13, 4);
  for (let j = 3; j >= 0; j--) outLineBottomHorizontal(13, j);
  for (let j = 0; j <= 3; j++) outLineBottomHorizontal(11, j);
  outLineBottomRight(11, 4);
  outLineRightVertical(10, 4);
  outLineRightVertical(9, 4);
  outLineTopRightSpec(8, 4);
  for (let j = 3; j > 0; j--) outLineBottomHorizontal(8, j);
  outLineBottomLeft(8, 0);
  for (let i = 7; i > 0; i--) outLineLeftVertical(i, 0);
  
  //the following below deals with drawing the interior
  //the offset parameters just made it so I didn't have like 20 "weird cases"
  //Plus it gives more precision
  let inLineTopLeft = function(i , j, xOffSet, yOffSet) {
    if (!xOffSet) xOffSet = 0;
    if (!yOffSet) yOffSet = 0;
    ctx.fillRect((2+xOffSet)*PIXEL_SIZE + j*GRID_SQUARE_SIZE, (yOffSet)*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 8*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect((1+xOffSet)*PIXEL_SIZE + j*GRID_SQUARE_SIZE, (1+yOffSet)*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(xOffSet*PIXEL_SIZE + j*GRID_SQUARE_SIZE, (2+yOffSet)*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, 8*PIXEL_SIZE);
  };
  let inLineTopRight = function(i, j, xOffSet, yOffSet) {
    if (!xOffSet) xOffSet = 0;
    if (!yOffSet) yOffSet = 0;
    ctx.fillRect(j*GRID_SQUARE_SIZE + xOffSet*PIXEL_SIZE, i*GRID_SQUARE_SIZE + yOffSet*PIXEL_SIZE, 8*PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect((8+xOffSet)*PIXEL_SIZE + j*GRID_SQUARE_SIZE, (1+yOffSet)*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect((9+xOffSet)*PIXEL_SIZE + j*GRID_SQUARE_SIZE, (2+yOffSet)*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, 8*PIXEL_SIZE);
  };
  let inLineBottomRight = function(i, j, xOffSet, yOffSet) {
    if (!xOffSet) xOffSet = 0;
    if (!yOffSet) yOffSet = 0;
    ctx.fillRect((9+xOffSet)*PIXEL_SIZE + j*GRID_SQUARE_SIZE, yOffSet*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, 8*PIXEL_SIZE);
    ctx.fillRect((8+xOffSet)*PIXEL_SIZE + j*GRID_SQUARE_SIZE, (8+yOffSet)*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect(xOffSet*PIXEL_SIZE + j*GRID_SQUARE_SIZE, (9+yOffSet)*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 8*PIXEL_SIZE, PIXEL_SIZE);
  };
  let inLineBottomLeft = function(i, j, xOffSet, yOffSet) {
    if (!xOffSet) xOffSet = 0;
    if (!yOffSet) yOffSet = 0;
    ctx.fillRect(xOffSet*PIXEL_SIZE +   j*GRID_SQUARE_SIZE, yOffSet*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, 8*PIXEL_SIZE); 
    ctx.fillRect((1+xOffSet)*PIXEL_SIZE + j*GRID_SQUARE_SIZE, (8+yOffSet)*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    ctx.fillRect((2+xOffSet)*PIXEL_SIZE + j*GRID_SQUARE_SIZE, (9+yOffSet)*PIXEL_SIZE + i*GRID_SQUARE_SIZE, 8*PIXEL_SIZE, PIXEL_SIZE);
  };
  let inLineTopHorizontal = function(i, j, xOffSet, yOffSet) {
    if (!xOffSet) xOffSet = 0;
    if (!yOffSet) yOffSet = 0;
    ctx.fillRect(j*GRID_SQUARE_SIZE + (-2+xOffSet)*PIXEL_SIZE , i*GRID_SQUARE_SIZE + yOffSet*PIXEL_SIZE, GRID_SQUARE_SIZE + 4*PIXEL_SIZE, PIXEL_SIZE);
  };
  let inLineBottomHorizontal = function(i, j, xOffSet, yOffSet) {
    if (!xOffSet) xOffSet = 0;
    if (!yOffSet) yOffSet = 0;
    ctx.fillRect(xOffSet*PIXEL_SIZE + j*GRID_SQUARE_SIZE, (9+yOffSet)*PIXEL_SIZE + i*GRID_SQUARE_SIZE, GRID_SQUARE_SIZE, PIXEL_SIZE);
  };
  let inLineLeftVertical = function(i, j, xOffSet, yOffSet) {
    if (!xOffSet) xOffSet = 0;
    if (!yOffSet) yOffSet = 0;
    ctx.fillRect(xOffSet*PIXEL_SIZE + j*GRID_SQUARE_SIZE, i*GRID_SQUARE_SIZE + (-2+yOffSet)*PIXEL_SIZE, PIXEL_SIZE, GRID_SQUARE_SIZE);
  };
  let inLineRightVertical = function(i, j, xOffSet, yOffSet) {
    if (!xOffSet) xOffSet = 0;
    if (!yOffSet) yOffSet = 0;
    ctx.fillRect((9+xOffSet)*PIXEL_SIZE + j*GRID_SQUARE_SIZE, yOffSet*PIXEL_SIZE + i*GRID_SQUARE_SIZE, PIXEL_SIZE, GRID_SQUARE_SIZE);
  };
  //I'm bad at drawing
  let transToImproveGraphic = 6;
  inLineTopLeft(2, 2);
  inLineTopHorizontal(2, 3);
  inLineTopRight(2, 4);
  inLineBottomRight(3, 4);
  inLineBottomHorizontal(3, 3);
  inLineBottomLeft(3, 2);
  
  inLineTopLeft(2, 7);
  inLineTopHorizontal(2, 8);
  inLineTopHorizontal(2, 9);
  inLineTopRight(2, 10);
  inLineBottomRight(3, 10);
  inLineBottomHorizontal(3, 9);
  inLineBottomHorizontal(3, 8);
  inLineBottomLeft(3, 7);
  
  inLineTopLeft(2, 16);
  inLineTopHorizontal(2, 17);
  inLineTopHorizontal(2, 18);
  inLineTopRight(2, 19);
  inLineBottomRight(3, 19);
  inLineBottomHorizontal(3, 18);
  inLineBottomHorizontal(3, 17);
  inLineBottomLeft(3, 16);
  
  ctx.translate(0, -transToImproveGraphic);
  
  inLineTopLeft(2, 22);
  inLineTopHorizontal(2, 23);
  inLineTopRight(2, 24);
  inLineBottomRight(3, 24);
  inLineBottomHorizontal(3, 23);
  inLineBottomLeft(3, 22);
  
  inLineTopLeft(6, 2);
  inLineTopHorizontal(6, 3);
  inLineTopRight(6, 4);
  inLineBottomLeft(6, 2);
  inLineBottomHorizontal(6, 3);
  inLineBottomRight(6,4);
  
  inLineTopLeft(6, 7);
  inLineTopRight(6, 7, 1);
  inLineLeftVertical(7, 8);
  inLineLeftVertical(8, 8);
  inLineBottomLeft(8, 8);
  inLineBottomHorizontal(8, 9);
  inLineBottomHorizontal(8, 10);
  inLineTopRight(9, 10, 2, -1);
  inLineBottomRight(9, 10, 2, -1);
  inLineBottomHorizontal(9, 9, -1, -1);
  inLineBottomHorizontal(9, 10, -1, -1);
  inLineLeftVertical(7,7);
  inLineLeftVertical(8,7);
  inLineLeftVertical(9,7);
  inLineLeftVertical(10,7);
  inLineLeftVertical(11,7);
  inLineBottomLeft(11, 7);
  inLineBottomRight(11,7);
  inLineRightVertical(10, 7);
  inLineTopLeft(10, 8, -1, -2);
  
  inLineTopLeft(6, 10);
  inLineTopHorizontal(6,11);
  inLineTopHorizontal(6,12);
  inLineTopHorizontal(6,13);
  inLineTopHorizontal(6,14);
  inLineTopHorizontal(6,15);
  inLineTopRight(6,16);
  inLineBottomRight(6,16);
  inLineBottomHorizontal(6,15);
  inLineTopLeft(7,14, 0, -1);
  inLineLeftVertical(8, 14);
  inLineLeftVertical(9, 14);
  inLineBottomRight(9, 13, 1);
  inLineBottomLeft(6, 10);
  inLineBottomHorizontal(6,11);
  inLineTopRight(7, 12, 0, -1);
  inLineRightVertical(7, 12, 0, 1);
  inLineRightVertical(8, 12, 0, 1);
  inLineBottomLeft(9, 13, -1);
  
  inLineTopLeft(6,19);
  inLineTopRight(6,19);
  inLineLeftVertical(7,19, 0, 2);
  inLineBottomRight(8, 18, 1);
  inLineBottomHorizontal(8, 17, 1);
  inLineBottomHorizontal(8, 16, 2);
  inLineTopLeft(9, 16, 0, -1);
  inLineBottomLeft(9, 16, 0, -1);
  inLineBottomHorizontal(9, 17, 0, -1);
  inLineBottomHorizontal(9, 17, 1, -1);
  inLineTopRight(10, 18, 1, -2);
  inLineRightVertical(11, 18, 1, -2);
  inLineBottomLeft(11, 19);
  inLineBottomRight(11, 19);
  inLineRightVertical(10, 19);
  inLineRightVertical(9, 19);
  inLineRightVertical(8, 19);
  inLineRightVertical(7, 19);
        
  inLineTopLeft(6, WIDTH-6);
  inLineTopHorizontal(6, WIDTH-5);
  inLineTopRight(6, WIDTH-4);
  inLineBottomLeft(6, WIDTH-6);
  inLineBottomHorizontal(6, WIDTH-5);
  inLineBottomRight(6,WIDTH-4);
  
  ctx.translate(0, transToImproveGraphic);
  
  
  inLineBottomHorizontal(11, 10, -3, 0);
  inLineBottomHorizontal(11, 10, 0, 0);
  inLineBottomHorizontal(11, 11, 0, 0);
  inLineBottomHorizontal(11, 12, 0, 0);
  inLineBottomHorizontal(11, 15, 0, 0);
  ctx.fillStyle = "white";
  inLineBottomHorizontal(11, 13, -8, 0);
  inLineBottomHorizontal(11, 13, 0, 0);
  inLineBottomHorizontal(11, 14, 0, 0);
  inLineBottomHorizontal(11, 14, 0, 0);
  ctx.fillStyle = "blue";
  inLineBottomHorizontal(11, 16, -1, 0);
  inLineBottomHorizontal(11, 16, 1, 0);
  
  inLineRightVertical(12, 9, -2);
  inLineRightVertical(13, 9, -2);
  inLineRightVertical(14, 9, -2);
  inLineRightVertical(15, 9, -2);
  inLineTopHorizontal(16, 10, -1);
  inLineTopHorizontal(16, 11, -1);
  inLineTopHorizontal(16, 12, -1);
  inLineTopHorizontal(16, 13, -1);
  inLineTopHorizontal(16, 14, -1);
  inLineTopHorizontal(16, 15, -1);
  inLineTopHorizontal(16, 16, -1);
  inLineRightVertical(15, 16, 1);
  inLineRightVertical(14, 16, 1);
  inLineRightVertical(13, 16, 1);
  inLineRightVertical(12, 16, 1);
  
  inLineTopLeft(16, 7); 
  inLineTopRight(16, 7);
  inLineLeftVertical(17, 7, 0, 2);
  inLineRightVertical(17, 7);
  inLineBottomLeft(18, 7);
  inLineBottomRight(18, 7);
  
  inLineTopLeft(18, 10);
  inLineTopHorizontal(18,11);
  inLineTopHorizontal(18,12);
  inLineTopHorizontal(18,13);
  inLineTopHorizontal(18,14);
  inLineTopHorizontal(18,15);
  inLineTopRight(18,16);
  inLineBottomRight(18,16);
  inLineBottomHorizontal(18,15);
  inLineTopLeft(19,14, 0, -1);
  inLineLeftVertical(20, 14);
  inLineLeftVertical(21, 14);
  inLineBottomRight(21, 13, 1);
  inLineBottomLeft(18, 10);
  inLineBottomHorizontal(18,11);
  inLineTopRight(19, 12, 0, -1);
  inLineRightVertical(19, 12, 0, 1);
  inLineRightVertical(20, 12, 0, 1);
  inLineBottomLeft(21, 13, -1);
  
  inLineTopLeft(16, 19); 
  inLineTopRight(16, 19);
  inLineLeftVertical(17, 19, 0, 2);
  inLineRightVertical(17, 19);
  inLineBottomLeft(18, 19);
  inLineBottomRight(18, 19);
  
  inLineTopLeft(21,2);
  inLineTopHorizontal(21, 3);
  inLineTopRight(21, 4);
  inLineRightVertical(22, 4);
  inLineRightVertical(23, 4);
  inLineBottomRight(24, 4);
  inLineBottomLeft(24, 4);
  inLineLeftVertical(23, 4, 0, 2);
  inLineLeftVertical(23, 4, 0, 1);
  inLineTopRight(22, 3, 1, -1);
  inLineBottomLeft(21, 2);
  inLineBottomHorizontal(21, 2, 2);
  
  inLineTopLeft(21, 7);
  inLineTopHorizontal(21, 8);
  inLineTopHorizontal(21, 9);
  inLineTopRight(21, 10);
  inLineBottomRight(21, 10);
  inLineBottomHorizontal(21, 9);
  inLineBottomHorizontal(21, 8);
  inLineBottomLeft(21, 7);
  
  inLineTopLeft(21, 16);
  inLineTopHorizontal(21, 17);
  inLineTopHorizontal(21, 18);
  inLineTopRight(21, 19);
  inLineBottomRight(21, 19);
  inLineBottomHorizontal(21, 18);
  inLineBottomHorizontal(21, 17);
  inLineBottomLeft(21, 16);
  
  inLineTopLeft(21, 22);
  inLineTopHorizontal(21, 23);
  inLineTopRight(21, 24);
  inLineBottomRight(21, 24);
  inLineBottomHorizontal(21, 23, 2);
  inLineTopLeft(22, 23, 0, -1);
  inLineLeftVertical(23, 23);
  inLineLeftVertical(24, 23);
  inLineBottomRight(24, 22, 1);
  inLineBottomLeft(24, 22);
  inLineLeftVertical(22, 22, 0, 2);
  inLineLeftVertical(23, 22, 0, 2);
  
  inLineTopLeft(27,2);
  inLineTopHorizontal(27, 3);
  inLineTopHorizontal(27, 4);
  inLineTopHorizontal(27, 5);
  inLineBottomRight(26, 6, 0, 1);
  inLineRightVertical(25, 6, 0, 1);
  inLineRightVertical(25, 6);
  inLineTopLeft(24, 7, -1);
  inLineTopRight(24, 7, 1);
  inLineLeftVertical(25, 8);
  inLineLeftVertical(25, 8, 0, 3);
  inLineBottomLeft(26, 8, 0, 1);
  inLineBottomHorizontal(26,9, 0, 1);
  inLineBottomHorizontal(26,9, 2, 1);
  inLineTopRight(27, 10, 2);
  inLineBottomRight(27, 10, 2, 0);
  inLineBottomHorizontal(27, 9, 2);
  for (let j = 9; j >= 3; j--) inLineBottomHorizontal(27,j);
  inLineBottomLeft(27, 2);
  
  inLineTopLeft(24, 10);
  inLineTopHorizontal(24,11);
  inLineTopHorizontal(24,12);
  inLineTopHorizontal(24,13);
  inLineTopHorizontal(24,14);
  inLineTopHorizontal(24,15);
  inLineTopRight(24,16);
  inLineBottomRight(24,16);
  inLineBottomHorizontal(24,15);
  inLineTopLeft(25,14, 0, -1);
  inLineLeftVertical(26, 14);
  inLineLeftVertical(27, 14);
  inLineBottomRight(27, 13, 1);
  inLineBottomLeft(24, 10);
  inLineBottomHorizontal(24,11);
  inLineTopRight(25, 12, 0, -1);
  inLineRightVertical(25, 12, 0, 1);
  inLineRightVertical(26, 12, 0, 1);
  inLineBottomLeft(27, 13, -1);
  
  inLineTopLeft(27, 16);
  inLineTopHorizontal(27, 17);
  inLineBottomRight(26, 18, 0, 1);
  inLineRightVertical(25, 18, 0, 1);
  inLineRightVertical(24, 18, 0, 2);
  inLineTopLeft(24, 19, -1);
  inLineTopRight(24, 19, 1);
  inLineLeftVertical(25, 20, 0, 3);
  inLineLeftVertical(25, 20);
  inLineBottomLeft(26, 20, 0, 1);
  inLineTopHorizontal(27, 21);
  inLineTopHorizontal(27, 22);
  inLineTopHorizontal(27, 23);
  inLineTopRight(27, 24, 2);
  inLineBottomRight(27, 24, 2);
  inLineBottomHorizontal(27, 23, 2);
  for (let j = 23; j >= 17; j--) inLineBottomHorizontal(27, j);
  inLineBottomLeft(27, 16);
  //pixel corrections
  ctx.fillStyle = "black";
  
  ctx.translate(0, -transToImproveGraphic);
  
  ctx.fillRect(2*GRID_SQUARE_SIZE, 6*GRID_SQUARE_SIZE, PIXEL_SIZE,2* PIXEL_SIZE);
  ctx.fillRect(2*GRID_SQUARE_SIZE, 6*GRID_SQUARE_SIZE + 8*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(5*GRID_SQUARE_SIZE - PIXEL_SIZE, 6*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(5*GRID_SQUARE_SIZE - PIXEL_SIZE, 6*GRID_SQUARE_SIZE + 8*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  
  ctx.fillRect(7*GRID_SQUARE_SIZE + PIXEL_SIZE, 6*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(8*GRID_SQUARE_SIZE - PIXEL_SIZE, 6*GRID_SQUARE_SIZE, PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(11*GRID_SQUARE_SIZE + PIXEL_SIZE, 9*GRID_SQUARE_SIZE - PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(11*GRID_SQUARE_SIZE + PIXEL_SIZE, 10*GRID_SQUARE_SIZE - 3*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(7*GRID_SQUARE_SIZE, 12*GRID_SQUARE_SIZE - PIXEL_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(8*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, 12*GRID_SQUARE_SIZE - PIXEL_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  
  ctx.fillRect(10*GRID_SQUARE_SIZE, 6*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(10*GRID_SQUARE_SIZE, 7*GRID_SQUARE_SIZE-2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(17*GRID_SQUARE_SIZE - PIXEL_SIZE, 6*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(17*GRID_SQUARE_SIZE-PIXEL_SIZE, 7*GRID_SQUARE_SIZE-2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  
  ctx.fillRect(19*GRID_SQUARE_SIZE, 6*GRID_SQUARE_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(20*GRID_SQUARE_SIZE -2* PIXEL_SIZE, 6*GRID_SQUARE_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(19*GRID_SQUARE_SIZE, 12*GRID_SQUARE_SIZE-PIXEL_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(20*GRID_SQUARE_SIZE -2* PIXEL_SIZE, 12*GRID_SQUARE_SIZE-PIXEL_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);

  ctx.fillRect(16*GRID_SQUARE_SIZE, 9*GRID_SQUARE_SIZE - PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(16*GRID_SQUARE_SIZE, 10*GRID_SQUARE_SIZE - 3*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  
  ctx.fillRect((WIDTH-6)*GRID_SQUARE_SIZE, 6*GRID_SQUARE_SIZE, PIXEL_SIZE,2* PIXEL_SIZE);
  ctx.fillRect((WIDTH-6)*GRID_SQUARE_SIZE, 6*GRID_SQUARE_SIZE + 8*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect((WIDTH-3)*GRID_SQUARE_SIZE - PIXEL_SIZE, 6*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect((WIDTH-3)*GRID_SQUARE_SIZE - PIXEL_SIZE, 6*GRID_SQUARE_SIZE + 8*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  
  ctx.translate(0, transToImproveGraphic);
  
  ctx.fillRect(7*GRID_SQUARE_SIZE, 16*GRID_SQUARE_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(8*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, 16*GRID_SQUARE_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(7*GRID_SQUARE_SIZE, 19*GRID_SQUARE_SIZE - PIXEL_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(8*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, 19*GRID_SQUARE_SIZE - PIXEL_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);

  ctx.fillRect(10*GRID_SQUARE_SIZE, 18*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(10*GRID_SQUARE_SIZE, 19*GRID_SQUARE_SIZE-2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(17*GRID_SQUARE_SIZE - PIXEL_SIZE, 18*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(17*GRID_SQUARE_SIZE-PIXEL_SIZE, 19*GRID_SQUARE_SIZE-2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  
  ctx.fillRect(19*GRID_SQUARE_SIZE, 16*GRID_SQUARE_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(20*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, 16*GRID_SQUARE_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(19*GRID_SQUARE_SIZE, 19*GRID_SQUARE_SIZE - PIXEL_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(20*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, 19*GRID_SQUARE_SIZE - PIXEL_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  
  ctx.fillRect(2*GRID_SQUARE_SIZE, 21*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(2*GRID_SQUARE_SIZE, 22*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(4*GRID_SQUARE_SIZE, 25*GRID_SQUARE_SIZE - PIXEL_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect(5*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, 25*GRID_SQUARE_SIZE - PIXEL_SIZE, 2*PIXEL_SIZE, PIXEL_SIZE);
  
  ctx.fillRect(7*GRID_SQUARE_SIZE, 21*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(7*GRID_SQUARE_SIZE, 22*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(11*GRID_SQUARE_SIZE - PIXEL_SIZE, 21*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(11*GRID_SQUARE_SIZE - PIXEL_SIZE, 22*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  
  ctx.fillRect(16*GRID_SQUARE_SIZE, 21*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(16*GRID_SQUARE_SIZE, 22*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(20*GRID_SQUARE_SIZE - PIXEL_SIZE, 21*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(20*GRID_SQUARE_SIZE - PIXEL_SIZE, 22*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  
  ctx.fillRect((WIDTH-3)*GRID_SQUARE_SIZE - PIXEL_SIZE, 21*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect((WIDTH-3)*GRID_SQUARE_SIZE - PIXEL_SIZE, 22*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect((WIDTH-5)*GRID_SQUARE_SIZE - PIXEL_SIZE, 25*GRID_SQUARE_SIZE - PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillRect((WIDTH-6)*GRID_SQUARE_SIZE + PIXEL_SIZE, 25*GRID_SQUARE_SIZE - PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
  
  ctx.fillRect(2*GRID_SQUARE_SIZE, 27*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(2*GRID_SQUARE_SIZE, 28*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(11*GRID_SQUARE_SIZE + PIXEL_SIZE, 27*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(11*GRID_SQUARE_SIZE + PIXEL_SIZE, 28*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  
  ctx.fillRect(10*GRID_SQUARE_SIZE, 24*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(10*GRID_SQUARE_SIZE, 25*GRID_SQUARE_SIZE-2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(17*GRID_SQUARE_SIZE - PIXEL_SIZE, 24*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(17*GRID_SQUARE_SIZE-PIXEL_SIZE, 25*GRID_SQUARE_SIZE-2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  
  ctx.fillRect(16*GRID_SQUARE_SIZE, 27*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(16*GRID_SQUARE_SIZE, 28*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(25*GRID_SQUARE_SIZE + PIXEL_SIZE, 27*GRID_SQUARE_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  ctx.fillRect(25*GRID_SQUARE_SIZE + PIXEL_SIZE, 28*GRID_SQUARE_SIZE - 2*PIXEL_SIZE, PIXEL_SIZE, 2*PIXEL_SIZE);
  
  ctx.restore();
}
//@param drawSpecial : used for animation purposes
export function drawPellets(drawSpecial) {
  dctx.fillStyle = "white";
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] && grid[i][j].onBoard) {
        if (!drawSpecial && grid[i][j].special) continue;
        else drawPellet(i, j, grid[i][j].special);
      }
    }
  }
}
export function repopulatePellets() {
  grid = deepCopyGrid(referenceGrid);
}