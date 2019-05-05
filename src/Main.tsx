import React, { FC, ReactElement } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { MainEvents, MainState } from "./main/interface";
import { Action, Dispatch } from "redux";
import { breakUp, neglect } from "./main/actions";
import { connect } from "react-redux";
import { RootState } from "./reducers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

type MainProps = MainEvents & MainState;

export const Main: FC<MainProps> = (props: MainProps): ReactElement => (
  <View style={styles.container}>
    <Text>{props.stage}</Text>
    <Button title={'別れる'} onPress={props.breakUp}/>
    <Button title={'放置する'} onPress={props.neglect}/>
  </View>
);

export const mapStateToProps = (state: RootState): MainState => state.main;
export const mapDispatchToProps = (dispatch: Dispatch): MainEvents => ({
  breakUp: (): Action => dispatch(breakUp()),
  neglect: (): Action => dispatch(neglect())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);