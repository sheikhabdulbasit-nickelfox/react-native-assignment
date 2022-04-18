/**
 * @format
 */

import 'react-native';

import React from 'react';

import {AppHoc} from '../Source/Hoc/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.useFakeTimers();

test('renders correctly', async () => {
  const tree = renderer.create(<AppHoc />).toJSON();
  expect(tree).toMatchSnapshot();
});
