import React from 'react';
import { shallow } from 'enzyme';
import Router from "../Router"


describe('Router component test', () => {
  it('Router without crashing', () => {
    shallow(<Router />);
  });
});