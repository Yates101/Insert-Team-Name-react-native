import 'react-native';
import React from 'react';

import {LogIn} from './login.js';
import renderer from 'react-test-renderer';

test('it works', () => {
  expect(true).toBeTruthy();
});

describe("<LogIn />", () => {
  it('has 5 children', () => {
      const tree = renderer.create(<LogIn />).toJSON();
      expect(tree.children.length).toBe(5);
  });
});

describe()