import React from 'react';
import { connect } from 'react-redux';

import { fetchSeasonData } from '../../actions';

export function YearsList(props) {
    const renderYears = () => {
        const arr = Array.from({ length: 11 }, (value, key) => key);

        const years =  arr.map((key, index) => {
            const currentYear = 2005 + index;
            return (
                <li
                    key={ currentYear }
                    className="pure-menu-item"
                >
                    <a
                        href="#"
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
        <div id="nav" className="pure-u">
            <div className="nav-inner">
                <div className="pure-menu">
                    <ul className="pure-menu-list">
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
