import React, { FC, ReactElement } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { MainEvents, MainState } from "./main/interface";
import { Action, Dispatch } from "redux";
import { notTakeCare, takeCare } from "./main/actions";
import { connect } from "react-redux";
import { Pet } from "./components/Pet";
import { RootState } from "./reducers";
import { NavigationTransitionProps } from "react-navigation";

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

export const Main: FC<MainProps> = (props: MainProps): ReactElement => (
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
      <Text>{props.health}</Text>
      <Pet stage={props.stage}/>
      <Button title={'世話をする'} onPress={props.takeCare}/>
      <Button title={'世話をしない'} onPress={props.notTakeCare}/>
    </View>
  </View>
);

export const mapStateToProps = (state: RootState): MainState => state.main;
export const mapDispatchToProps = (dispatch: Dispatch): MainEvents => ({
  takeCare: (): Action => dispatch(takeCare()),
  notTakeCare: (): Action => dispatch(notTakeCare())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);