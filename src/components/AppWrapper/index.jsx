// @flow

import React, { Component } from 'react';
import YearsList from '../YearsList';
import SeasonResults from '../SeasonResults';

type PropsTypes = {};

class MainApp extends Component<PropsTypes> {
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
