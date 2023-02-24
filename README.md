# Game-of-Life

This is an implementation of Conway's Game of Life, a cellular automaton devised by the British mathematician John Horton Conway in 1970.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine.

## Installing
Clone this repository using the following command:

```sh
git clone https://github.com/KitsuneSemCalda/Game-of-life.git
cd conways-game-of-life
```
## Usage
To start the game, open the index.html in your browser or access: [link to acess the site]("https://game-of-life-pi-one.vercel.app/") <br>
The game will start automatically in your default browser.

## How to Work
The game consists of a grid of cells, each of which can be either alive or dead. At the start of the game, some cells are alive and others are dead. The game then progresses in discrete time steps, and the state of each cell in the grid at each time step depends on the states of its neighbors at the previous time step, according to the following rules:

Any live cell with fewer than two live neighbors dies, as if by underpopulation.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by overpopulation.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The game can reach three possible final states:

An oscillation, where the game state repeats in a cycle.
A static state, where the game state does not change.
Chaotic, where the game state changes unpredictably.

## License
This project is licensed under the BSD 3-Clause License - see the LICENSE file for details.
