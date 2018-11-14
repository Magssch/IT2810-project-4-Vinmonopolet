import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Query extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e, { name, value }) =>
        this.props.onChange({name, value});

    parseOptions = () => {
        let optionArray = [{key: 0, value: null, text: this.props.placeholder}];
        this.props.options.map(option => optionArray.push({key: option, value: option, text: option}));
        return optionArray;
    };

    render() {
        return (
            <Form.Dropdown placeholder={this.props.placeholder} fluid search selection name={this.props.name} options={this.parseOptions()} onChange={this.handleChange}  />
        );
    }
}

export default Query;
