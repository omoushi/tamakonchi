import {Action, ActionCreator} from "redux";

export enum ActionType {
  TAKE_CARE = 'TAKE_CARE',
  NOT_TAKE_CARE = 'NOT_TAKE_CARE'
}

export const takeCare: ActionCreator<Action> = () => ({type: ActionType.TAKE_CARE});

export const notTakeCare: ActionCreator<Action> = () => ({type: ActionType.NOT_TAKE_CARE});
