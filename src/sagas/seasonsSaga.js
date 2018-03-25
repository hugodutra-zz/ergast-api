import { all, call, put, fork, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga'

import { REQUEST_YEAR_DATA } from '../constants';
import { getSeasonData, getSeasonChampion } from '../helpers/api';
import { populateSeasonData } from '../actions';

export function* performSeasonRequest(action) {
    // debouce the api call to avoid multiple requests
    yield call(delay, 1000);

    // making request to get season results and season champion in parallel using all() 
    try {
        const [resultsResponse, championResponse] = yield all([
            call(getSeasonData, action.payload.year),
            call(getSeasonChampion, action.payload.year),
        ]);

        const seasonData = {};
        // iterating over the api response for season results 
        // and getting only the information that is useful for the application to have a cleaner redux store
        seasonData.results = resultsResponse.map(item => {
            const circuitData = {};
            circuitData.circuitName = item.Circuit.circuitName;
            circuitData.winnerId = item.Results[0].Driver.driverId;

            // concatenating to get full name 
            circuitData.winnerName = `${item.Results[0].Driver.givenName} ${item.Results[0].Driver.familyName}`;

            return circuitData;
        });

        seasonData.championId = championResponse.Driver.driverId;
        seasonData.championName = `${championResponse.Driver.givenName} ${championResponse.Driver.familyName}`;

        seasonData.seasonYear = action.payload.year;
        
        // calling action creator to pupulate redux store
        yield put(populateSeasonData(seasonData));
    } catch(e) {
        // shows alert in case the request fails
        alert('Could not fetch season information.');
    }
}

export default function* seasonsSaga() {
    yield fork(takeLatest, REQUEST_YEAR_DATA, performSeasonRequest);
}
