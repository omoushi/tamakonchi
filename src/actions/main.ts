import { Action, ActionCreator } from "redux";

export enum ActionType {
  BREAK_UP = 'BREAK_UP',
  NEGLECT = 'NEGLECT',
  LOSE_JOB = 'LOSE_JOB',
  MAKE_WORRY = 'MAKE_WORRY'
}

export const breakUp: ActionCreator<Action> = () => ({ type: ActionType.BREAK_UP });

export const neglect: ActionCreator<Action> = () => ({ type: ActionType.NEGLECT });

export const loseJob: ActionCreator<Action> = () => ({ type: ActionType.LOSE_JOB });

export const makeWorry: ActionCreator<Action> = () => ({ type: ActionType.MAKE_WORRY });
