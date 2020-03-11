import React from 'react';
import { shallow } from 'enzyme';
import Header from "../Footer"




describe('Header component test', () => {
  it('renders without crashing', () => {
     shallow(<Header />);
   });
});