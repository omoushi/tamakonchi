import {State} from "./interface";
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

const initialState: State = {
  stage: Stage.EGG,
  health: Health.GOOD
};

export const reducer: Reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.TAKE_CARE:
      if (state.stage === Stage.EGG) {
        return {...state, stage: Stage.LIVING};
      } else {
        return {...state}
      }
    case ActionType.NOT_TAKE_CARE:
      switch (randomIn([Statuses.STAGE, Statuses.HEALTH])) {
        case Statuses.STAGE:
          switch (state.stage) {
            case Stage.EGG:
            case Stage.LIVING:
              return {...state, stage: Stage.DIED, health: Health.UNKNOWN};
            default:
              return {...state}
          }
        case Statuses.HEALTH:
          if (state.health === Health.GOOD) {
            return {...state, health: Health.BAD};
          } else {
            return {...state}
          }
        default:
          return {...state}
      }
    default:
      return {...state}
  }
};