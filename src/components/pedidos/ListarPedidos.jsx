import React, { Component } from 'react';
import {Data} from '../../store/data';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faPlus, faRecycle, faTrash, faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'
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

        /*this.state.pedidos.map((pedido))
        let ped = this.state.pedidos.filter(p => p.id == pedido.id)[0]

        let item = ped.itens_pedidos.findIndex(i => i.id_produto == produto.id)

        ped.itens_pedidos.splice(item,1)*/

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
                                                                <FontAwesomeIcon icon={faTimes}/>
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
                                                    <td><button className='btn btn-danger' alt='Cancelar pedido'><FontAwesomeIcon icon={faTrash}/></button></td>
                                                    <td><button className='btn btn-primary'><FontAwesomeIcon icon={faEdit}/></button></td>
                                                    <td><button className='btn btn-success'><FontAwesomeIcon icon={faPlus}/></button></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        
                        )
                    })}
                </div>
                <footer class="footer">
                    <div class="container">
                        <Link to={{pathname: '/pedido/:pedido_id'}} className="btn btn-primary">Adicionar Pedido</Link>
                    </div>
                </footer>
                    
            </div>
        );
    }
}

export default ListarPedidos;
