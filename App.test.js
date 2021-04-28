import 'react-native';
import React from 'react';
import App from './App.js';
import renderer from 'react-test-renderer';

test('it works', () => {
  expect(true).toBeTruthy();
});

describe("<App />", () => {
    it('has 2 children', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});
