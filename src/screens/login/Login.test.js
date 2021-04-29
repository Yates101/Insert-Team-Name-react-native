import 'react-native';
import React from 'react';

import { LogInScreen } from './login.js';
import renderer from 'react-test-renderer';

test('it works', () => {
  expect(true).toBeTruthy();
});

describe("<LogInScreen />", () => {
  const tree = renderer.create(<LogInScreen />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  })

  it('has 2 children', () => {
    expect(tree.children.length).toBe(2);
  });
});
