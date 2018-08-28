import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

it('Header renders correctly', () => {
  const tree = renderer.create(<Header fdfadsf />).toJSON();
  expect(tree).toMatchSnapshot();
});
