import {DISTANCE_BETWEEN_PELLETS, PIXEL_SIZE, WIDTH, HEIGHT, SIZE_OF_PELLET, GRID_SQUARE_SIZE, FRUIT_POS, LEFT, UP, RIGHT, DOWN, drawBasedOnPixels} from "./constants.js";

function Fruit (draw, points) {
  this.draw = draw; //draw function
  this.points = points;
}
export let fruits = [new Fruit(drawCherry, 100), new Fruit(drawStrawberry, 300), new Fruit(drawOrange, 500), new Fruit(drawApple, 700), new Fruit(drawMelon, 1000),
                 new Fruit(drawGalaxian, 2000), new Fruit(drawBell, 3000), new Fruit(drawKey, 5000)];
function drawStrawberry() {
  let red =[ //I was too lazy to create exact pallets, so I just use CSS default colours
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,0,0,0,0,1,0],
    [1,0,1,0,1,0,1,1,1,1],
    [1,1,1,1,1,1,0,1,0,1],
    [1,1,0,1,0,1,1,1,1,1],
    [0,1,1,1,1,1,1,0,1,0],
    [0,1,0,1,0,1,1,1,1,0],
    [0,0,1,1,1,1,0,1,0,0],
    [0,0,0,1,0,1,1,0,0,0],
    [0,0,0,0,1,1,0,0,0,0]];
  let green = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,1,1,1,0],
    [0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,1,0,0,0,0]];
  let white = [
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0],
    [0,1,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,1,0],
    [0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0],
    [0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,0]];
  drawBasedOnPixels(red, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "red");
  drawBasedOnPixels(green, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "lightGreen");
  drawBasedOnPixels(white, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "white");
}
function drawCherry() {
  let sandyBrown = [
    [0,0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,1,1,1,1],
    [0,0,0,0,0,1,1,0,1,0,0],
    [0,0,0,0,1,0,0,0,1,0,0],
    [0,0,0,1,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0]];
  let red = [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,0,0,0,0],
    [1,1,1,0,1,0,0,0,0,0,0],
    [1,1,1,1,1,0,1,0,1,0,0],
    [1,0,1,1,0,1,1,0,1,1,0],
    [0,1,1,1,0,1,1,1,1,1,0],
    [0,0,0,0,0,1,0,1,1,1,0],
    [0,0,0,0,0,0,1,1,1,0,0]];
  let white = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1]];
  drawBasedOnPixels(red, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "red");
  drawBasedOnPixels(sandyBrown, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "sandyBrown");
  drawBasedOnPixels(white, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "white");
}
function drawOrange() {
  let coral = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,1,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,1,1,1,0,0,0]];
  let lightGreen = [
    [0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,1,0,0,0,0]];
    drawBasedOnPixels(coral, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "coral");
    drawBasedOnPixels(lightGreen, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "lightGreen");
}
function drawApple() {
  let lightGreen = [
    [0,1,1,1,0,1,0,0,0,0],
    [0,0,1,1,1,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0]];
  let white = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0]];
  let red = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0],
    [0,1,1,1,0,1,1,1,1,0],
    [1,1,0,1,1,1,1,1,1,1],
    [1,0,1,1,1,1,1,1,1,1],
    [1,0,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,0,0,1,1,0,0]];
  drawBasedOnPixels(lightGreen, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "lightGreen");
  drawBasedOnPixels(white, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "white");
  drawBasedOnPixels(red, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "red");
}
function drawMelon() {
  let sandyBrown = [
    [0,0,1,1,1,1,1,0,0],
    [0,0,0,0,0,1,0,0,0]];
  let lime = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0],
    [0,1,0,1,1,0,1,1,0],
    [0,0,0,1,1,0,1,1,0],
    [0,1,1,0,0,0,0,0,0],
    [0,1,1,0,1,1,0,1,1],
    [0,1,0,0,1,1,0,1,1],
    [0,0,1,1,0,0,0,1,0],
    [0,0,1,1,0,1,1,0,0],
    [0,0,0,0,0,1,1,0,0]];
  let darkOliveGreen = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,0],
    [0,0,1,0,0,1,0,0,1],
    [1,1,1,0,0,1,0,0,1],
    [1,0,0,1,1,1,1,1,1],
    [1,0,0,1,0,0,1,0,0],
    [1,0,1,1,0,0,1,0,0],
    [0,1,0,0,1,1,1,0,1],
    [0,1,0,0,1,0,0,1,0],
    [0,0,1,1,1,0,0,0,0]];
  drawBasedOnPixels(sandyBrown, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "sandyBrown");
  drawBasedOnPixels(darkOliveGreen, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "darkOliveGreen");
  drawBasedOnPixels(lime, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "lime");
}
function drawGalaxian() {
  let dodgerBlue = [
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,1,1],
    [1,1,1,0,0,0,0,0,1,1,1],
    [0,1,1,1,0,0,0,1,1,1,0],
    [0,0,1,1,1,0,1,1,1,0,0],
    [0,0,0,1,0,0,0,1,0,0,0]];
  let yellow = [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,1,0],
    [0,0,1,1,0,1,0,1,1,0,0],
    [0,0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],]
  let red = [
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,0,1,0,0,0,0],]
  drawBasedOnPixels(dodgerBlue, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "dodgerBlue");
  drawBasedOnPixels(yellow, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "yellow");
  drawBasedOnPixels(red, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "red");
}
function drawBell() {
  let yellow = [
    [0,0,0,0,0,1,1,0,0,0,0,0],
    [0,0,0,1,1,0,0,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,0,1,1,1,1,1,0,0],
    [0,0,1,0,1,1,1,1,1,1,0,0],
    [0,1,1,0,1,1,1,1,1,1,1,0],
    [0,1,1,0,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0,0]];
  let darkTurquoise = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,0,0,1,1,1,0],
    [0,1,1,1,1,1,0,0,1,1,1,0]];
  let lightCyan = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0]];
  drawBasedOnPixels(yellow, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "yellow");
  drawBasedOnPixels(darkTurquoise, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "darkTurquoise");
  drawBasedOnPixels(lightCyan, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "lightCyan");
}
function drawKey() {
  let darkTurquoise = [
    [0,1,1,1,1,0],
    [1,1,0,0,1,1],
    [1,1,1,1,1,1],
    [0,1,1,1,1,0]];
  let lightCyan = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,1,1,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,1],
    [0,0,1,0,1,0],
    [0,0,1,0,1,1],
    [0,0,1,0,1,0],
    [0,0,0,1,0,0]];
  drawBasedOnPixels(darkTurquoise, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "darkTurquoise");
  drawBasedOnPixels(lightCyan, GRID_SQUARE_SIZE*FRUIT_POS[0], GRID_SQUARE_SIZE*FRUIT_POS[1], "lightCyan");
}