import React, {FC} from "react";
import {Button, Text, View} from "react-native";
import {Action, ActionCreator, Dispatch, Reducer} from "redux";
import {connect} from "react-redux";
import {randomIn} from "./utils";

type Props = State & Events
type State = {
  stage: Stage
  health: Health
}
type Events = {
  takeCare(): void
  notTakeCare(): void
}

export enum Statuses {
  STAGE, HEALTH
}

export enum Health {
  GOOD = '健康', BAD = '不健康', UNKNOWN = '不明'
}

export enum Stage {
  EGG = 'たまご', LIVING = 'いきてる', DIED = 'しんでる'
}

export enum ActionType {
  TAKE_CARE = 'TAKE_CARE',
  NOT_TAKE_CARE = 'NOT_TAKE_CARE'
}

export const takeCare: ActionCreator<Action> = () => ({type: ActionType.TAKE_CARE});
export const notTakeCare: ActionCreator<Action> = () => ({type: ActionType.NOT_TAKE_CARE});

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

const Life: FC<Props> = props => (
  <View>
    <Text>{props.stage}</Text>
    <Text>{props.health}</Text>
    <Button title={'世話をする'} onPress={props.takeCare}/>
    <Button title={'世話をしない'} onPress={props.notTakeCare}/>
  </View>
);

const mapStateToProps = (state: State) => state;
const mapDispatchToProps = (dispatch: Dispatch): Events => ({
  takeCare: () => dispatch(takeCare()),
  notTakeCare: () => dispatch(notTakeCare())
});
export default connect(mapStateToProps, mapDispatchToProps)(Life)