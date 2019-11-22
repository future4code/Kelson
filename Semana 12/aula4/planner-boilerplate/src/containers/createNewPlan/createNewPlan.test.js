import React from 'react'
import {Create} from './createNewPlan'
import { shallow } from 'enzyme'
import { render } from 'enzyme'

describe("Create", () => {
  
    it('Plannes Snapshot', () => {
        const tree = render(<Create />);
        expect(tree).toMatchSnapshot();
    })
})