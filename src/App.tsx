/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {StyleSheet, View} from 'react-native';
import {createStore} from "redux";
import {Provider} from "react-redux";
import Main from "./Main";
import {reducer} from "./main/reducer";

const store = createStore(reducer);

export default class App extends React.Component<any> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
