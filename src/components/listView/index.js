import React, { Component } from 'react';
import ListItem from './ListItem';
import { Table } from 'semantic-ui-react';
import './ListView.css';

class ListView extends Component {

    render() {
        return (
            <Table fixed size={'large'}>
                <Table.Header>
                    <Table.Row>
                        <th>Navn</th>
                        <th>Varetype</th>
                        <th>Volum</th>
                        <th>Pris</th>
                        <th>Land</th>
                        <th>Årgang</th>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        this.props.items.map(
                            item => <ListItem
                                        key={item.Varenummer}
                                        name={item.Varenavn}
                                        type={item.Varetype}
                                        volume={item.Volum}
                                        price={item.Pris}
                                        country={item.Land}
                                        year={item.Argang}
                                    />)
                    }
                </Table.Body>
            </Table>
        );
    }
}

export default ListView;

