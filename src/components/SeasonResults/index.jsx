// @flow
import React from 'react';
import { connect } from 'react-redux';

export function SeasonResults(props) {
    const {
        seasonYear,
        results,
        seasonChampionName,
        seasonChampionId,
    } = props.season;

    const renderSeasonResults = () => {
        return results.map((item) => {
            return (
                <li key={ item.circuitName }>
                    <h3>{ item.circuitName }</h3>
                    <p>Winner: { item.winnerName } { item.winnerId === seasonChampionId ? <span>⭐</span> : null }</p>
                </li>
            )
        })
    }

    if (!results.length) {
        return null;
    }

    return (
        <div>
            <h1>{ seasonYear }</h1>
            <h2>Season winner: { seasonChampionName } </h2>
            <ul>
                { renderSeasonResults() }
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({
    season: state.season,
});

export default connect(mapStateToProps)(SeasonResults);