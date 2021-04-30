import 'react-native';
import React from 'react';

import { Headbar } from './headbar.js';
import renderer from 'react-test-renderer';

test('it works', () => {
  expect(true).toBeTruthy();
});

describe("<Headbar />", () => {
  const tree = renderer.create(<Headbar />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  })

  it('has 1 children', () => {
    expect(tree.children.length).toBe(1);
  });
});
