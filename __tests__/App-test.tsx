import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import * as React from "react";
import App from "../src/App";
import Pager from "../src/Pager";

jest.mock('../src/Pager', () => {
  return jest.fn().mockImplementation(() => {
    return <div />;
  });
});

it('renders correctly', (): void => {
  const component = renderer.create(<App />);
  expect(Pager).toHaveBeenCalledTimes(1);
  component.unmount();
});
