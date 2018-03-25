import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import '../../enzymeSetup';
import { SeasonResults } from './index';

it('Should return null if results are empty', () => {
    const season = {
        seasonYear: '',
        results: [],
        seasonChampionName: '',
        seasonChampionId: '',
    }
    const wrapper = shallow(<SeasonResults season={{ ...season }} />);

    expect(wrapper.find('div').length).toEqual(0);
});

it('Should render if results are populated', () => {
    const season = {
        seasonYear: 2015,
        seasonChampionName: "Sebastian Vettel",
        seasonChampionId: "vettel",
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

    const wrapper = shallow(<SeasonResults season={{ ...season }} />);

    expect(wrapper.find('div#season-results').length).toEqual(1);
    expect(wrapper.find('h1')).toIncludeText('2015');
    expect(wrapper.find('h2')).toIncludeText('Sebastian Vettel');
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(4);
    expect(wrapper.find('span').length).toEqual(1);
});
