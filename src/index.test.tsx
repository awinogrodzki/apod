import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './app';

describe('App', () => {

  it('should render appropriate message', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.text()).toBe("TUTAJ BĘDZIE APKA");
  });

})