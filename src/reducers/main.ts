import { Action, Reducer } from "redux";

import { MainState, MainStateEvent } from "../types/main";
import { ActionType } from "../actions/main";

export enum Stage {
  NORMAL = '通常',
  DEAD = 'しんだ',
  BROKEN_UP = '別れた'
}

export enum Situation {
  EMPTY = 'なし',
  NO_JOB = '仕事がない',
  LINE = 'LINEが来る'
}

const NO_EVENT: MainStateEvent = { }
const BREAK_UP: MainStateEvent = { stage: Stage.BROKEN_UP }
const NEGLECT: MainStateEvent = { stage: Stage.DEAD }
const LOSE_JOB: MainStateEvent = { situation: Situation.NO_JOB }
const LINE: MainStateEvent = { situation: Situation.LINE }

const breakUp = (state: MainState): MainStateEvent => (state.stage === Stage.NORMAL ? BREAK_UP : NO_EVENT);
const neglect = (state: MainState): MainStateEvent => (state.stage === Stage.NORMAL ? NEGLECT : NO_EVENT)
const loseJob = (state: MainState): MainStateEvent => {
  if (state.stage === Stage.NORMAL && state.situation === Situation.EMPTY) {
    return LOSE_JOB
  } else {
    return NO_EVENT
  }
}
const worry = (state: MainState): MainStateEvent => {
  if (state.stage === Stage.NORMAL && state.situation === Situation.EMPTY) {
    return LINE
  } else {
    return NO_EVENT
  }
}

const initialState: MainState = {
  stage: Stage.NORMAL,
  situation: Situation.EMPTY
};

export const main: Reducer = (state: MainState = initialState, action: Action<ActionType>): MainState => {
  const stateEventCreator = {
    [ActionType.BREAK_UP]: breakUp,
    [ActionType.NEGLECT]: neglect,
    [ActionType.LOSE_JOB]: loseJob,
    [ActionType.MAKE_WORRY]: worry
  }[action.type];
  const stateEvent = stateEventCreator ? stateEventCreator(state) : {};
  return { ...state, ...stateEvent };
};