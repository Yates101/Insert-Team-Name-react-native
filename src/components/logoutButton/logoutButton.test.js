import 'react-native';
import React from 'react';

import { LogoutButton } from './logoutButton.js';
import renderer from 'react-test-renderer';

test('it works', () => {
  expect(true).toBeTruthy();
});

describe("<logoutButton />", () => {
  const tree = renderer.create(<LogoutButton />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  })

  it('has 1 children', () => {
    expect(tree.children.length).toBe(1);
  });
});