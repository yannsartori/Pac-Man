import {DISTANCE_BETWEEN_PELLETS, PIXEL_SIZE, WIDTH, HEIGHT, SIZE_OF_PELLET, GRID_SQUARE_SIZE, LEFT, UP, RIGHT, DOWN, numbers} from "./constants.js";
/*https://cdn1.vectorstock.com/i/1000x1000/10/20/pixel-english-alphabet-and-numbers-vector-18351020.jpg*/
let canvas = document.getElementById("gui");
let ctx = canvas.getContext("2d");
const LEFT_HAND_JUST = GRID_SQUARE_SIZE * (WIDTH + 2);
const LIVES_Y = GRID_SQUARE_SIZE * 20;
const LETTER_PIXEL = PIXEL_SIZE;
ctx.fillStyle = "white";
//I chose not to fully implement the alphabet since I didn't need to
//S
ctx.fillRect(LEFT_HAND_JUST + LETTER_PIXEL, LETTER_PIXEL, 3*LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST, 2*LETTER_PIXEL, LETTER_PIXEL, 2*LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 4*LETTER_PIXEL, 2*LETTER_PIXEL, LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + LETTER_PIXEL, 4*LETTER_PIXEL, 3*LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 4*LETTER_PIXEL, 5*LETTER_PIXEL, LETTER_PIXEL, 2*LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST, 6*LETTER_PIXEL, LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + LETTER_PIXEL, 7*LETTER_PIXEL, 3*LETTER_PIXEL, LETTER_PIXEL);
//C
ctx.fillRect(LEFT_HAND_JUST + 6*LETTER_PIXEL, 2*LETTER_PIXEL, LETTER_PIXEL, 5*LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 6*LETTER_PIXEL + LETTER_PIXEL, LETTER_PIXEL, 3*LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 6*LETTER_PIXEL + 4*LETTER_PIXEL, 2*LETTER_PIXEL, LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 6*LETTER_PIXEL + LETTER_PIXEL, 7*LETTER_PIXEL, 3*LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 6*LETTER_PIXEL + 4*LETTER_PIXEL, 6*LETTER_PIXEL, LETTER_PIXEL, LETTER_PIXEL);
//O
ctx.fillRect(LEFT_HAND_JUST + 12*LETTER_PIXEL + LETTER_PIXEL, LETTER_PIXEL, 3*LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 12*LETTER_PIXEL, 2*LETTER_PIXEL, LETTER_PIXEL, 5*LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 12*LETTER_PIXEL + 4*LETTER_PIXEL, 2*LETTER_PIXEL, LETTER_PIXEL, 5*LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 12*LETTER_PIXEL + LETTER_PIXEL, 7*LETTER_PIXEL, 3*LETTER_PIXEL, LETTER_PIXEL);
//R
ctx.fillRect(LEFT_HAND_JUST + 18*LETTER_PIXEL, LETTER_PIXEL, 4*LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 18*LETTER_PIXEL, 5*LETTER_PIXEL, 4*LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 18*LETTER_PIXEL, LETTER_PIXEL, LETTER_PIXEL, 7*LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 18*LETTER_PIXEL + 4*LETTER_PIXEL, 2*LETTER_PIXEL, LETTER_PIXEL, 3*LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 18*LETTER_PIXEL + 2*LETTER_PIXEL, 6*LETTER_PIXEL, LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 18*LETTER_PIXEL + 3*LETTER_PIXEL, 7*LETTER_PIXEL, 2*LETTER_PIXEL, LETTER_PIXEL);
//E
ctx.fillRect(LEFT_HAND_JUST + 24*LETTER_PIXEL, LETTER_PIXEL, 5*LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 24*LETTER_PIXEL, 4*LETTER_PIXEL, 3*LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 24*LETTER_PIXEL, 7*LETTER_PIXEL, 5*LETTER_PIXEL, LETTER_PIXEL);
ctx.fillRect(LEFT_HAND_JUST + 24*LETTER_PIXEL, LETTER_PIXEL, LETTER_PIXEL, 7*LETTER_PIXEL);

export function drawScore(score) {
 ctx.clearRect(LEFT_HAND_JUST, 9*LETTER_PIXEL, 6*LETTER_PIXEL*(score.toString()).length, 7*LETTER_PIXEL);
 for (let i = 0; i < (score.toString()).length; i++) {
   numbers[(score.toString())[i]](6*i,9, LETTER_PIXEL, LEFT_HAND_JUST, ctx);
 }
}
export function drawLives(lives, radius) {
  ctx.save();
  ctx.fillStyle = "yellow";
  ctx.clearRect(LEFT_HAND_JUST - radius*2.5, LIVES_Y - GRID_SQUARE_SIZE, LEFT_HAND_JUST + (radius*2.5)*3, LIVES_Y + (radius*2.5)*(1 + Math.floor(lives / 3)));
  for (let i = 0; i < lives - 1; i++) {
    ctx.beginPath();
    ctx.moveTo(LEFT_HAND_JUST + (radius*2.5)*(i%3), LIVES_Y + (radius*2.5)*Math.floor(i / 3));
    ctx.arc(LEFT_HAND_JUST + (radius*2.5)*(i%3), LIVES_Y + (radius*2.5)*Math.floor(i / 3), radius, Math.PI/6, 2*Math.PI - Math.PI/6);
    ctx.fill();
  }
  ctx.restore();
}
export function gameOver(score) {
  let canvas = document.getElementById("main");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  let letterSize = 2*LETTER_PIXEL;
  let left = canvas.width / 2 - 6 * letterSize * 2;
  let top = canvas.height / 2 - 9 * letterSize;
  
  // G
  ctx.fillRect(left + letterSize, top, 3 * letterSize, letterSize);
  ctx.fillRect(left, top + letterSize, letterSize, 5 * letterSize);
  ctx.fillRect(left + 4 * letterSize, top + letterSize, letterSize, letterSize);
  ctx.fillRect(left + letterSize, top + 6 * letterSize, 3 * letterSize, letterSize);
  ctx.fillRect(left + 4 * letterSize, top + 3 * letterSize, letterSize, 3 * letterSize);
  ctx.fillRect(left + 3 * letterSize, top + 3 * letterSize, letterSize, letterSize);
  // A
  ctx.fillRect(6*letterSize + left + 2*letterSize, top, letterSize, letterSize);
  ctx.fillRect(6*letterSize + left + letterSize, top + letterSize, letterSize, letterSize);
  ctx.fillRect(6*letterSize + left + 3*letterSize, top + letterSize, letterSize, letterSize);
  ctx.fillRect(6*letterSize + left, top + 2*letterSize, letterSize, 5*letterSize);
  ctx.fillRect(6*letterSize + left + 4*letterSize, top + 2*letterSize, letterSize, 5*letterSize);
  ctx.fillRect(6*letterSize + left + letterSize, top + 4*letterSize, 3*letterSize, letterSize);
  // M
  ctx.fillRect(12*letterSize + left , top, letterSize, 7*letterSize);
  ctx.fillRect(12*letterSize + left + 4*letterSize, top, letterSize, 7*letterSize);
  ctx.fillRect(12*letterSize + left + letterSize, top + 2*letterSize, letterSize, letterSize);
  ctx.fillRect(12*letterSize + left + 2*letterSize, top + 3*letterSize, letterSize, letterSize);
  ctx.fillRect(12*letterSize + left + 3*letterSize, top + 2*letterSize, letterSize, letterSize);
  // E
  ctx.fillRect(18*letterSize + left, top, 5*letterSize, letterSize);
  ctx.fillRect(18*letterSize + left, top + 3*letterSize, 3*letterSize, letterSize);
  ctx.fillRect(18*letterSize + left, top + 6*letterSize, 5*letterSize, letterSize);
  ctx.fillRect(18*letterSize + left, top, letterSize, 7*letterSize);

  // O
  ctx.fillRect(left + letterSize, 8*letterSize + top, 3*letterSize, letterSize);
  ctx.fillRect(left, 8*letterSize + top + letterSize, letterSize, 5*letterSize);
  ctx.fillRect(left + 4*letterSize, 8*letterSize + top + letterSize, letterSize, 5*letterSize);
  ctx.fillRect(left + letterSize, 8*letterSize + top + 6*letterSize, 3*letterSize, letterSize);
  // V
  ctx.fillRect(6*letterSize + left, 8*letterSize + top, letterSize, 5*letterSize);
  ctx.fillRect(6*letterSize + left + 4*letterSize, 8*letterSize + top, letterSize, 5*letterSize);
  ctx.fillRect(6*letterSize + left + letterSize, 8*letterSize + top + 5*letterSize, letterSize, letterSize);
  ctx.fillRect(6*letterSize + left + 2*letterSize, 8*letterSize + top + 6*letterSize, letterSize, letterSize);
  ctx.fillRect(6*letterSize + left + 3*letterSize, 8*letterSize + top + 5*letterSize, letterSize, letterSize);
  // E
  ctx.fillRect(12*letterSize + left, 8*letterSize + top, 5*letterSize, letterSize);
  ctx.fillRect(12*letterSize + left, 8*letterSize + top + 3*letterSize, 3*letterSize, letterSize);
  ctx.fillRect(12*letterSize + left, 8*letterSize + top + 6*letterSize, 5*letterSize, letterSize);
  ctx.fillRect(12*letterSize + left, 8*letterSize + top, letterSize, 7*letterSize);
  // R
  ctx.fillRect(18*letterSize + left, 8*letterSize + top, 4*letterSize, letterSize);
  ctx.fillRect(18*letterSize + left,8*letterSize + top + 4*letterSize, 4*letterSize, letterSize);
  ctx.fillRect(18*letterSize + left, 8*letterSize + top, letterSize, 7*letterSize);
  ctx.fillRect(18*letterSize + left + 4*letterSize, 8*letterSize + top + letterSize, letterSize, 3*letterSize);
  ctx.fillRect(18*letterSize + left + 2*letterSize, 8*letterSize + top + 5*letterSize, letterSize, letterSize);
  ctx.fillRect(18*letterSize + left + 3*letterSize, 8*letterSize + top + 6*letterSize, 2*letterSize, letterSize);
  ctx.fillStyle = "white";
  left = (canvas.width - 6*letterSize*(score.toString()).length) / 2;
  for (let i = 0; i < (score.toString()).length; i++) {
   numbers[(score.toString())[i]](6*i, canvas.width / (2 * letterSize) + 16, letterSize, left, ctx);
  }
}