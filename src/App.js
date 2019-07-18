import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {ListarProdutos, ListarPedidos, CadastroProduto} from './components';
import {Header} from './components';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <div>
        <Switch>
          <Route path="/" exact component={ListarProdutos} />
          <Route path="/produto/:produto_id" exact component={CadastroProduto}/>
          <Route path="/pedidos" exact component={ListarPedidos} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
