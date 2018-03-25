// @flow

import React from 'react';
import { connect } from 'react-redux';

import { fetchSeasonData } from '../../actions';

type PropsTypes = {
    fetchSeasonData: number => void,
}

export function YearsList(props: PropsTypes) {

    const renderYears = () => {
        // defining an array of 11 elements using Array.from
        // to be able to iterate using map and return the <li>'s 
        const arr = Array.from({ length: 11 }, (value, key) => key);

        // years will be a list of <li> rendering the years
        const years =  arr.map((key, index) => {
            const currentYear = 2005 + index;
            return (
                <li
                    key={ currentYear }
                    className="pure-menu-item"
                >
                    <a
                        href={ `#${currentYear}` }
                        className="pure-menu-link"
                        onClick={ () => props.fetchSeasonData(currentYear) }
                    >
                        { currentYear }
                    </a>
                </li>
            )
        });

        return years;
    }

    return (
        // those divs are required to apply the styling from Purecss
        <div id="nav" className="pure-u">
            <div className="nav-inner">
                <div className="pure-menu">
                    <ul className="pure-menu-list">
                        {/* calling renderYears method to render the list of years */}
                        { renderYears() }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchSeasonData: year => dispatch(fetchSeasonData(year))
});

export default connect(null, mapDispatchToProps)(YearsList);
