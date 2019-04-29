/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import {NativeRouter, Link, Route} from 'react-router-native';
import {createStore} from "redux";
import {Provider} from "react-redux";
import Main from "./Main";
import {reducer} from "./main/reducer";
import Collection from "./Collection";

const store = createStore(reducer);

export default class App extends React.Component<any> {
  render() {
    return (
      <NativeRouter>
        <Provider store={store}>
          <View style={styles.container}>
            <View style={styles.nav}>
              <Link to="/">
                <Text>Main</Text>
              </Link>
              <Link to="/collection">
                <Text>Collection</Text>
              </Link>
            </View>

            <Route exact path="/" component={Main} />
            <Route path="/collections" component={Collection} />
          </View>
        </Provider>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
