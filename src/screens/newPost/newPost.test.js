import 'react-native';
import React from 'react';

import {  PostsScreen } from './PostScreen.js';
import renderer from 'react-test-renderer';
import '@testing-library/jest-native/extend-expect';

describe("<CreatePost/>", () => {
  const tree = renderer.create(<CreatePost/>).toJSON();

  it('has 3 children', () => {
    expect(tree.children.length).toBe(3);
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  })
})
