import 'react-native';
import React from 'react';

import {  CreatePost } from './newPost.js';
import renderer from 'react-test-renderer';
import '@testing-library/jest-native/extend-expect';

describe("<CreatePost/>", () => {
  const tree = renderer.create(<CreatePost/>).toJSON();

  it('has 2 children', () => {
    expect(tree.children.length).toBe(2);
  });

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  })
})
