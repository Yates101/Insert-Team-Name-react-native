import 'react-native';
import React from 'react';

import { Post } from './post.js';
import renderer from 'react-test-renderer';

test('it works', () => {
  expect(true).toBeTruthy();
});

describe("<Post />", () => {
  const tree = renderer.create(<Post />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  })

  it('has 1 children', () => {
    expect(tree.children.length).toBe(1);
  });
});