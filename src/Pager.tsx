import React, { ReactNode } from "react";
import { StyleSheet, View, Button } from "react-native";
import Main from "./Main";
import { connect } from "react-redux";
import Collection from "./Collection";
import { createStackNavigator, createAppContainer } from 'react-navigation';


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