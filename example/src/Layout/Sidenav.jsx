import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidenav extends Component {

    constructor() {
        super();

        this.state = {
            menus: ['introduction', 'getstarted','settings', 'api']
        };
    }

    render() {
        //var seaText = this.state.sendChild;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <Link className="navbar-brand js-scroll-trigger" to="/react-ytloader">
                    <span className="d-block d-lg-none">React Youtube Loader</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" 
                        src="https://raw.githubusercontent.com/iamnachi/react-ytloader/gh-pages/img/photo.jpg" alt=""/>
                    </span>
                </Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {this.state.menus.map((value, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link js-scroll-trigger" to={`/react-ytloader/${value}`}>{value}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
            );
            
    }
}
        
        export default Sidenav;
