const AppActionTypes = {
    SYNC_NEW_SEARCH_QUERY: 'SYNC_NEW_SEARCH_QUERY',
    UPDATE_ITEMS: 'UPDATE_ITEMS',
};

export const syncNewSearchQuery = ({ name, value }) => ({
    type: AppActionTypes.SYNC_NEW_SEARCH_QUERY,
    payload: { value: value, name: name}
});

export const updateItems = result => ({
    type: AppActionTypes.UPDATE_ITEMS
});

const defaultState = {
    isLoading: false,
    items: [{
        "_id": "5bdd8a695402002b2ef1b0e7",
        "Varenummer": 6505103,
        "Varenavn": "Wodqa",
        "Volum": 0.1,
        "Pris": 100.1,
        "Literpris": 1001,
        "Varetype": "Vodka",
        "Fylde": "0",
        "Friskhet": 0,
        "Bitterhet": 0,
        "Sodme": "0",
        "Farge": "Blank.",
        "Lukt": "Ren aroma av mineraler.",
        "Smak": "Myk. mineralsk og lang smak.",
        "Passertil01": "",
        "Passertil02": "",
        "Passertil03": "",
        "Land": "Østerrike",
        "Distrikt": "Øvrige",
        "Argang": null,
        "Rastoff": "Hvete. vann",
        "Alkohol": 40,
        "Sukker": 2,
        "Syre": "Ukjent",
        "Produsent": "Qonzern",
        "Vareurl": "http://www.vinmonopolet.no/vareutvalg/varedetaljer/sku-6505103",
        "APK": 0.03996004
    },
        {
            "_id": "5bdd8a6a5402002b2ef1c56b",
            "Varenummer": 9218201,
            "Varenavn": "Santa Sofia Montefoscarino Soave Classico 2017",
            "Volum": 0.75,
            "Pris": 100,
            "Literpris": 133.33,
            "Varetype": "Hvitvin",
            "Fylde": "7",
            "Friskhet": 7,
            "Bitterhet": 0,
            "Sodme": "2",
            "Farge": "Lys strågul.",
            "Lukt": "Aroma av hvit fersken og appelsinskall. Hint av lime og anis og blomstertoner.",
            "Smak": "Fin mineralitet. Fruktig anslag og bløt stil.",
            "Passertil01": "Skalldyr",
            "Passertil02": "Fisk",
            "Passertil03": "Lyst kjøtt",
            "Land": "Italia",
            "Distrikt": "Veneto",
            "Argang": 2017,
            "Rastoff": "Garganega 80%. Chardonnay 10%. Trebbiano 5%. Pinot Bianco 5%",
            "Alkohol": 12.5,
            "Sukker": 4.2,
            "Syre": "5.2",
            "Produsent": "Santa Sofia",
            "Vareurl": "http://www.vinmonopolet.no/vareutvalg/varedetaljer/sku-9218201",
            "APK": 0.093752344
        },
        {
            "_id": "5bdd8a6b5402002b2ef1cc4f",
            "Varenummer": 10148302,
            "Varenavn": "Pizza Lovers Vino Bianco",
            "Volum": 0.5,
            "Pris": 100,
            "Literpris": 200,
            "Varetype": "Hvitvin",
            "Fylde": "3",
            "Friskhet": 9,
            "Bitterhet": 0,
            "Sodme": "3",
            "Farge": "Gul.",
            "Lukt": "Hvite blomster.",
            "Smak": "Frisk og fruktig.",
            "Passertil01": "Skalldyr",
            "Passertil02": "Lyst kjøtt",
            "Passertil03": "Grønnsaker",
            "Land": "Italia",
            "Distrikt": "Friuli-Venezia Giulia",
            "Argang": null,
            "Rastoff": "Ribolla 33%. Friulano (Tai) 33%. Chardonnay 33%",
            "Alkohol": 11,
            "Sukker": 6,
            "Syre": "5.2",
            "Produsent": "Fossa Mala",
            "Vareurl": "http://www.vinmonopolet.no/vareutvalg/varedetaljer/sku-10148302",
            "APK": 0.055
        },],
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
            return {
                ...state,
                items: action.result,
                isLoading: false
            };

        default:
            return state;
    }
}