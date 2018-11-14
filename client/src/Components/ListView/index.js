import React, { Component } from 'react';
import ListItem from './ListItem/index';
import { Table } from 'semantic-ui-react';
import './ListView.css';
import {setSorting, setField, toggleModal} from "../../reduxTest";
import connect from "react-redux/es/connect/connect";
import ModalChart from "../ModalChart";

class ListView extends Component {

    constructor() {
        super();
        this.handleRating = this.handleRating.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

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

    toggleModal = (index) =>
        this.props.toggle_modal(index ? index : 0);

    renderModal() {
        if(this.props.items.length > 0) {
            let item = this.props.items[this.props.index];
            return(<ModalChart
                // Sender inn en verdi for å si om modalen skal vises eller lukkes
                open={this.props.modalOpen}
                // Funksjon som kjører hver gang modalen lukkes via "esc" eller museklikk
                onClose={this.toggleModal}
                // Bestemmer om innholdet i modalen skal være sentrert
                // Overskriften til modalen, vi sender inn varenavn her
                topText={item.Varenavn}
                // Diverse info/statistikk om varen
                likes={item.Liker}                                          // Heltall
                dislikes={item.Misliker}                                        // Heltall
                argang={item.Argang}                                       // Heltall
                literPris={item.Literpris}                                 // Desimaltall
                friskhet={item.Friskhet}                                        // Heltall
                bitterhet={item.Bitterhet}                                       // Heltall
                sodme={item.Sodme}                                           // Heltall
                lukt={item.Lukt}                                        // Streng
                smak={item.Smak}                                 // Streng
                passerTil={[item.Passertil01, item.Passertil02, item.Passertil03]}       // Liste med strenger
                showCloseIcon={false}
                center={true}
            />);
        } else {
            return('');
        }
    }

    render() {
        let direction = this.props.sorting.direction, column = this.props.sorting.column;
        let headers = [{key:'Varenavn', field:'Varenavn'}, {key:'Varetype', field:'Varetype'},
            {key:'Alkohol', field:'Alkohol'}, {key:'Volum', field:'Volum'}, {key:'Pris', field:'Pris'},
            {key:'Land', field:'Land'}, /*{key:'Argang', field:'Årgang'},*/ {key:'APK', field:'Alkohol/Krone'}];
            return (
               <div>
                   {this.renderModal()}
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
                                <Table.HeaderCell style={{width: "12%"}} />
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
                                                onClick={this.toggleModal}
                                            />)
                            }
                        </Table.Body>
                    </Table>
                </div>
        );
    }
}

const mapState = state => ({
    sorting: state.sorting,
    modalOpen: state.modalOpen,
    index: state.index,
});

const mapDispatch = dispatch => ({
    set_sorting: sorting => dispatch(setSorting(sorting)),
    set_field: (rating, isLike, val) => dispatch(setField(rating, isLike, val)),
    toggle_modal: index => dispatch(toggleModal(index))
});

export default connect(
    mapState,
    mapDispatch
)(ListView);




