import React from 'react';
import {Planner} from '.';
import { render } from 'enzyme'
import { Provider } from "react-redux";
import {store} from '../App'


describe("Planner", () => {
    it('Plannes Snapshot', () => {
        const tree = render(<Provider store={store}> <Planner /></Provider>);
        expect(tree).toMatchSnapshot();
    })
})