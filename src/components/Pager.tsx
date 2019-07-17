import React, { ReactNode } from "react";
import { Action, Dispatch } from "redux";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from "./Main";
import Collection from "./Collection";
import { TimerState, TimerEvents } from "../types/timer";
import { moreTool } from "../actions/timer";
import { RootState } from "../rootReducer";


const RootStack = createStackNavigator(
  {
    Main: {
      screen: Main,
    },
    Collection: {
      screen: Collection,
    },
  },
  {
    initialRouteName: 'Main',
  },
);

type PagerProps = TimerEvents;
const Navigation = createAppContainer(RootStack);

class Pager extends React.Component<PagerProps> {
  private intervalId: number = 0;

  private styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
  });

  public componentDidMount(): void {
    this.intervalId = setInterval((): void => {
      this.props.moreTool();
    }, 3 * 1000);
  }

  public componentWillUnmount(): void {
    clearInterval(this.intervalId);
  }
  public render(): ReactNode {
    return (
      <View style={this.styles.container}>
        <Navigation/>
      </View>
    );
  }
}

export const mapStateToProps = (state: RootState): TimerState => state.timer;
export const mapDispatchToProps = (dispatch: Dispatch): TimerEvents => ({
  moreTool: (): Action => dispatch(moreTool()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Pager);