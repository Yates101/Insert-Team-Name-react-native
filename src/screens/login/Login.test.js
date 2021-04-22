import 'react-native';
import React from 'react';

import {LogIn} from './login.js';
import renderer from 'react-test-renderer';

test('it works', () => {
  expect(true).toBeTruthy();
});

describe("<LogIn />", () => {
  const tree = renderer.create(<LogIn />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  })

  it('has 5 children', () => {
    expect(tree.children.length).toBe(5);
  });
});
