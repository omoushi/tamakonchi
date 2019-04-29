import React, {FC} from "react";
import {Button, Text, View} from "react-native";
import {Events, Props, State} from "./main/interface";
import {Dispatch} from "redux";
import {notTakeCare, takeCare} from "./main/actions";
import {connect} from "react-redux";
import { Pet } from "./components/Pet";

export const Main: FC<Props> = props => (
  <View>
    <Text>{props.stage}</Text>
    <Text>{props.health}</Text>
    <Pet stage={props.stage}/>
    <Button title={'世話をする'} onPress={props.takeCare}/>
    <Button title={'世話をしない'} onPress={props.notTakeCare}/>
  </View>
);

export const mapStateToProps = (state: State) => state;
export const mapDispatchToProps = (dispatch: Dispatch): Events => ({
  takeCare: () => dispatch(takeCare()),
  notTakeCare: () => dispatch(notTakeCare())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)