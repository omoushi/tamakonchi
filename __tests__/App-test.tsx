import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import * as React from "react";
import App from "../src/App";

jest.mock('../src/Pager', () => {
  const pager = () => <div />;
  return pager;
});

it('renders correctly', (): void => {
  const component = renderer.create(<App />);
  component.unmount();
});
