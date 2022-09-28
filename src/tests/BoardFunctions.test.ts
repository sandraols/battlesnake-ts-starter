import { coordInDirection } from "../functions/BoardFunctions";
import { Direction } from "../types/strategy";
import { Coord } from "../types/types";

 describe('BoardFunctions', () => {
  test('going up should result in y+1', () => {
    const coord: Coord = { x: 0, y: 0};
    const direction = Direction.UP
    expect(coordInDirection(coord, direction)).toEqual({x: 0, y: 1})
  });
});