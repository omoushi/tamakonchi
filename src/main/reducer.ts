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

const takingCare = (state: State): StateEvent => (state.stage === Stage.EGG ? HATCHING : {});
const notTakingCare = (state: State): StateEvent => {
  const changeTarget: Statuses = randomIn([Statuses.STAGE, Statuses.HEALTH]);
  if (changeTarget === Statuses.STAGE && state.stage !== Stage.DIED) {
    return DIEING
  } else if (changeTarget === Statuses.HEALTH && state.health === Health.GOOD) {
    return SICKING
  } else {
    return {}
  }
};

const initialState: State = {
  stage: Stage.EGG,
  health: Health.GOOD
};

export const reducer: Reducer = (state: State = initialState, action: Action<ActionType>): State => {
  const stateEventCreator = {
    [ActionType.TAKE_CARE]: takingCare,
    [ActionType.NOT_TAKE_CARE]: notTakingCare
  }[action.type];
  const stateEvent = stateEventCreator ? stateEventCreator(state) : {};
  return {...state, ...stateEvent};
};