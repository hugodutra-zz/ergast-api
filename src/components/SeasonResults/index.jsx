// @flow
import React from 'react';
import { connect } from 'react-redux';

type PropsTypes = {
    season: Object,
}

export function SeasonResults(props: PropsTypes) {
    const {
        seasonYear,
        results,
        seasonChampionName,
        seasonChampionId,
    } = props.season;

    const renderSeasonResults = () => {
        return results.map((item) => {
            return (
                <li
                    key={ item.circuitName }
                    className="email-item pure-g"
                >   
                    <div className="pure-u-3-4">
                        <h3 className="email-subject">{ item.circuitName }</h3>
                        <p className="email-desc">Winner: { item.winnerName } { item.winnerId === seasonChampionId ? <span>⭐</span> : null }</p>
                    </div>
                </li>
            )
        })
    }

    if (!results.length) {
        return null;
    }

    return (
        <div id='season-results'>
            <ul id="list" className="pure-u-1">
                { renderSeasonResults() }
            </ul>
            <div id="main" className="pure-u-1">
                <div className="email-content">
                    <div className="pure-u-2-2">
                        <h1 className="email-content-title">{ seasonYear }</h1>
                        <h2>Season winner: { seasonChampionName } </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    season: state.season,
});

export default connect(mapStateToProps)(SeasonResults);