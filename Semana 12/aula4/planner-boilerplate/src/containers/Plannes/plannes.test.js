import React from 'react';
import {Plannes} from './plannes';
import {render} from 'enzyme'


describe("Plannes", () => {
    it('Plannes Snapshot', () => {
        const tree = render(<Plannes/>);
        expect(tree).toMatchSnapshot();
    })
})