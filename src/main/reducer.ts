import { MainState, MainStateEvent } from "./interface";
import { Action, Reducer } from "redux";
import { ActionType } from "./actions";

export enum Situation {
  NORMAL = '通常', DEAD = 'しんだ', BrokenUp = '別れた'
}

const BREAK_UP: MainStateEvent = { situation: Situation.BrokenUp }
const NEGLECT: MainStateEvent = { situation: Situation.DEAD }

const breakUp = (state: MainState): MainStateEvent => (state.situation === Situation.NORMAL ? BREAK_UP : {});
const neglect = (state: MainState): MainStateEvent => (state.situation === Situation.NORMAL ? NEGLECT : {})

const initialState: MainState = {
  situation: Situation.NORMAL
};

export const main: Reducer = (state: MainState = initialState, action: Action<ActionType>): MainState => {
  const stateEventCreator = {
    [ActionType.TAKE_CARE]: (): MainStateEvent => ({}),
    [ActionType.NOT_TAKE_CARE]: (): MainStateEvent => ({}),
    [ActionType.BREAK_UP]: breakUp,
    [ActionType.NEGLECT]: neglect
  }[action.type];
  const stateEvent = stateEventCreator ? stateEventCreator(state) : {};
  return { ...state, ...stateEvent };
};