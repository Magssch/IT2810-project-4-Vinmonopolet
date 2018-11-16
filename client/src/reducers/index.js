import {AppActionTypes} from '../actions';
import {isEqual} from 'lodash';

// Initial app-state
const defaultState = {
    isLoading: false,
    repeatQueries: 0,
    newQuery: true,
    items: [],
    limit: 10,
    index: 0,
    modalOpen: false,
    sorting: {
        column: null,
        direction: 'ascending',
    },
    search_query: {
        name: null,
        volume: null,
        country: null,
        type: null,
    },
};

export default function rootReducer(state, action) {
    state = state || defaultState;

    switch (action.type) {
        case AppActionTypes.SYNC_NEW_SEARCH_QUERY:
            //console.log("NEWQUERY");
            return {
                ...state,
                limit: defaultState.limit,
                newQuery: true,
                search_query: {
                    ...state.search_query,
                    [action.payload.name]: action.payload.value
                },
                isLoading: true,
                repeatQueries: 0
            };

        case AppActionTypes.UPDATE_ITEMS:
            /*console.log(action.payload.items);
            console.log("statelen:"+state.items.length);
            console.log("actionlen:"+action.payload.items.length);*/ // TODO REMOVE DEBUG

            let repeatQueries = state.repeatQueries;

            let newState = !state.newQuery ? state.items.concat(action.payload.items) : action.payload.items;

            // Avoid unnecessary redraws and fetches by recording amount of cases where old state = new state
            if(isEqual(state.items , newState)  && !state.newQuery) {
                repeatQueries++;
            }
            console.log(state.limit);
            return {
                ...state,
                repeatQueries: repeatQueries,
                items: newState,
                isLoading: false,
                newQuery: false
            };

        case AppActionTypes.SET_SORTING:
            //console.log(action.payload.sorting);
            return {
                ...state,
                repeatQueries: defaultState.repeatQueries,
                isLoading: true,
                newQuery: true,
                sorting: action.payload.sorting
            };

        case AppActionTypes.LOAD_MORE_ITEMS:
            //console.log("loading "+(state.limit+10)+" items");
            return {
                ...state,
                isLoading: true,
                limit: state.limit+10
            };

        case AppActionTypes.TOGGLE_MODAL:
            return {
                ...state,
                modalOpen: !state.modalOpen,
                index: action.payload.index
            };

        case AppActionTypes.SET_FIELD:
            return {
                ...state,
                items: state.items.map((item, i) => i === action.payload.index ? {
                    ...item,
                    [action.payload.field]: state.items[action.payload.index][action.payload.field]+1
                    } : item)
            };

        default:
            return state;
    }
}