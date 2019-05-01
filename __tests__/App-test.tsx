import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import * as React from "react";
import App from "../src/App";

jest.mock('react-navigation', () => {
  return {
    createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) {return null;}),
    createDrawerNavigator: jest.fn(),
    createMaterialTopTabNavigator: jest.fn(),
    createStackNavigator: jest.fn(),
    StackActions: {
        push: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/PUSH"})),
        replace: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/REPLACE"})),
    },
    NavigationActions: {
        navigate: jest.fn().mockImplementation(x => x),
    }
  }
});

it('renders correctly', (): void => {
  renderer.create(<App />);
});
