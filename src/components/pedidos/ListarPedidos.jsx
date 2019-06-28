import React, { Component } from 'react';
import {Data} from '../../store/data';
import { Link } from 'react-router-dom';


class ListarPedidos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pedidos: [],
            produtos: []
        }
    }

    componentDidMount(){

        this.setState({
            produtos: Data.produtos,
            pedidos: Data.pedidos
        })
        
    }

    removeItensPedido(pedido, produto){

        this.state.pedidos.map((pedido))
        let pedido = this.state.pedidos.filter(p => p.id == pedido.id)[0]

        let item = pedido.itens_pedidos.findIndex(i => i.id_produto == produto.id)

        pedido.itens_pedidos.splice(item,1)

        return false
    }

    cancelarPedido(pedido){
        return false
    }

    toggle(){
        return false
    }

    adicionarItem(){
        return false
    }

    getItensPedido(pedido){
        let produtos_pedido = []
        for(var i=0; i < pedido.itens_pedidos.length; i++)
        {
            let produto = this.state.produtos.filter(p => p.id == pedido.itens_pedidos[i].id_produto)[0]
            produtos_pedido.push({produto: produto, qtd: pedido.itens_pedidos[i].quantidade})
        }
        return produtos_pedido;

    }

    render(){
        console.log(this.state.pedidos)
        return (
            <div className="container">
                <div className="row">
                    {this.state.pedidos.map((pedido,i)=>{
                        let produtos = this.getItensPedido(pedido)
                        return(
                            <div className="col-md-5 m-1">
                                <div className="card">
                                    <div className="card-body">
                                        <table className='table table-hover'>
                                            <thead>
                                                <tr>
                                                    <td>#</td>
                                                    <th>Produto</th>
                                                    <th>Qtd</th>
                                                    <th>Preço</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {produtos.map((produto, i)=>{
                                                    pedido.preco_total = pedido.preco_total + (produto.produto.preco_venda * produto.qtd)
                                                    return(
                                                    <tr>
                                                        <td>
                                                            <button type="button" class="close" aria-label="Close" onClick={() => this.removeItensPedido(pedido, produto)}>
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            {produto.produto.nome}
                                                        </td>
                                                        <td>
                                                            {produto.qtd}
                                                        </td>
                                                        <td>
                                                            {parseFloat(produto.produto.preco_venda * produto.qtd).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                                        </td>
                                                    </tr>)
                                                })}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan='3'>TOTAL</td>
                                                    <td>{parseFloat(pedido.preco_total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan='2'><button className='btn btn-danger'>Cancelar Pedido</button></td>
                                                    <td colSpan='2'><button className='btn btn-success'>Adicionar Item</button></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        
                        )
                    })}
                </div>
                <div className="footer">
                    <button className='btn btn-primary'>Adicionar Pedido</button>
                </div>
            </div>
        );
    }
}

export default ListarPedidos;
