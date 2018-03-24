import React from 'react';
import { connect } from 'react-redux';

import { fetchSeasonData } from '../../actions';

function YearsList(props) {
    const renderYears = () => {
        const arr = Array.from({ length: 11 }, (value, key) => key);

        const years =  arr.map((key, index) => {
            const currentYear = 2005 + index;
            return (
                <li key={ currentYear }>
                    <button
                        onClick={ () => props.fetchSeasonData(currentYear) }
                    >
                        { currentYear }
                    </button>
                </li>
            )
        });

        return years;
    }

    return (
        <ul>
            { renderYears() }
        </ul>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchSeasonData: year => dispatch(fetchSeasonData(year))
});

export default connect(null, mapDispatchToProps)(YearsList);
