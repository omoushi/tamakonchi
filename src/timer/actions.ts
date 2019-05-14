import {Action, ActionCreator} from "redux";

export enum ActionType {
  MORE_TOOL = 'MORE_TOOL',
}

export const moreTool: ActionCreator<Action> = () => ({type: ActionType.MORE_TOOL});
