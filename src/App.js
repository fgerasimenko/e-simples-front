import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {ListarProdutos, ListarPedidos, CadastroProduto, CadastroPedidos} from './components';
import {Header} from './components';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <div>
        <Switch>
          <Route path="/produtos" exact component={ListarProdutos} />
          <Route path="/produto/:produto_id" exact component={CadastroProduto}/>
          <Route path="/" exact component={ListarPedidos} />
          <Route path="/pedido/:pedido_id" exact component={CadastroPedidos} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
