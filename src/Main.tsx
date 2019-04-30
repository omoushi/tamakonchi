import React, {FC} from "react";
import {Button, Text, View, StyleSheet} from "react-native";
import {MainEvents, MainState} from "./main/interface";
import {Dispatch} from "redux";
import {notTakeCare, takeCare} from "./main/actions";
import {connect} from "react-redux";
import { Pet } from "./components/Pet";
import { RootState } from "./reducers";

type MainProps = MainEvents & MainState;

export const Main: FC<MainProps> = props => (
  <View style={styles.container}>
    <Text>{props.stage}</Text>
    <Text>{props.health}</Text>
    <Pet stage={props.stage}/>
    <Button title={'世話をする'} onPress={props.takeCare}/>
    <Button title={'世話をしない'} onPress={props.notTakeCare}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export const mapStateToProps = (state: RootState): MainState => state.main;
export const mapDispatchToProps = (dispatch: Dispatch): MainEvents => ({
  takeCare: () => dispatch(takeCare()),
  notTakeCare: () => dispatch(notTakeCare())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);