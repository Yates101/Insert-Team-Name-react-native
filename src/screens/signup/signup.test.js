import 'react-native';
import React from 'react';

import { SignUpScreen } from './signup.js';
import renderer from 'react-test-renderer';
import '@testing-library/jest-native/extend-expect';

describe("<SignUp />", () => {
  const tree = renderer.create(<SignUpScreen />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  })

  it('has 6 children', () => {
    expect(tree.children.length).toBe(6);
  });
})
