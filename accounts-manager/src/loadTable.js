import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeTable from './EmployeeTable.js';
import $ from 'jquery';

var LoadTable = React.createClass({
    loadEmployeesFromServer: function () {
        const self = this;
        console.log("sending get request");
        $.ajax({
            url: "http://localhost:8080/app/findall"
        }).then(function (data) {
            self.setState({employees: data});
            console.log(this.state.employee);
        });
    },

    getInitialState: function () {
        return {employees: []};
    },

    componentDidMount: function () {
        console.log("component mounting");
        this.loadEmployeesFromServer();
    },
    componentWillMount: function () {
         console.log("component will mount");
        this.loadEmployeesFromServer();
    },

    statics: {
        update: function() {
            const self = this;
            self.loadEmployeesFromServer();
            this.render();
        }
    },

    render() {
        // if (!this.props.employees
        console.log(this.state.employees);
        return ( <EmployeeTable employees={this.state.employees}/> );
    }
});
export default LoadTable;