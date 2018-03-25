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

    // renders season results maping array passed by props
    const renderSeasonResults = () => {
        return results.map((item) => {
            return (
                <li
                    key={ item.circuitName }
                    className="email-item pure-g"
                >   
                    <div className="pure-u-3-4">
                        <h3 className="email-subject">{ item.circuitName }</h3>
                        <p className="email-desc">
                            Winner: { item.winnerName }
                            {/* adds a star emoji in case the winner of the race is also season champion */}
                            { item.winnerId === seasonChampionId ? <span role="img" aria-label="champion start">⭐</span> : null }
                        </p>
                    </div>
                </li>
            )
        })
    }

    // in case results array is empty we dont render this component
    if (!results.length) {
        return null;
    }

    return (
        <div id='season-results'>
            <ul id="list" className="pure-u-1">
                {/* calls method that renders season races results */}
                { renderSeasonResults() }
            </ul>

            {/* extra divs required for styling purpose using purecss */}
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