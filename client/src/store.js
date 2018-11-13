import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reduxTest.js'
import {fetchItems} from "./reduxTest";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchItems("http://localhost:3000/Product"));

export default store;