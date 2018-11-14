import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react';
import './ListItem.css';

class ListItem extends Component {

    // Bindings
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleRating = this.handleRating.bind(this);
    }

    // Handler for user selecting an item
    handleChange = () => {
        this.props.onClick(this.props.index);
    };

    // Handler for user giving a rating (like/dislike)
    handleRating = (isLike) =>
        this.props.handleRating(this.props.index, isLike);

    // Returns appropriate icon-type based on keywords in item type.
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
                    <Table.Cell onClick={() => this.handleChange()} textAlign={"center"}>
                        <img className="item-icon" src={`../resources/${this.getIconType()}icon.png`} alt={"Icon"}/>
                    </Table.Cell>
                    <Table.Cell onClick={() => this.handleChange()} >{this.props.name}</Table.Cell>
                    <Table.Cell onClick={() => this.handleChange()} >{this.props.type}</Table.Cell>
                    <Table.Cell onClick={() => this.handleChange()} >{this.props.alcohol}</Table.Cell>
                    <Table.Cell onClick={() => this.handleChange()} >{this.props.volume}</Table.Cell>
                    <Table.Cell onClick={() => this.handleChange()} >{this.props.price}</Table.Cell>
                    <Table.Cell onClick={() => this.handleChange()} >{this.props.country}</Table.Cell>
                    <Table.Cell onClick={() => this.handleChange()}>{Math.round(this.props.apk*1000)/1000}</Table.Cell>
                    <Table.Cell textAlign={'center'}>
                        <div style={{overflow: "hidden"}}>
                            <Icon name={"thumbs down outline"} onClick={() => this.handleRating(false)}/>
                            <b style={
                                (this.props.likes-this.props.dislikes) < 0 ? {color: "#ce3a1c"} : {color: "#0f8911"}
                            }>{(this.props.likes-this.props.dislikes)}</b>
                            <Icon name={"thumbs up outline"} onClick={() => this.handleRating(true)}
                                  style={{marginLeft: "5px"}}/>
                        </div>
                    </Table.Cell>
                </Table.Row>
        );
    }
}

export default ListItem;
