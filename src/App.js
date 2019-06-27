import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {ListarProdutos} from './components';
import './App.css';

function App() {
  return (
  <div className="App container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">BTH</a>
    </nav>
    <Switch>
      <Route path="/" exact component={ListarProdutos} />
    </Switch>
    </div>
  );
}

export default App;
