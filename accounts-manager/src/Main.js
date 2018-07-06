import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.js';
import Dashboard from './dashboard.js';

var Body = React.createClass({
    render: function(){
        return (
            <div>
                <Navbar />
                <div id='body'>
                    <Dashboard />
                </div>
            </div>
        );
    }
});
export default Body;