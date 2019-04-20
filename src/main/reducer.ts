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

export const reducer: Reducer = (state: State = initialState, action: Action<ActionType>): State => {
  const newStateFn = {
    [ActionType.TAKE_CARE]: () => (state.stage === Stage.EGG ? HATCHING : {}),
    [ActionType.NOT_TAKE_CARE]: () => {
      const changeTarget = randomIn([Statuses.STAGE, Statuses.HEALTH]);
      if (changeTarget === Statuses.STAGE) {
        return state.stage !== Stage.DIED ? DIEING : {};
      } else if (changeTarget === Statuses.HEALTH) {
        return state.health === Health.GOOD ? SICKING : {};
      }
    }
  }[action.type];
  const newState = newStateFn ? newStateFn() : {};
  return {...state, ...newState};
};