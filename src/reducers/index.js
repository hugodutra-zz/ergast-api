import { combineReducers } from 'redux';
import seasonsReducer from './seasonsReducer';

const mainReducer = combineReducers({
    season: seasonsReducer
});

export default (state, action) => mainReducer(state, action);
