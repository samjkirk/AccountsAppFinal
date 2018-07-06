import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.js';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css'
import $ from 'jquery';

var Employee = React.createClass({
    getInitialState: function() {
        return {display: true };
    },
    handleDelete() {
        const self = this;
        $.ajax({
            "url": "http://localhost:8080/app/delete",
            type: 'DELETE',
            data: JSON.stringify(self.props.employee),
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "c7bb89b4-2b6c-3cdb-cd22-86fdba25c43c"
            },
            "processData": false,
            success: function(result) {
                // self.setState({display: false});
                self.setState({delete: true});
            },
            error: function(xhr, ajaxOptions, thrownError) {
                toastr.error(xhr.responseJSON.message);
            }
        });
    },
    reRender: function(firstName, lastName, accountNumber) {
        this.props.employee.firstName = firstName;
        this.props.employee.lastName = lastName;
        this.props.employee.accountNumber = accountNumber;
        this.forceUpdate();
    },
    render: function() {
        if (!this.state.delete) {
            return (
                <tr>
                    <td>{this.props.employee.firstName}</td>
                    <td>{this.props.employee.lastName}</td>
                    <td>{this.props.employee.accountNumber}</td>
                    <td>
                        <button className="btn btn-warning" onClick={this.handleDelete}>Delete</button>
                    </td>
                    <td>
                        <Modal employee={this.props.employee} onClick={this.reRender}/>
                    </td>
                </tr>);
        } else {
            return null;
        }
    }
});
export default Employee;
