import React, {FC} from "react";
import {Button, Text, View} from "react-native";
import {Action, Dispatch, Reducer} from "redux";
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
  STATUS, HEALTH
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
    case 'TAKE_CARE':
      switch (state.stage) {
        case Stage.EGG:
          return {...state, stage: Stage.LIVING};
        case Stage.LIVING:
        case Stage.DIED:
        default:
          return {...state}
      }
    case 'NOT_TAKE_CARE':
      switch (randomIn([Statuses.STATUS, Statuses.HEALTH])) {
        case Statuses.STATUS:
          switch (state.stage) {
            case Stage.EGG:
            case Stage.LIVING:
              return {...state, stage: Stage.DIED, health: Health.UNKNOWN};
            case Stage.DIED:
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
  takeCare: () => dispatch({type: 'TAKE_CARE'}),
  notTakeCare: () => dispatch({type: 'NOT_TAKE_CARE'})
});
export default connect(mapStateToProps, mapDispatchToProps)(Life)