import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {ListarProdutos} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ListarProdutos} />
      </Switch>
    </div>
  );
}

export default App;
