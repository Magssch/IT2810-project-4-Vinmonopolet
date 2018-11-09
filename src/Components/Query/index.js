import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Query extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e, { name, value }) =>
        this.props.onChange({name, value});

    countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }]

    render() {
        return (
            <Form.Dropdown placeholder='Select Country' fluid search selection name={this.props.name} options={this.countryOptions} onChange={this.handleChange}  />
        );
    }
}

export default Query;
