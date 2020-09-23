import React from 'react';
import renderer from 'react-test-renderer';
import ApiList from './api-list';

it('renders correctly', () => {
  const tree = renderer
    .create(<ApiList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
