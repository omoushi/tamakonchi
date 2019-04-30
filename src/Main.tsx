import React, { FC, ReactElement } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Events, Props, State } from "./main/interface";
import { Action, Dispatch } from "redux";
import { notTakeCare, takeCare } from "./main/actions";
import { connect } from "react-redux";
import { Pet } from "./components/Pet";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export const Main: FC<Props> = (props: Props): ReactElement => (
  <View style={styles.container}>
    <Text>{props.stage}</Text>
    <Text>{props.health}</Text>
    <Pet stage={props.stage}/>
    <Button title={'世話をする'} onPress={props.takeCare}/>
    <Button title={'世話をしない'} onPress={props.notTakeCare}/>
  </View>
);

export const mapStateToProps = (state: State): State => state;
export const mapDispatchToProps = (dispatch: Dispatch): Events => ({
  takeCare: (): Action => dispatch(takeCare()),
  notTakeCare: (): Action => dispatch(notTakeCare())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);