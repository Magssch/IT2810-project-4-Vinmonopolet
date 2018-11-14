import React, { Component } from 'react';
import ListItem from './ListItem/index';
import { Table } from 'semantic-ui-react';
import './ListView.css';
import {setSorting, setField} from "../../reduxTest";
import connect from "react-redux/es/connect/connect";

class ListView extends Component {

    constructor() {
        super();
        this.handleRating = this.handleRating.bind(this);
    }

    handleChange = () =>
        this.props.onClick();

    handleSort = clickedColumn => () => {
        if (this.props.sorting.column !== clickedColumn) {
            this.props.set_sorting({
                column: clickedColumn,
                direction: 'descending',
            }).then(()=>{
                this.props.onSort();
            });
        } else {
            this.props.set_sorting({
                column: this.props.sorting.column,
                direction: this.props.sorting.direction === 'ascending' ? 'descending' : 'ascending'
            }).then(()=>{
                this.props.onSort();
            });
        }
    };

    handleRating = (index, isLike) => {
        console.log(this.props.items[index][(isLike ? 'Liker' : 'Misliker')]);
        this.props.set_field(index, (isLike ? 'Liker' : 'Misliker'), this.props.items[index][(isLike ? 'Liker' : 'Misliker')]+1)
    };

    render() {
        let direction = this.props.sorting.direction, column = this.props.sorting.column;
        let headers = [{key:'Varenavn', field:'Varenavn'}, {key:'Varetype', field:'Varetype'},
            {key:'Alkohol', field:'Alkohol'}, {key:'Volum', field:'Volum'}, {key:'Pris', field:'Pris'},
            {key:'Land', field:'Land'}, {key:'Argang', field:'Årgang'}, {key:'APK', field:'Alkohol Per Krone'}];

            return (
            <Table inverted sortable fixed selectable size={'large'}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell style={{width: "7%"}} />
                        {
                            headers.map(
                                (header, i) =>
                                    (<Table.HeaderCell
                                        key={i}
                                        sorted={column === header.key ? direction : null}
                                        onClick={this.handleSort(header.key)}
                                    >
                                        {header.field}
                                    </Table.HeaderCell>)
                            )
                        }
                        <Table.HeaderCell style={{width: "10%"}} />
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        this.props.items.map(
                            (item, i) => <ListItem
                                        index={i}
                                        key={item.Varenummer}
                                        name={item.Varenavn}
                                        type={item.Varetype}
                                        alcohol={item.Alkohol}
                                        volume={item.Volum}
                                        price={item.Pris}
                                        country={item.Land}
                                        year={item.Argang}
                                        apk={item.APK}
                                        likes={item.Liker}
                                        dislikes={item.Misliker}
                                        handleRating={this.handleRating}
                                        onClick={this.handleChange}
                                    />)
                    }
                </Table.Body>
            </Table>
        );
    }
}

const mapState = state => ({
    sorting: state.sorting
});

const mapDispatch = dispatch => ({
    set_sorting: sorting => dispatch(setSorting(sorting)),
    set_field: (rating, isLike, val) => dispatch(setField(rating, isLike, val))
});

export default connect(
    mapState,
    mapDispatch
)(ListView);




