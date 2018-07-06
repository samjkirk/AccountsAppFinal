import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var Add = React.createClass({
    getInitialState: function() {
        return {}
    },
    nameChange: function(e) {
        this.setState({
            firstName: e.target.value
        })
    },
    lastChange: function(e) {
        this.setState({
            lastName: e.target.value
        })
    },
    accountNumberChange: function(e) {
        this.setState({
            accountNumber: parseInt(e.target.value)
        })
    },
    submit: function (e){
        e.preventDefault();

        const data = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "accountNumber": this.state.accountNumber
        };

        e.target.reset();

        const jsonData = JSON.stringify(data);

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:8080/app/add",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "7583589c-5a8a-9fa1-a6c1-cce43c23293d"
            },
            "processData": false,
            "data": jsonData
        };

        $.ajax(settings)
            .done(function(data) {
                console.log("Hello")
            })
            .fail(function(jqXhr) {
                console.log("data : " + data );
                console.log('failed to register');
            });
    },

    render: function () {
        return (
            <div className="container bg-dark text-light">
                <form onSubmit={this.submit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="inputFName">First Name</label>
                        <input type="text" className="form-control" id="inputFName" placeholder="First name" onChange={this.nameChange} val={this.state.firstName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputLName">Last Name</label>
                        <input type="text" className="form-control" id="inputLName" placeholder="Last name" onChange={this.lastChange} val={this.state.lastName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAccountNum">Account Number</label>
                        <input type="text" className="form-control" id="inputAccountNumber" placeholder="Account Number" onChange={this.accountNumberChange} val={this.state.accountNumber} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
});
export default Add;