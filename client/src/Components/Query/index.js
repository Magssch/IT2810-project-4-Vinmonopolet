import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Query extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e, { name, value }) =>
        this.props.onChange({name, value});

    render() {
        return (
            <Form.Dropdown placeholder={this.props.placeholder} fluid search selection name={this.props.name} options={this.props.options} onChange={this.handleChange}  />
        );
    }
}

export default Query;
