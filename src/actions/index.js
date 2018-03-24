import {
    REQUEST_YEAR_DATA,
    POPULATE_SEASON_DATA,
} from '../constants';

export const fetchSeasonData = (year) => {
    return {
        type: REQUEST_YEAR_DATA,
        payload: { year },
    };
}

export const populateSeasonData = (seasonData) => {
    return {
        type: POPULATE_SEASON_DATA,
        payload: { ...seasonData },
    }
}
