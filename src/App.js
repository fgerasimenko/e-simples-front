import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {ListarProdutos, ListarPedidos} from './components';
import {Header} from './components';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div>
        <Switch>
          <Route path="/" exact component={ListarProdutos} />
          <Route path="/pedidos" exact component={ListarPedidos} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
