import React from 'react';
import { connect } from 'react-redux';

import { fetchSeasonData } from '../../actions';

export function YearsList(props) {
    const handleClick = (year) => {
        props.fetchSeasonData(year);
    }

    const renderYears = () => {
        const arr = Array.from({ length: 11 }, (value, key) => key);

        const years =  arr.map((key, index) => {
            const currentYear = 2005 + index;
            return (
                <li key={ currentYear }>
                    <button
                        onClick={ () => handleClick(currentYear) }
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
