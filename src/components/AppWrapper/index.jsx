import React, { Component } from 'react';
import YearsList from '../YearsList';
import SeasonResults from '../SeasonResults';

class MainApp extends Component {
    render() {
        return (
            <div id="layout" className="content pure-g">
                <YearsList />
                <SeasonResults />
            </div>
        )
    }
}

export default MainApp;
