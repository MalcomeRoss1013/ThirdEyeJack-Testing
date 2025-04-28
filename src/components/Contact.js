import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="Email">
            <form>

                <h3 className="text1">Contact us!</h3>


                <div className="Inputs">
                <div className="form-group">
                    <label className="text1">Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label className="text1">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label className="text1">Subject</label>
                    <input type="password" className="form-control" placeholder="Enter subject" />
                </div>
                <div className="form-group">
                    <label className="text1">Message</label>
                    <input type="password" className="form-control" placeholder="Enter message" />
                </div>
                </div>


                <div className="SubmitButton">
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                </div>


            </form>
            </div>   
                
            </div>
        )
    }
}