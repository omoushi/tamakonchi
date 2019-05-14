import React, { FC, ReactElement } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { MainEvents, MainState } from "./main/interface";
import { Action, Dispatch } from "redux";
import { breakUp, loseJob, makeWorry, neglect } from "./main/actions";
import { connect } from "react-redux";
import { RootState } from "./reducers";
import { NavigationTransitionProps } from "react-navigation";
import { Situation } from "./main/reducer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

type MainProps = MainEvents & MainState & NavigationTransitionProps;

export const Main: FC<MainProps> = (props: MainProps): ReactElement => {
  const isSicked = props.situation !== Situation.EMPTY;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          title={'おもひで'}
          onPress={() => {
            props.navigation.navigate('Collection');
          }}
        />
      </View>
      <View style={styles.contents}>
        <Text>{props.stage}</Text>
        <Text>{props.situation}</Text>
        {isSicked ? <Text>病んでる</Text> : null}
        <Button title={'別れる'} onPress={props.breakUp}/>
        <Button title={'放置する'} onPress={props.neglect}/>
        <Button title={'仕事がなくなる'} onPress={props.loseJob}/>
        <Button title={'心配にさせる'} onPress={props.makeWorry}/>
      </View>
    </View>
  );
};

export const mapStateToProps = (state: RootState): MainState => state.main;
export const mapDispatchToProps = (dispatch: Dispatch): MainEvents => ({
  breakUp: (): Action => dispatch(breakUp()),
  neglect: (): Action => dispatch(neglect()),
  loseJob: (): Action => dispatch(loseJob()),
  makeWorry: (): Action => dispatch(makeWorry())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);