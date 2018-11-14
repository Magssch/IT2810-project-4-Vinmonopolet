import axios from "axios";

export const AppActionTypes = {
    SYNC_NEW_SEARCH_QUERY: 'SYNC_NEW_SEARCH_QUERY',
    UPDATE_ITEMS: 'UPDATE_ITEMS',
    LOAD_MORE_ITEMS: 'LOAD_MORE_ITEMS',
    SET_SORTING: 'SET_SORTING',
    SET_FIELD: 'SET_FIELD',
    TOGGLE_MODAL: 'TOGGLE_MODAL'
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

export const setField = (index, field, val) => ({
    type: AppActionTypes.SET_FIELD,
    payload: { index: index, field: field, val: val }
});

export const toggleModal = (index) => ({
    type: AppActionTypes.TOGGLE_MODAL,
    payload: { index: index }
});

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