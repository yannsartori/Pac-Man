export const DISTANCE_BETWEEN_PELLETS = 5;
export const PIXEL_SIZE = 3;
export const WIDTH = 28;
export const HEIGHT = 31;
export const SIZE_OF_PELLET = 6;
export const GRID_SQUARE_SIZE = DISTANCE_BETWEEN_PELLETS * SIZE_OF_PELLET;
export const LEFT = 37; //keyboard codes
export const UP = 38;
export const RIGHT = 39;
export const DOWN = 40;
export const REF_SPEED = 0.10;
export const FRUIT_POS = [13, 16.5];
export const numbers = [function(xPixels, yPixels, letterPixel, leftHandJust, ctx) {
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel, 3*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, 5*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 4*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, 5*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 6*letterPixel, 3*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 4*letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 2*letterPixel, yPixels*letterPixel + 3*letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 3*letterPixel, yPixels*letterPixel + 2*letterPixel, letterPixel, letterPixel);
 },
 function(xPixels, yPixels, letterPixel, leftHandJust, ctx) {
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 2*letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 2*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 3*letterPixel, yPixels*letterPixel, letterPixel, 7*letterPixel);
 },
 function(xPixels, yPixels, letterPixel, leftHandJust, ctx) {
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel, 3*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 4*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, 2*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 3*letterPixel, yPixels*letterPixel + 3*letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 2*letterPixel, yPixels*letterPixel + 4*letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 5*letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + 6*letterPixel, 5*letterPixel, letterPixel);
   
 },
 function(xPixels, yPixels, letterPixel, leftHandJust, ctx) {
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel, 3*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel , yPixels*letterPixel + letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 4*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, 2*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 2*letterPixel, yPixels*letterPixel + 3*letterPixel, 2*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 4*letterPixel, yPixels*letterPixel + 4*letterPixel, letterPixel, 2*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 6*letterPixel, 3*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel , yPixels*letterPixel + 5*letterPixel, letterPixel, letterPixel);
 },
 function(xPixels, yPixels, letterPixel, leftHandJust, ctx) {
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 3*letterPixel, yPixels*letterPixel, letterPixel, 7*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 2*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 2*letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + 3*letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + 4*letterPixel, 5*letterPixel, letterPixel);
 },
 function(xPixels, yPixels, letterPixel, leftHandJust, ctx) {
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel, 5*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + 2*letterPixel, 4*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 4*letterPixel, yPixels*letterPixel + 3*letterPixel, letterPixel, 3*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + 5*letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 6*letterPixel, 3*letterPixel, letterPixel);
 },
 function(xPixels, yPixels, letterPixel, leftHandJust, ctx) {
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 2*letterPixel, yPixels*letterPixel, 2*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + 2*letterPixel, 4*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + 3*letterPixel, letterPixel, 3*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 4*letterPixel, yPixels*letterPixel + 3*letterPixel, letterPixel, 3*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 6*letterPixel, 3*letterPixel, letterPixel);
 },
 function(xPixels, yPixels, letterPixel, leftHandJust, ctx) {
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel, 5*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 4*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, 2*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 3*letterPixel, yPixels*letterPixel + 3*letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 2*letterPixel, yPixels*letterPixel + 4*letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 5*letterPixel, letterPixel, 2*letterPixel);
 },
 function(xPixels, yPixels, letterPixel, leftHandJust, ctx) {
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel, 3*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, 2*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 3*letterPixel, 3*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 4*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, 2*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 6*letterPixel, 3*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + 4*letterPixel, letterPixel, 2*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 4*letterPixel, yPixels*letterPixel + 4*letterPixel, letterPixel, 2*letterPixel);
 },
 function(xPixels, yPixels, letterPixel, leftHandJust, ctx) {
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel, 3*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, 3*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 4*letterPixel, 4*letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 4*letterPixel, yPixels*letterPixel + letterPixel, letterPixel, 3*letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + 3*letterPixel, yPixels*letterPixel + 5*letterPixel, letterPixel, letterPixel);
   ctx.fillRect(leftHandJust + xPixels*letterPixel + letterPixel, yPixels*letterPixel + 6*letterPixel, 2*letterPixel, letterPixel);
 }]
export function drawBasedOnPixels(arr, left, top, colour) {
  let canvas = document.getElementById("main");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = colour;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        ctx.fillRect(left + j*PIXEL_SIZE, top + i*PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
      }
    }
  }
}
//change path in function of path
export const beginningMusic = new Audio("./assets/pacman_beginning.wav");
export const chompMusic1 = new Audio("./assets/pacman_chomp1.mp3");
export const chompMusic2 = new Audio("./assets/pacman_chomp2.mp3");
export const deathMusic = new Audio("./assets/pacman_death.wav");
export const fruitMusic = new Audio("./assets/pacman_eatfruit.wav");
export const eatGhostMusic = new Audio("./assets/pacman_eatghost.wav");
export const extraLifeMusic = new Audio("./assets/pacman_extrapac.wav");
export const powerPellet = new Audio("./assets/pacman_powerpellet.mp3");
export const scaredGhost = new Audio("./assets/pacman_scaredghost.mp3");