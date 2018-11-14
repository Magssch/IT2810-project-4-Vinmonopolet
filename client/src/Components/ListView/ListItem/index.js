import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import './ListItem.css';

class ListItem extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = () =>
        this.props.onClick();

    getIconType = () => {
        if(this.props.type.toLowerCase().includes("vin")) return "wine";
        if(this.props.type.toLowerCase().includes("cha")) return "wine";
        else if(this.props.type.toLowerCase().includes("øl")) return "beer";
        else if(this.props.type.toLowerCase().includes("ale")) return "beer";
        else return "liquor";
    };

    render() {
        return (
                <Table.Row onClick={this.handleChange()} style={{cursor: "pointer"}}>
                    <Table.Cell textAlign={"center"}>
                        <img className="item-icon" src={`../resources/${this.getIconType()}icon.png`} alt={"Icon"}/>
                    </Table.Cell>
                    <Table.Cell>{this.props.name}</Table.Cell>
                    <Table.Cell>{this.props.type}</Table.Cell>
                    <Table.Cell>{this.props.alcohol}</Table.Cell>
                    <Table.Cell>{this.props.volume}</Table.Cell>
                    <Table.Cell>{this.props.price}</Table.Cell>
                    <Table.Cell>{this.props.country}</Table.Cell>
                    <Table.Cell>{this.props.year}</Table.Cell>
                    <Table.Cell>{Math.round(this.props.apk*1000)/1000}</Table.Cell>
                </Table.Row>
        );
    }
}

export default ListItem;
