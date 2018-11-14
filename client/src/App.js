import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ListView from './Components/ListView';
import Search from './Components/Search';
import Query from './Components/Query';
import { Form, Loader } from 'semantic-ui-react';
import PieChart from './Components/PieChart';
import BarChart from './Components/BarChart';
import DoughnutChart from './Components/DoughnutChart';
import LineChart from './Components/LineChart';
import Modal from "react-responsive-modal";
import {fetchItems, syncSearchQuery, loadMoreItems} from './reduxTest';

const json = require('./uniqueData.json');

class AppContent extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    // TODO skal erstattes med Redux
    state = {
        chartData: {},
        open: false,
    };

    volumeOptions = json.volum;
    countryOptions = json.land;
    typeOptions = json.type;

    componentWillMount(){
        this.getChartData();
        this.props.fetch_items(this.generateQuery());
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    generateQuery = () => {
        return "http://localhost:12000/Product?" +
            ((!this.props.search_query.name) ? '' : `&Varenavn=${this.props.search_query.name}`) +
            ((!this.props.search_query.volume) ? '' : `&Volum=${this.props.search_query.volume}`) +
            ((!this.props.search_query.country) ? '' : `&Land=${this.props.search_query.country}`) +
            ((!this.props.search_query.type) ? '' : `&Varetype=${this.props.search_query.type}`) +
            ((!this.props.limit) ? '' : `&limit=${this.props.limit}`) +
            ((!this.props.sorting.column) ? '&sorting=Pris' : `&sorting=${this.props.sorting.column}`) +
            ((this.props.sorting.direction === 'ascending') ? '&order=asc' : '&order=desc');
    };

    // Handler that is run upon inputting new data into Query or Search components.
    handleChange = ({ name, value }) => {
        this.props.sync_query({name, value}).then(()=>{
            this.props.fetch_items(this.generateQuery())
        });
    };

    // Handler that is run upon sorting items in ListView
    handleSort = () => {
        this.props.fetch_items(this.generateQuery())
    };

    // Handler that is run when scrolling. Will load more items (increase pagination limit) if close to bottom
    handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop+200
            >= document.documentElement.scrollHeight
            && !(this.props.repeatQueries > 2)
        ) {
            this.props.load_more_items().then(()=>{
                this.props.fetch_items(this.generateQuery())
            });
        }
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
                               onChange={this.handleChange} style={{width: "80px"}}/>
                        <Query name="country" placeholder="Land" options={this.countryOptions}
                               onChange={this.handleChange} style={{width: "150px"}}/>
                        <Query name="type" placeholder="Type" options={this.typeOptions}
                               onChange={this.handleChange} style={{width: "150px"}}/>
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
                <div>
                    <ListView items={this.props.items} onSort={this.handleSort}
                              onClick={() => this.onOpenModal}/>
                    <Loader active={this.props.isLoading} inline='centered' />
                </div>
                <br/>
            </div>
        );
    }
}

const mapState = state => ({
    search_query: state.search_query,
    items: state.items,
    isLoading: state.isLoading,
    sorting: state.sorting,
    limit: state.limit,
    repeatQueries: state.repeatQueries
});

const mapDispatch = dispatch => ({
    sync_query: query => dispatch(syncSearchQuery(query)),
    fetch_items: url => dispatch(fetchItems(url)),
    load_more_items: () => dispatch(loadMoreItems()),
});

export default connect(
    mapState,
    mapDispatch
)(AppContent);

