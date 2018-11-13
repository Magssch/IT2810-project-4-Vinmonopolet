import axios from "axios";

const AppActionTypes = {
    SYNC_NEW_SEARCH_QUERY: 'SYNC_NEW_SEARCH_QUERY',
    UPDATE_ITEMS: 'UPDATE_ITEMS',
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

export const setSorting = sorting => dispatch=> {
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
    items: [],
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
            return {
                ...state,
                search_query: {
                    ...state.search_query,
                    [action.payload.name]: action.payload.value
                },
                isLoading: true
            };

        case AppActionTypes.UPDATE_ITEMS:
            console.log(action.payload.items);
            return {
                ...state,
                items: action.payload.items,
                isLoading: false
            };

        case AppActionTypes.SET_SORTING:
            console.log(action.payload.sorting);
            return {
                ...state,
                items: state.sorting.direction === action.payload.sorting.direction ?
                    state.items : state.items.reverse(),
                sorting: action.payload.sorting
            };
        default:
            return state;
    }
}