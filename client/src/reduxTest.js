import axios from "axios";

const AppActionTypes = {
    SYNC_NEW_SEARCH_QUERY: 'SYNC_NEW_SEARCH_QUERY',
    UPDATE_ITEMS: 'UPDATE_ITEMS',
    LOAD_MORE_ITEMS: 'LOAD_MORE_ITEMS',
    SET_SORTING: 'SET_SORTING'
};

export const syncSearchQuery = ({ name, value }) =>
    dispatch=>{
        dispatch({
            type: AppActionTypes.SYNC_NEW_SEARCH_QUERY,
            payload: {value: value, name: name}
        });
        return Promise.resolve();
};

export const updateItems = result => ({
    type: AppActionTypes.UPDATE_ITEMS,
    payload: { items: result }
});

export const loadMoreItems = () => dispatch => {
    dispatch({
        type: AppActionTypes.LOAD_MORE_ITEMS
    });
    return Promise.resolve();
};

export const setSorting = sorting => dispatch => {
    dispatch({
        type: AppActionTypes.SET_SORTING,
        payload: {sorting: sorting}
    });
    return Promise.resolve();
};

export const fetchItems = url => {
    console.log(url);
    return (dispatch) => {
        return axios.get(url)
            .then(
                response => {dispatch(updateItems(response.data.docs));console.log("dispatching")}
            )
            .catch(error => {
                console.log('Feil');console.log(error); } );
    };
};

const defaultState = {
    isLoading: false,
    repeatQueries: false,
    newQuery: true,
    items: [],
    limit: 10,
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

export default function reducer(state, action) {
    state = state || defaultState;

    switch (action.type) {
        case AppActionTypes.SYNC_NEW_SEARCH_QUERY:
            console.log("NEWQUERY");
            return {
                ...state,
                limit: defaultState.limit,
                newQuery: true,
                search_query: {
                    ...state.search_query,
                    [action.payload.name]: action.payload.value
                },
                isLoading: true,
                repeatQueries: false
            };

        case AppActionTypes.UPDATE_ITEMS:
            console.log(action.payload.items);
            console.log("statelen:"+state.items.length);
            console.log("actionlen:"+action.payload.items.length);

            let repeatQueries = state.repeatQueries;
            if(state.items.length === action.payload.items.length) {
                repeatQueries++;
            }

            return {
                ...state,
                repeatQueries: repeatQueries,
                items: action.payload.items,
                isLoading: false,
                newQuery: false
            };

        case AppActionTypes.SET_SORTING:
            console.log(action.payload.sorting);
            return {
                ...state,
                isLoading: true,
                newQuery: true,
                sorting: action.payload.sorting
            };

        case AppActionTypes.LOAD_MORE_ITEMS:
            console.log("loading "+(state.limit+10)+" items");
            return {
                ...state,
                isLoading: true,
                limit: state.limit+10
            };

        default:
            return state;
    }
}