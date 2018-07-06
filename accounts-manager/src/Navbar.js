import React from 'react';
import ReactDOM from 'react-dom';
import Add from './add.js';
import Dashboard from './dashboard.js';
import LoadTable from './loadTable.js';

var Navbar = React.createClass({
    AddAccounts() {
        ReactDOM.render(
            <Add />, document.getElementById("body")
        );
    },

    Dashboard() {
        ReactDOM.render(
            <Dashboard />, document.getElementById("body")
        );
    },

    ViewAccounts() {
        ReactDOM.render(
            <LoadTable />, document.getElementById("body")
        );
    },

    render: function(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#" onClick={this.Dashboard}>AccountsApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#" onClick={this.Dashboard}>Dashboard <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#" onClick={this.ViewAccounts}>Accounts</a>
                        <a className="nav-item nav-link" href="#" onClick={this.AddAccounts}>Add Account</a>
                    </div>
                </div>
            </nav>
        );
    }
});

export default Navbar;