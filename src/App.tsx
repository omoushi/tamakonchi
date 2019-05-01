/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { ReactNode } from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers";
import Pager from "./Pager";

const store = createStore(reducer);

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

export default class App extends React.Component {
  public render(): ReactNode {
    return (
      <Provider store={store}>
        <Pager/>
      </Provider>
    );
  }
}
