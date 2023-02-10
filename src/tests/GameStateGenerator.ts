import {
  Battlesnake,
  Board,
  Coord,
  Game,
  GameState,
  Ruleset,
  RulesetSettings,
} from '../types/types';

const aCode = 'A'.charCodeAt(0);
const oCode = 'O'.charCodeAt(0);

export function boardState(
  strBoardInput: string,
  wrapped: Boolean = false
): GameState {
  const strBoard = trimIndents(strBoardInput);
  const you: Array<Coord | null> = Array(10).fill(null);
  const opponent1: Array<Coord | null> = Array(10).fill(null);
  const opponent2: Array<Coord | null> = Array(10).fill(null);
  const food: Array<Coord> = Array<Coord>();
  const hazard: Array<Coord> = Array<Coord>();

  const lines: string[] = strBoard.split(/\r\n|\r|\n/);

  const height = lines.length;
  const width = lines[0].length;
  lines.forEach((line: string, yInv: number) => {
    [...line].forEach((char: string, x: number) => {
      const y = height - 1 - yInv;
      if (char >= '0' && char <= '9') {
        const partNbr = parseInt(char);
        you[partNbr] = { x, y };
      } else if (char >= 'A' && char <= 'J') {
        const partNbr = char.charCodeAt(0) - aCode;
        opponent1[partNbr] = { x, y };
      } else if (char >= 'O' && char <= 'X') {
        const partNbr = char.charCodeAt(0) - oCode;
        opponent2[partNbr] = { x, y };
      } else if (char == '*') {
        food.push({ x, y });
      } else if (char == '-' || char == '_' || char == '|') {
        hazard.push({ x, y });
      }
    });
  });

  const allSnakes = Array<Battlesnake>();
  const youSnake = addSnake('0', you, allSnakes);
  addSnake('1', opponent1, allSnakes);
  addSnake('2', opponent2, allSnakes);

  const rulesetSettings: RulesetSettings = {
    foodSpawnChance: 0.75,
    minimumFood: 1,
    hazardDamagePerTurn: 0,
  };
  const ruleSet: Ruleset = {
    name: 'standard',
    version: '1.0',
    settings: rulesetSettings,
  };
  const game: Game = {
    id: 'irer',
    ruleset: ruleSet,
    map: 'standard',
    source: 'source',
    timeout: 500,
  };
  const board: Board = {
    height,
    width,
    food,
    hazards: hazard,
    snakes: allSnakes,
  };
  return {
    game,
    turn: 3,
    board,
    you: youSnake!,
  };
}

function addSnake(
  id: string,
  snakeParts: Array<Coord | null>,
  allSnakes: Array<Battlesnake>
): Battlesnake | null {
  const body: Array<Coord> = snakeParts.filter((x): x is Coord => x !== null);
  if (body.length > 0) {
    const snake = {
      id,
      name: id,
      health: 100,
      body: body,
      head: body[0],
      length: body.length,
      latency: '100ms',
      shout: 'hej',
      customizations: {
        color: '#66ff33',
        head: 'replit-mark',
        tail: 'replit-notmark',
      },
    };

    allSnakes.push(snake);
    return snake;
  }
  return null;
}

export function fakeYourHealth(boardState: GameState, newHealth: number) {
  const youInBoard = boardState.board.snakes.find((s) => s.id == '0');
  const youInGame = boardState.you;
  if (youInBoard) {
    youInBoard.health = newHealth;
  }
  youInGame.health = newHealth;
}

function trimIndents(str: string): string {
  return str.replace(/[^\S\r\n]/gm, '').replace(/^\s*$(?:\r\n?|\n)/gm, '');
}
