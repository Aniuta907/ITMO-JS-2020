import React from 'react';
import SearchBar from '../components/SearchBar';
import {mount} from 'enzyme';
describe('SearchBar tests', () => {
    test('Check input change cause state changing', () => {
        const props = {
            onSearchTermChange: jest.fn(),
            dfltVl: ''
        }

        const wrapper = mount(<SearchBar {...props} />);
        wrapper.find('input').simulate('change', { target: { value: 'Hello' } })
        expect(wrapper.state('term')).toEqual('Hello');
    });

})
