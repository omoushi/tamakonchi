import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import * as React from "react";
import App from "../src/App";
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
  renderer.create(<App />);
});
