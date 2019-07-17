import * as React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import reducer from "../src/rootReducer";
import Pager from  '../src/components/Pager';

import {
  NavigationContainer,
  NavigationNavigateAction,
  NavigationPushAction,
  NavigationReplaceAction
} from "react-navigation";

jest.mock('react-navigation', (): object => {
  return {
    createAppContainer: jest.fn().mockReturnValue((): NavigationContainer | null => {return null;}),
    createDrawerNavigator: jest.fn(),
    createMaterialTopTabNavigator: jest.fn(),
    createStackNavigator: jest.fn(),
    StackActions: {
      push: jest.fn().mockImplementation((x): NavigationPushAction => ({...x,  "type": "Navigation/PUSH"})),
      replace: jest.fn().mockImplementation((x): NavigationReplaceAction => ({...x,  "type": "Navigation/REPLACE"})),
    },
    NavigationActions: {
      navigate: jest.fn().mockImplementation((x): NavigationNavigateAction => x),
    }
  };
});

it('renders correctly', (): void => {
  const store = createStore(reducer);
  const component = renderer.create(<Provider store={store}><Pager/></Provider>);
  component.unmount();
});
