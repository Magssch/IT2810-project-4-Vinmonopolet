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
import Modal from "react-responsive-modal";
import {fetchItems, syncSearchQuery} from './reduxTest';

class AppContent extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    // TODO skal erstattes med Redux
    state = {
        chartData: {},
        open: false,
    };

    //volumeOptions = [{key: 0.33, value: 0.33, text: '0.33 l'}, {key: 0.5, value: 0.5, text: '0.5 l'}];
    //countryOptions = [{key: "no", value: "no", text: 'Norge'}, {key: "fr", value: "fr", text: "Frankrike"}];
    //typeOptions = [{key: "wi", value: "wi", text: 'Vin'}, {key: "be", value: "be", text: "Øl"}];
    volumeOptions = [0.33, 0.5];
    countryOptions = ['Norge', "Frankrike"];
    typeOptions = ['Vin', 'Øl'];

    componentWillMount(){
        this.getChartData();
        this.props.fetch_items(this.generateQuery());
    };

    generateQuery = () => {
        return "http://localhost:12000/Product?" +
            ((!this.props.search_query.name) ? '' : `&Varenavn=${this.props.search_query.name}`) +
            ((!this.props.search_query.volume) ? '' : `&Volum=${this.props.search_query.volume.toString()}`) +
            ((!this.props.search_query.country) ? '' : `&Land=${this.props.search_query.country}`) +
            ((!this.props.search_query.type) ? '' : `&Varetype=${this.props.search_query.type}`) +
            ((!this.props.sorting.column) ? '' : `&sorting=${this.props.sorting.column}`);
    };

    handleChange = ({ name, value }) => {
        this.props.sync_query({name, value}).then(()=>{
            this.props.fetch_items(this.generateQuery())
        });
    };

    handleSort = () => {
        this.props.fetch_items(this.generateQuery())
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
                <ListView items={this.props.items} onSort={this.handleSort} onClick={() => this.onOpenModal}/>
                <br/><br/>
            </div>
        );
    }
}

const mapState = state => ({
    search_query: state.search_query,
    items: state.items,
    isLoading: state.isLoading,
    sorting: state.sorting
});

const mapDispatch = dispatch => ({
    sync_query: query => dispatch(syncSearchQuery(query)),
    fetch_items: url => dispatch(fetchItems(url)),
});

export default connect(
    mapState,
    mapDispatch
)(AppContent);

