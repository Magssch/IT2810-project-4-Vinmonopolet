import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ListView from './Components/ListView';
import Search from './Components/Search';
import Query from './Components/Query';
import { Form } from 'semantic-ui-react';
import PieChart from './Components/PieChart';
import BarChart from './Components/BarChart';
import DoughnutChart from './Components/DoughnutChart';
import LineChart from './Components/LineChart';
import axios from 'axios';
import Modal from "react-responsive-modal";
import {syncNewSearchQuery, updateItems} from './reduxTest';

class AppContent extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    // TODO skal erstattes med Redux
    state = {
            chartData: {},
    };

    volumeOptions = [{key: 0.33, value: 0.33, text: '0.33 l'}, {key: 0.5, value: 0.5, text: '0.5 l'}];
    countryOptions = [{key: "no", value: "no", text: 'Norge'}, {key: "fr", value: "fr", text: "Frankrike"}];
    typeOptions = [{key: "wi", value: "wi", text: 'Vin'}, {key: "be", value: "be", text: "Øl"}];

    componentWillMount(){
        this.getChartData();
    };

    handleChange = ({ name, value }) =>
        this.props.syncNewQuery({ name, value });

    // TODO implementer axios
    fetchItems = () => {

        // gjør axios-fetch
        let result = {};
        this.props.update_items(result);
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    getChartData() {
        // Her vil vi implementere Ajax/Axios eller hva faen.
        this.setState({
            chartData: {
                labels: ['beers', 'wine', 'liquor'],
                datasets:[{
                    label: 'number of units',
                    data: [10 , 20, 30, 0],
                    backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 245, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                }],
            }
        });
    }

    render() {

        const { open } = this.state;

        return (
            <div className="App">
                <img className="App-logo" src={"../resources/vinmonopolet.png"} alt={"Vinmonopolet"}/>
                <Form style={{width: "80%"}}>
                    <Form.Group>
                        <Search isLoading={this.props.isLoading} onChange={this.handleChange}/>
                        <Query name="volume" placeholder="Volum" options={this.volumeOptions}
                               onChange={this.handleChange}/>
                        <Query name="country" placeholder="Land" options={this.countryOptions}
                               onChange={this.handleChange}/>
                        <Query name="type" placeholder="Type" options={this.typeOptions} onChange={this.handleChange}/>
                    </Form.Group>
                </Form>
                    <Modal
                        open={open}
                        onClose={this.onCloseModal.bind(this)}
                        showCloseIcon={false}
                        center={true}>
                        <h2>Simple centered modal</h2>
                        <div className="chartContainer">
                            <DoughnutChart chartData={this.state.chartData} legendPosition="bottom" topText="Doughnut"/>
                            <PieChart chartData={this.state.chartData} legendPosition="bottom" topText="Doughnut"/>
                            <LineChart chartData={this.state.chartData} legendPosition="bottom" topText="Doughnut"/>
                            <BarChart chartData={this.state.chartData} legendPosition="bottom" topText="Doughnut"/>
                        </div>
                    </Modal>
                <p>{this.props.search_query.name}</p>
                <p>{this.props.search_query.type}</p>
                <p>{this.props.search_query.country}</p>
                <p>{this.props.search_query.volume}</p>
                <ListView items={this.props.items} onClick={() => this.onOpenModal}/>
            </div>
        );
    }
}

const mapState = state => ({
    search_query: state.search_query,
    items: state.items,
    isLoading: state.isLoading
});

const mapDispatch = dispatch => ({
    syncNewQuery: query => dispatch(syncNewSearchQuery(query)),
    update_items: result => dispatch(updateItems(result)),
});

export default connect(
    mapState,
    mapDispatch
)(AppContent);

