import React, {FC} from "react";
import {Button, Text, View} from "react-native";
import {Action, Dispatch, Reducer} from "redux";
import {connect} from "react-redux";

type Props = State & Events
type State = { status: 'たまご' | 'いきてる' | 'しんでる' }
type Events = {
  takeCare(): void
  notTakeCare(): void
}

export const reducer: Reducer = (state: State = {status: 'たまご'}, action: Action) => {
  switch (action.type) {
    case 'TAKE_CARE':
      switch (state.status) {
        case 'たまご':
          return {status: 'いきてる'};
        case 'いきてる':
          return {status: 'いきてる'};
        case 'しんでる':
          return {status: 'しんでる'};
        default:
          return {...state}
      }
    case 'NOT_TAKE_CARE':
      switch (state.status) {
        case 'たまご':
          return {status: 'しんでる'};
        case 'いきてる':
          return {status: 'しんでる'};
        case "しんでる":
          return {status: 'しんでる'};
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