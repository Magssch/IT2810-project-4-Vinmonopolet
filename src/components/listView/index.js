import React from "react";
import listItem from "./listItem";
import { Table } from 'semantic-ui-react'

class listView extends React.Component {

    render() {
        return (
            <Table fixed>
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
                            item => <listItem
                                        key={item._id}
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

export default listView;

