import React from 'react';
import ReactDOM from 'react-dom';
import EditTable from './EditTable.js';
import EmployeeTable from './EmployeeTable.js';
import $ from 'jquery';

var Modal = React.createClass({
    getInitialState: function() {
        return {
            firstName: this.props.employee.firstName,
            lastName: this.props.employee.lastName,
            accountNumber: this.props.employee.accountNumber
        }
    },

    renderOnClose: function(){
        var self = this;
        $.ajax ({
            url: "http://localhost:8080/app/findall"
        }).then (function(data) {
            self.setState({employees: data});
            ReactDOM.render(
                <EmployeeTable employees={self.state.employees} />, document.getElementById('body')
            );
        });
    },

    componentWillMount: function(){
        const id = "modal-" + this.props.employee.id;
        this.setState({id: id, dataTarget : '#' + id});
    },

    render: function() {
        return (
            <div className="text-dark">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={this.state.dataTarget}>
                    Edit
                </button>
                <div className="modal fade" id={this.state.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body container">
                                <EditTable employee={this.props.employee} onClick={this.props.onClick} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.renderOnClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default Modal;