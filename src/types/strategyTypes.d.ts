import { GameState } from "./types";

export interface Strategy {
    nextMove(gameState: GameState): MoveResponse
}

export type DirectionResult = {
    direction: Direction,
    outcome: Outcome,
    otherData: number
    // add other data to sort on
}