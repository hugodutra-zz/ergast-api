import { all, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga'

import { cloneableGenerator } from 'redux-saga/utils';
import '../enzymeSetup';
import { performSeasonRequest } from './seasonsSaga';
import { fetchSeasonData, populateSeasonData } from '../actions';
import { getSeasonData, getSeasonChampion } from '../helpers/api';

const year = 2015;
const fetchSeasonDataAction = fetchSeasonData(year);

describe('request season data flow', () => {
    const generator = cloneableGenerator(performSeasonRequest)(fetchSeasonDataAction);
    
    it('Should call api', () => {
        expect(generator.next().value).toEqual(call(delay, 1000));
        expect(generator.next().value).toEqual(all([
            call(getSeasonData, year),
            call(getSeasonChampion, year),
        ]));
        expect(generator.next().done).toEqual(true); 
    });
});
