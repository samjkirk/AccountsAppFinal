import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './Employee.js';
import $ from 'jquery';

var EmployeeTable = React.createClass({
    render: function() {
        const rows = [];
        this.props.employees.forEach(function(employee) {
            rows.push(<Employee employee={employee} />);
        });
        return (
            <div className="container">
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Acc Number</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>);
    }
});
export default EmployeeTable;