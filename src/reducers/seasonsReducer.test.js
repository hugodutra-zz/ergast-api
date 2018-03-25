import reducer from './seasonsReducer';
import { populateSeasonData } from '../actions';

describe('test seasonsReducer', () => {
    const initialState = {
        seasonYear: '',
        results: [],
        seasonChampionName: '',
        seasonChampionId: '',
    };

    it('should have an initial state', () => {
        expect(reducer(undefined, { type: '' })).toEqual(initialState);
    });

    it('should populate reducer after request', () => {
        const seasonData = {
            seasonYear: 2015,
            championName: "Sebastian Vettel",
            championId: "vettel",
            results: [
                {
                    circuitName: "Albert Park Grand Prix Circuit",
                    winnerId: "alonso",
                    winnerName: "Fernando Alonso",
                },
                {
                    circuitName: "Bahrain International Circuit",
                    winnerId: "button",
                    winnerName: "Jenson Button"
                },
                {
                    circuitName: "Sepang International Circuit",
                    winnerId: "vettel",
                    winnerName: "Sebastian Vettel",
                },
                {
                    circuitName: "Shanghai International Circuit",
                    winnerId: "button",
                    winnerName: "Jenson Button"
                },
            ],
        };

        const action = populateSeasonData(seasonData);
        const newState = reducer(initialState, action);

        expect(newState.results).toEqual(seasonData.results);
        expect(newState.seasonYear).toEqual(seasonData.seasonYear);
        expect(newState.seasonChampionId).toEqual(seasonData.championId);
        expect(newState.seasonChampionName).toEqual(seasonData.championName);
    });
});