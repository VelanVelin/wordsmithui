
import React, { Component } from 'react';

class About extends Component{
    render() {
        return (
            <div className="AboutContainer container">
                
                <div className="row">
                    <div className="col-md-4 col-md-offset-2">
                        <h2>About Word Smith App</h2>
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
                    <div className="col-md-4">
                        {/* logos! */}
                        <h2>Technology used</h2>
                        <div className="row col-md-offset-1" >
                            <img src={require('../logos/logo.svg')} alt="React" height="90px" display="block" />
                        
                            <img src={require('../logos/redux.png')} alt="Redux" height="70px" />
                        </div>
                        <div className="row">
                            <img src={require('../logos/core.PNG')} alt=".NET Core" height="100px"/>
                            <img src={require('../logos/efcore.png')} alt="EF Core" height="100px"  />
                        </div>
                        
                        {/* fixa get//fetch
                        fixa så man kan editera en vald från listan
                        fixa egna post och read entiter
                        loggning i backend hmm
                        frontendtest --> action
                        loading
                        git */}
                        
                    </div>
                </div>
            </div>
        
        );
      }
}

export default (About);
