const AppActionTypes = {
    INITIALIZE_APP: 'INITIALIZE_APP',
    SYNC_NEW_SEARCH_QUERY: 'SYNC_NEW_SEARCH_QUERY',
};

export const initializeApp = name => ({
    type: AppActionTypes.INITIALIZE_APP,
    payload: { name }
});

export const syncNewSearchQuery = query => ({
    type: AppActionTypes.SYNC_NEW_SEARCH_QUERY,
    payload: { search_query:  }
});

const defaultState = {
    name: '',
    posts: [
        {
            content: 'Hello'
        }
    ],
    search_query: {
        name: null,
        volume: null,
        country: null,
    },
};

export default function reducer(state, action) {
    state = state || defaultState;

    switch (action.type) {
        case AppActionTypes.INITIALIZE_APP:
            return {
                ...state,
                name: action.payload.name
            };

        case AppActionTypes.SYNC_NEW_SEARCH_QUERY:
            return {
                ...state,
                search_query: action.payload.search_query
            };

        default:
            return state;
    }
}