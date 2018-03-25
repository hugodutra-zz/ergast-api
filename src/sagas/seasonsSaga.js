import { all, call, put, fork, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga'

import { REQUEST_YEAR_DATA } from '../constants';
import { getSeasonData, getSeasonChampion } from '../helpers/api';
import { populateSeasonData } from '../actions';

function* performSeasonRequest(action) {
    yield call(delay, 1000);

    try {
        const [resultsResponse, championResponse] = yield all([
            call(getSeasonData, action.payload.year),
            call(getSeasonChampion, action.payload.year),
        ]);

        const seasonData = {};

        seasonData.results = resultsResponse.map(item => {
            const circuitData = {};
            circuitData.circuitName = item.Circuit.circuitName;
            circuitData.winnerId = item.Results[0].Driver.driverId;
            circuitData.winnerName = `${item.Results[0].Driver.givenName} ${item.Results[0].Driver.familyName}`;

            return circuitData;
        });

        seasonData.championId = championResponse.Driver.driverId;
        seasonData.championName = `${championResponse.Driver.givenName} ${championResponse.Driver.familyName}`;

        seasonData.seasonYear = action.payload.year;

        yield put(populateSeasonData(seasonData));
    } catch(e) {
        console.log(e)
        alert('Could not fetch season information.');
    }
}

export default function* seasonsSaga() {
    yield fork(takeLatest, REQUEST_YEAR_DATA, performSeasonRequest);
}
