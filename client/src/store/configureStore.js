import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initialState';
import reducer from './modules';

export default function configureStore() {
    return createStore(
        reducer,
        initialState,
        applyMiddleware(thunk),
    );
}