import 'react-native';
import React from 'react';

import {postLoader} from './postLoader';
import renderer from 'react-test-renderer';
import '@testing-library/jest-native/extend-expect';

describe("<postLoader />", () => {
  const tree = renderer.create(<postLoader />).toJSON();
  console.log(tree)
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  })
})