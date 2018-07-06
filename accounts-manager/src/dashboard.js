import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var Dashboard = React.createClass({
    render: function () {
        return (
            <div className="container bg-dark text-light">
                <div className="jumbotron bg-dark">
                    <h1>Welcome</h1>
                    <p>Use the tabs above to manage your accounts...</p>
                </div>
            </div>
        );
    }
});

export default Dashboard;