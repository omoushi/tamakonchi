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
import Life, {reducer} from "./Life";

const store = createStore(reducer);

export default class App extends React.Component<any> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Life/>
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
