import { Action, ActionCreator } from "redux";

export enum ActionType {
  BREAK_UP = 'BREAK_UP',
  NEGLECT = 'NEGLECT'
}

export const breakUp: ActionCreator<Action> = () => ({ type: ActionType.BREAK_UP });

export const neglect: ActionCreator<Action> = () => ({ type: ActionType.NEGLECT });
