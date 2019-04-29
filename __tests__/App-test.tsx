import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import * as React from "react";
import App from "../src/App";

it('renders correctly', () => {
  renderer.create(<App />);
});
