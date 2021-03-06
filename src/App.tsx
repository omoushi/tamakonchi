/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { ReactNode } from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";

import Pager from "./components/Pager";
import reducer from "./rootReducer";

const store = createStore(reducer);

export default class App extends React.Component {
  public render(): ReactNode {
    return (
      <Provider store={store}>
        <Pager/>
      </Provider>
    );
  }
}
