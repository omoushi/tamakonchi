import { MainState, MainStateEvent } from "./interface";
import { Action, Reducer } from "redux";
import { ActionType } from "./actions";

export enum Statuses { STAGE }

export enum Stage {
  EGG = 'たまご', LIVING = 'いきてる', DIED = 'しんでる'
}

export enum Situation {
  NORMAL = '通常', DEAD = 'しんだ', BrokenUp = '別れた'
}

const HATCHING: MainStateEvent = { stage: Stage.LIVING };
const DIEING: MainStateEvent = { stage: Stage.DIED };
const BREAK_UP: MainStateEvent = { situation: Situation.BrokenUp }
const NEGLECT: MainStateEvent = { situation: Situation.DEAD }

const breakUp = (state: MainState): MainStateEvent => (state.situation === Situation.NORMAL ? BREAK_UP : {});
const neglect = (state: MainState): MainStateEvent => (state.situation === Situation.NORMAL ? NEGLECT : {})
const takingCare = (state: MainState): MainStateEvent => (state.stage === Stage.EGG ? HATCHING : {});
const notTakingCare = (state: MainState): MainStateEvent => {
  const changeTarget: Statuses = Statuses.STAGE
  if (changeTarget === Statuses.STAGE && state.stage !== Stage.DIED) {
    return DIEING
  } else {
    return {}
  }
};

const initialState: MainState = {
  stage: Stage.EGG,
  situation: Situation.NORMAL
};

export const main: Reducer = (state: MainState = initialState, action: Action<ActionType>): MainState => {
  const stateEventCreator = {
    [ActionType.TAKE_CARE]: takingCare,
    [ActionType.NOT_TAKE_CARE]: notTakingCare,
    [ActionType.BREAK_UP]: breakUp,
    [ActionType.NEGLECT]: neglect
  }[action.type];
  const stateEvent = stateEventCreator ? stateEventCreator(state) : {};
  return { ...state, ...stateEvent };
};