import {State, StateEvent} from "./interface";
import {Action, Reducer} from "redux";
import {ActionType} from "./actions";
import {randomIn} from "../utils";

export enum Statuses {
  STAGE, HEALTH
}

export enum Health {
  GOOD = '健康', BAD = '不健康', UNKNOWN = '不明'
}

export enum Stage {
  EGG = 'たまご', LIVING = 'いきてる', DIED = 'しんでる'
}

const HATCHING: StateEvent = {stage: Stage.LIVING};
const DIEING: StateEvent = {stage: Stage.DIED, health: Health.UNKNOWN};
const SICKING: StateEvent = {health: Health.BAD};

const initialState: State = {
  stage: Stage.EGG,
  health: Health.GOOD
};

export const reducer: Reducer = (state: State = initialState, action: Action): State => {
  let newState = {};
  if (action.type === ActionType.TAKE_CARE) {
    newState = state.stage === Stage.EGG ? HATCHING : {};
  } else if (action.type === ActionType.NOT_TAKE_CARE) {
    const changeTarget = randomIn([Statuses.STAGE, Statuses.HEALTH]);
    if (changeTarget === Statuses.STAGE) {
      newState = state.stage !== Stage.DIED ? DIEING : {};
    } else if (changeTarget === Statuses.HEALTH) {
      newState = state.health === Health.GOOD ? SICKING : {};
    }
  }
  return {...state, ...newState};
};