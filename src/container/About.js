
import React, { Component } from 'react';
// import { connect } from 'react-redux'

class About extends Component{
    render() {
        return (
            <div className="AboutContainer">
                <h2>About Word Smith App</h2>
                <div className="AboutMainSection">
                    <div className="AboutText">
                        <p>
                            This little app consits of one web api and one frontend. 
                        </p>
                        <p>
                            The front end of this app is bootstrapped with react-create-app. I have not had the need to eject from the included configuration.
                            The app follow the design guidlines of redux for react, redux is a predictable state container for JavaScript apps. With actions creaters, store, dispatchers, reducers and components etc..
                            Other packages added after the initial bootstrap includes material-ui, redux-thunk, react-router-dom, fetch, bootstrap@3(styling) among others.
                        </p>
                        <p>
                            The backend of this application is build in .NET Core. Entity Framework Core 2 is responsible for handling the connection to the database as well as acting as an ORM.
                            The serverside solution implements a very simple CQRS pattern. 
                        </p>
                    </div>
                    <div>
                        {/* logos! */}
                        fixa get//fetch
                        fixa så man kan editera en vald från listan
                        fixa egna post och read entiter
                        loggning i backend
                        frontendtest --> action
                        loading
                        git
                        
                    </div>
                </div>
            </div>
        
        );
      }
}

export default (About);
