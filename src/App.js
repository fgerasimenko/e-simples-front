import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import {ListarProdutos, ListarPedidos, CadastroProduto, CadastroPedidos, Lancamentos} from './components';
import {Header} from './components';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <div>

        <Switch>
          <Route path="/" exact component={ListarPedidos} />
          <Route path="/produtos" exact component={ListarProdutos} />
          <Route path="/produto/:produto_id" exact component={CadastroProduto}/>
          <Route path="/pedidos" exact component={ListarPedidos} />
          <Route path="/pedido/:pedido_id" exact component={CadastroPedidos} />
          <Route path="/financeiro/lancamentos" exact component={Lancamentos} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
