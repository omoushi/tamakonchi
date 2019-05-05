import { MainState, MainStateEvent } from "./interface";
import { Action, Reducer } from "redux";
import { ActionType } from "./actions";

export enum Stage {
  NORMAL = '通常',
  DEAD = 'しんだ',
  BrokenUp = '別れた'
}

const BREAK_UP: MainStateEvent = { stage: Stage.BrokenUp }
const NEGLECT: MainStateEvent = { stage: Stage.DEAD }

const breakUp = (state: MainState): MainStateEvent => (state.stage === Stage.NORMAL ? BREAK_UP : {});
const neglect = (state: MainState): MainStateEvent => (state.stage === Stage.NORMAL ? NEGLECT : {})

const initialState: MainState = {
  stage: Stage.NORMAL
};

export const main: Reducer = (state: MainState = initialState, action: Action<ActionType>): MainState => {
  const stateEventCreator = {
    [ActionType.BREAK_UP]: breakUp,
    [ActionType.NEGLECT]: neglect
  }[action.type];
  const stateEvent = stateEventCreator ? stateEventCreator(state) : {};
  return { ...state, ...stateEvent };
};