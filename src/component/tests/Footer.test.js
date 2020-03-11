import React from 'react';
import { shallow } from 'enzyme';
import Footer from "../Footer"




describe('Footer component test', () => {
  it('renders without crashing', () => {
     shallow(<Footer />);
   });
});