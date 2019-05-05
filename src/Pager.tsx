import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Main from "./Main";
import { connect } from "react-redux";
import Collection from "./Collection";
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';


const RootStack = createMaterialTopTabNavigator(
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
    tabBarOptions: {
      tabStyle: {
        marginTop: 20,
      },
    },
  },
);

const Navigation = createAppContainer(RootStack);

class Pager extends React.Component {
  private styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
  });

  public componentDidMount(): void {
    console.log('Pager');
  }

  public componentWillUnmount(): void {
    console.log('Pager');
  }
  public render(): ReactNode {
    return (
      <View style={this.styles.container}>
        <Navigation/>
      </View>
    );
  }
}

export default connect()(Pager);