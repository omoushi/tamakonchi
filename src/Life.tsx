import React, {FC} from "react";
import {Button, Text, View} from "react-native";
import {Action, Dispatch, Reducer} from "redux";
import {connect} from "react-redux";
import {randomIn} from "./utils";

type Props = State & Events
type State = {
  status: 'たまご' | 'いきてる' | 'しんでる'
  health: '健康' | '不健康' | '不明'
}
type Events = {
  takeCare(): void
  notTakeCare(): void
}

const initialState: State = {
  status: 'たまご',
  health: '健康'
};

export enum Statuses {
  STATUS, HEALTH
}

export const reducer: Reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'TAKE_CARE':
      switch (state.status) {
        case 'たまご':
          return {...state, status: 'いきてる'};
        case 'いきてる':
        case 'しんでる':
        default:
          return {...state}
      }
    case 'NOT_TAKE_CARE':
      switch (randomIn([Statuses.STATUS, Statuses.HEALTH])) {
        case Statuses.STATUS:
          switch (state.status) {
            case 'たまご':
            case 'いきてる':
              return {...state, status: 'しんでる', health: '不明'};
            case "しんでる":
            default:
              return {...state}
          }
        case Statuses.HEALTH:
          if (state.health === '健康') {
            return {...state, health: '不健康'};
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
    <Text>{props.status}</Text>
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