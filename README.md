# Pac-Man
Created a Pac-Man clone in JavaScript and Canvas
See it in action at https://cs.mcgill.ca/~ysarto/projectsDir/pac-man
## Goals
After making Sudoku, I wanted to create something incredibly involved. So I decided that an arcade game from 40 years ago would be fun to make, especially one I played extensively throughout my childhood. I had numerous goals with this project, such as:
- utilizing modules, with a strong emphasis on inter-module communication
- trying to use good coding habits (reducing global variables, reducing redundancies, good class seperation, mvc, etc)
- animations based on the `window.requestFrameAnimation` function of JavaScript
- using sound effects (note: I purposfully omitted the background sound because I find it annoying)
- primitive AI
- much more complex graphics
- making a near clone of the original game, in terms of scoring, speed, difficulty, graphics, etc
## On what can be improved
With a project this complex, there are inevitably a lot of additions that can be made to this project. These include, in increasing order of difficulty:
- adding a game over screen (right now I have a simple alert)
- draw the outline and inline to be more reflective of the board to reduce clipping
- making a check to prevent ghosts from getting stuck (I'd probably add a check to the move functions to see if the path is the same a where it is, and if so, move to a tile chosen at random)
- allowing ghosts to use warps in chase mode
Bugs I have identified:
- Inky sometimes just strolls from warp to warp, going through stuff he shouldn't.
  - **fix:** I suspect this is due to when I check to see if his target tile is out of bounds, and if so, I correct it.
- I haven't been able to reproduce this bug, but I think what happens is if you try to consume a ghost on the last frame of fright and are in the way of its path back to the maze, the game crashes with an error of a ghost moving in an illegal territory.
  - **fix:** I suspect this is due to a ghost being in a weird, quasi state. I haven't investigated this bug enough to identify a potential fix
