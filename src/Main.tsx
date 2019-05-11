import React, { FC, ReactElement } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { MainEvents, MainState } from "./main/interface";
import { Action, Dispatch } from "redux";
import { notTakeCare, takeCare } from "./main/actions";
import { connect } from "react-redux";
import { Pet } from "./components/Pet";
import { RootState } from "./reducers";
import { Knife } from "./components/Knife";
import { TimerState } from "./timer/interface";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

type MainProps = MainEvents & MainState & TimerState;

export const Main: FC<MainProps> = (props: MainProps): ReactElement => (
  <View style={styles.container}>
    <Text>{props.stage}</Text>
    <Text>{props.health}</Text>
    <Pet stage={props.stage}/>
    <Button title={'世話をする'} onPress={props.takeCare}/>
    <Button title={'世話をしない'} onPress={props.notTakeCare}/>
    {props.tools.map((tool) => <Knife key={tool.id} tool={tool} />)}
  </View>
);

export const mapStateToProps = (state: RootState): MainState & TimerState => ({...state.main, ...state.timer});
export const mapDispatchToProps = (dispatch: Dispatch): MainEvents => ({
  takeCare: (): Action => dispatch(takeCare()),
  notTakeCare: (): Action => dispatch(notTakeCare())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);