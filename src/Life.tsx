import React, {FC} from "react";
import {Button, Text, View} from "react-native";
import {Action, Dispatch, Reducer} from "redux";
import {connect} from "react-redux";

type Props = State & Events
type State = {
  status: 'たまご' | 'いきてる' | 'しんでる'
  health: '健康' | '不健康'
}
type Events = {
  takeCare(): void
  notTakeCare(): void
}

const initialState: State = {
  status: 'たまご',
  health: '健康'
};

export const reducer: Reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'TAKE_CARE':
      switch (state.status) {
        case 'たまご':
          return {...state, status: 'いきてる'};
        case 'いきてる':
          return {...state, status: 'いきてる'};
        case 'しんでる':
          return {...state, status: 'しんでる'};
        default:
          return {...state}
      }
    case 'NOT_TAKE_CARE':
      if (Math.random() > 0.5) {
        if (state.health === '健康') {
          return {...state, health: '不健康'};
        } else {
          return {...state}
        }
      } else {
        switch (state.status) {
          case 'たまご':
            return {...state, status: 'しんでる'};
          case 'いきてる':
            return {...state, status: 'しんでる'};
          case "しんでる":
            return {...state, status: 'しんでる'};
          default:
            return {...state}
        }
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