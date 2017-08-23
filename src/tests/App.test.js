import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../App';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('player and principal start in right spots', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().playerRoom.key === 'westHall')
  expect(wrapper.state().princRoom.key === 'office')
})