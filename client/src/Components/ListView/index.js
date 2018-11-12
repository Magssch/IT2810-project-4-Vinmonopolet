import React, { Component } from 'react';
import ListItem from './ListItem/index';
import { Table } from 'semantic-ui-react';
import './ListView.css';
import _ from 'lodash';

class ListView extends Component {
    state = {
        column: null,
        data: this.props.items,
        direction: null,
    };

    handleChange = () =>
        this.props.onClick();

    handleSort = clickedColumn => () => {
        const { column, data, direction } = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            });

            return
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    };

    render() {
        const { column, data, direction } = this.state;

        return (
            <Table inverted sortable fixed selectable collapsing size={'large'}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'Varenavn' ? direction : null}
                            onClick={this.handleSort('Varenavn')}
                        >
                            Varenavn
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'Varetype' ? direction : null}
                            onClick={this.handleSort('Varetype')}
                        >
                            Varetype
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'Volum' ? direction : null}
                            onClick={this.handleChange()}
                        >
                            Volum
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'Pris' ? direction : null}
                            onClick={this.handleSort('Pris')}
                        >
                            Pris
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'Land' ? direction : null}
                            onClick={this.handleSort('Land')}
                        >
                            Land
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'Argang' ? direction : null}
                            onClick={this.handleSort('Argang')}
                        >
                            Årgang
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        data.map(
                            item => <ListItem
                                        key={item.Varenummer}
                                        name={item.Varenavn}
                                        type={item.Varetype}
                                        volume={item.Volum}
                                        price={item.Pris}
                                        country={item.Land}
                                        year={item.Argang}
                                        onClick={this.handleChange}
                                    />)
                    }
                </Table.Body>
            </Table>
        );
    }
}

export default ListView;

