import axios from 'axios';
import initialState from '../initialState';

const eventsReducer = (state = initialState.events, action = {}) => {
    switch (action.type) {
        case 'FETCH_EVENTS_BEGIN':
            return Object.assign({}, state, { loading: true });
        case 'FETCH_EVENTS_SUCCESS':
            return Object.assign({}, state, { data: action.events, loading: false });
        case 'FETCH_EVENTS_FAILURE':
            return Object.assign({}, state, { error: true, loading: false });
        default:
            return state;
    }
};

export default eventsReducer;

export function fetchEventsBegin() {
    return { type: 'FETCH_EVENTS_BEGIN' };
}

export function fetchEventsSuccess(events) {
    return { type: 'FETCH_EVENTS_SUCCESS', events };
}

export function fetchEventsFailure(error) {
    return { type: 'FETCH_EVENTS_FAILURE', error };
}

export function fetchEvents() {
    return (dispatch) => {
        dispatch(fetchEventsBegin());
        axios
            .get('https://jowies.com/api/events')
            .then((response) => {
                dispatch(fetchEventsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchEventsFailure(error));
            });
    };
}