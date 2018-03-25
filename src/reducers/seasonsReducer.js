import { POPULATE_SEASON_DATA } from '../constants';

const initialState = {
    seasonYear: '',
    results: [],
    seasonChampionName: '',
    seasonChampionId: '',
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    // creating new object to avoid mutability problems
    const newState = Object.assign({}, state);

    switch (type) {
        case POPULATE_SEASON_DATA:
            newState.seasonYear = payload.seasonYear;
            newState.results = [ ...payload.results ];
            newState.seasonChampionName = payload.championName;
            newState.seasonChampionId = payload.championId;

            return newState;
        default:
            return state;
    }
}
