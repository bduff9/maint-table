/* jshint ignore: start */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MaintTable from '../lib/elements/MaintTable';

describe('MaintTable', () => {
	it('should render table', () => {
		const wrapper = shallow(<MaintTable />);
		expect(wrapper.is('table')).to.equal(true);
	});
});
