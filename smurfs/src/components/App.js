import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';

import CollectSmurfs from './collectSmurfs.js';
import AddSmurfs from './addSmurf.js';

function App() {

    return (
      <div className="App">
        <h1>SMURFS! 2.0</h1>
        <div>If you would like to see your current Smurfs click get smurfs</div>
        <CollectSmurfs />
        <AddSmurfs />
      </div>
    );

}

export default connect((state) =>{
  return {state}})(App);
