import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import './App.css';
import AddUser from "./components/AddUser";
import About from "./components/About";
import UserList from "./components/UserList";

class App extends Component {



    render() {
    return (
      <div className="App">
          <Router>
              <header className="App-header">
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/add">Add User</Link>
                        <Link to="/about">About Dev</Link>
                    </ul>
              </header>
              <Route exact path="/" component={UserList}/>
              <Route path="/add" component={AddUser}/>
              <Route path="/about" component={About}/>
          </Router>
      </div>
    );
  }
}

export default App;
