import React, { FC, ReactElement } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { MainEvents, MainState } from "./main/interface";
import { Action, Dispatch } from "redux";
import { breakUp, neglect, notTakeCare, takeCare } from "./main/actions";
import { connect } from "react-redux";
import { Pet } from "./components/Pet";
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
    <Text>{props.situation}</Text>
    <Text>{props.stage}</Text>
    <Pet stage={props.stage}/>
    <Button title={'世話をする'} onPress={props.takeCare}/>
    <Button title={'世話をしない'} onPress={props.notTakeCare}/>
    <Button title={'別れる'} onPress={props.breakUp} />
    <Button title={'放置する'} onPress={props.neglect} />
  </View>
);

export const mapStateToProps = (state: RootState): MainState => state.main;
export const mapDispatchToProps = (dispatch: Dispatch): MainEvents => ({
  takeCare: (): Action => dispatch(takeCare()),
  notTakeCare: (): Action => dispatch(notTakeCare()),
  breakUp: (): Action => dispatch(breakUp()),
  neglect: (): Action => dispatch(neglect())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);