import React from 'react';
import ListItem from "../components/ListView";
import renderer from 'react-test-renderer';

// Snapshot-test
test('snapshot-test: vin', ()=> {
    const tree = renderer.create(<ListView  />).toJSON();
    expect(tree).toMatchSnapshot();
});