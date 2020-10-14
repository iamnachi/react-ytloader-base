import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route} from 'react-router-dom';

import Introduction from '../Pages/Introduction';
import GetStarted from '../Pages/GetStarted';
import Settings from '../Pages/Settings';
import Api from '../Pages/Api';

class Main extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid p-0 m-2">
                <Route exact path="/react-ytloader" component={Introduction} />
                <Route path="/react-ytloader/introduction" component={Introduction} />
                <Route path="/react-ytloader/getstarted" component={GetStarted} />
                <Route path="/react-ytloader/settings" component={Settings} />
                <Route path="/react-ytloader/api" component={Api} />
            </div>
        );
    }
}        
export default Main;
