import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Room from '../modules/Room';
import rooms from '../modules/rooms';

describe('Room tests', () => {

  it('each room has at least one door', () => {
    rooms.forEach(room => {
      const wrapper = shallow(<Room room={room} onExit={null} onPickup={null} />);
      const children = toJSON(wrapper.children());
      const roomsArr = Object.values(children).filter(room => room.type === 'button');
      expect(roomsArr.length).toBeGreaterThan(0);
    });
  });

  it('each room has max three items', () => {
    const wrapper = shallow(<Room room={rooms[0]} onExit={null} onPickup={null} />);
    const children = toJSON(wrapper.children());
    const pArr = Object.values(children).filter(room => room.type === 'p');
    const numItems = pArr[0].children.length - 1;
    expect(numItems).toBeLessThanOrEqual(3);		
  });

});