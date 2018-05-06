import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './container/Home'
import About from './container/About'
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Toolbar style={{height: '7em', backgroundColor: '#222'}}>
              <ToolbarGroup firstChild={true}>
                <ToolbarSeparator style={{margin: '1em'}}  />
                <h1 className="App-title">Word Smith</h1>
              </ToolbarGroup>
              <ToolbarGroup firstChild={true}>
                <Link className='HeaderLink' to="/">Home</Link>
                <ToolbarSeparator style={{margin: '1em'}} />
                <Link className='HeaderLink' to="/about">About</Link>
              </ToolbarGroup>
            </Toolbar>
          </header> 
          <div className="MainContentContainer">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
