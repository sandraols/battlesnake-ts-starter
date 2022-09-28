import { Direction } from "../types/strategy";
import { Battlesnake, Board, Coord } from "../types/types"
import { coordInDirection, isOutside, sameCoord } from "./BoardFunctions"

export function reachableCells(board: Board, testPoint: Coord): number {
  if (testPoint == null) {
    return 0
  }

  const grid: Array<Array<TestCell>> = Array(board.width)
  for (let i = 0; i < board.width; i++) {
    const column = Array(board.height)
    for (let j = 0; j < board.height; j++) {
      column[j] = {
        visited: false,
        obstacle: false,
        tailLength: 0
      }
    }
    grid[i] = column;
  }

  board.snakes.forEach((snake: Battlesnake) => {
    snake.body.forEach((snakePart: Coord, index: number) => {
      if (snake.body.length > 2 && index + 1 >= snake.body.length) {
        grid[snakePart.x][snakePart.y].tailLength = snake.body.length;
        grid[snakePart.x][snakePart.y].obstacle = true;
      }

      if (sameCoord(snakePart, testPoint)) {
        // We mark the testpoint as not an obstacle since we will start on that point when searching
        grid[snakePart.x][snakePart.y].obstacle = false
      } else {
        if (snakePart.x >= grid.length || snakePart.y >= grid[0].length) {
          console.log("Snake part out of board, should not happen.");
        }
        grid[snakePart.x][snakePart.y].obstacle = true
      }
    });
  });

  const numVisited = recursive(testPoint, board, grid);
  return numVisited
}


function recursive(point: Coord, board: Board, grid: Array<Array<TestCell>>): number {
  if (isOutside(point, board)) {
    return 0
  }

  const gridCell = grid[point.x][point.y]
  if (gridCell.tailLength > 0) {
    return gridCell.tailLength
  }

  if (gridCell.visited || gridCell.obstacle) {
    return 0
  }

  var numVisited = 1
  gridCell.visited = true

  numVisited += recursive(coordInDirection(point, Direction.UP), board, grid)
  numVisited += recursive(coordInDirection(point, Direction.DOWN), board, grid)
  numVisited += recursive(coordInDirection(point, Direction.LEFT), board, grid)
  numVisited += recursive(coordInDirection(point, Direction.RIGHT), board, grid)

  return numVisited
}

type TestCell = {
  visited: boolean,
  obstacle: boolean,
  tailLength: number
}