import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react';
import './ListItem.css';

class ListItem extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleRating = this.handleRating.bind(this);
    }

    handleChange = () =>
        this.props.onClick();

    handleRating = (isLike) =>
        this.props.handleRating(this.props.index, isLike);

    getIconType = () => {
        if(this.props.type.toLowerCase().includes("vin")) return "wine";
        if(this.props.type.toLowerCase().includes("cha")) return "wine";
        else if(this.props.type.toLowerCase().includes("øl")) return "beer";
        else if(this.props.type.toLowerCase().includes("ale")) return "beer";
        else return "liquor";
    };

    render() {
        return (
                <Table.Row style={{cursor: "pointer"}}>
                    <Table.Cell onClick={this.handleChange()} textAlign={"center"}>
                        <img className="item-icon" src={`../resources/${this.getIconType()}icon.png`} alt={"Icon"}/>
                    </Table.Cell>
                    <Table.Cell onClick={this.handleChange()}>{this.props.name}</Table.Cell>
                    <Table.Cell onClick={this.handleChange()}>{this.props.type}</Table.Cell>
                    <Table.Cell onClick={this.handleChange()}>{this.props.alcohol}</Table.Cell>
                    <Table.Cell onClick={this.handleChange()}>{this.props.volume}</Table.Cell>
                    <Table.Cell onClick={this.handleChange()}>{this.props.price}</Table.Cell>
                    <Table.Cell onClick={this.handleChange()}>{this.props.country}</Table.Cell>
                    <Table.Cell onClick={this.handleChange()}>{this.props.year}</Table.Cell>
                    <Table.Cell onClick={this.handleChange()}>{Math.round(this.props.apk*1000)/1000}</Table.Cell>
                    <Table.Cell textAlign={'center'}>
                        <Icon name={"thumbs down outline"} onClick={() => this.handleRating(false)}
                              style={{cursor: "pointer"}}/>
                        <b style={
                            (this.props.likes-this.props.dislikes) < 0 ? {color: "#ce3a1c"} : {color: "#0f8911"}
                        }>{(this.props.likes-this.props.dislikes)}</b>
                        <Icon name={"thumbs up outline"} onClick={() => this.handleRating(true)}
                              style={{cursor: "pointer", marginLeft: "5px"}}/>
                    </Table.Cell>
                </Table.Row>
        );
    }
}

export default ListItem;
