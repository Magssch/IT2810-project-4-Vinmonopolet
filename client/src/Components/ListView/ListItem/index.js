import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';


class ListItem extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = () =>
        this.props.onClick();

    render() {
        return (
                <Table.Row onClick={this.handleChange()} style={{cursor: "pointer"}}>
                    <Table.Cell>{this.props.name}</Table.Cell>
                    <Table.Cell>{this.props.type}</Table.Cell>
                    <Table.Cell>{this.props.volume}</Table.Cell>
                    <Table.Cell>{this.props.price}</Table.Cell>
                    <Table.Cell>{this.props.country}</Table.Cell>
                    <Table.Cell>{this.props.year}</Table.Cell>
                </Table.Row>
        );
    }
}

export default ListItem;
