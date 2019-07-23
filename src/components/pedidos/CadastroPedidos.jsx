import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import {Data} from '../../store/data';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';


class CadastroPedidos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: [],
            itens_pedido: [],
            marcas: [],
            tipos: [],
            id_produto: null,
            nome_produto: "",
            qtd_produto: 0,
            preco_produto: 0,
            mensagem: "",
            classe_mensagem: "",
            alerta: false
        }
    }

    handleChange = (e) => {
        let mudanca = {}
        mudanca[e.target.name] = e.target.value;

        this.setState(mudanca);
    }

    validarCampos = () =>{
        

        return true
    }

    adicionarItem = () =>{
        
        let itens = this.state.itens_pedido
        let id = Math.floor(Math.random() * 100) + 1//this.state.id_produto
        let nome = this.state.nome_produto
        let qtd = this.state.qtd_produto
        let preco = this.state.preco_produto ? 0 : this.state.preco_produto
        console.log(id)
        if(qtd < 0.5){
            this.setState({
                classe_mensagem: "alert alert-danger",
                mensagem: "A quantidade tem que ser maior que 0",
                alerta: !this.state.alerta
            })

            return false
        }
            

        itens.push({
            id_produto: id,
            nome_produto: nome,
            qtd_produto: qtd,
            preco_produto: preco,
            status: "Preparando"
        })

        this.setState({
            itens_pedido: itens
        })
    }

    excluirItem = (item) => {
        
        let itens = this.state.itens_pedido

        itens = itens.filter(i => i.id_produto != item.id_produto)

        this.setState({
            itens_pedido: itens
        })

    }

    componentDidMount(){

    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div hidden={!this.state.alerta} className={this.state.classe_mensagem} role="alert">
                            {this.state.mensagem}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="align-center">Cadastro de Pedidos</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="form-group">
                                    <label for="nome_produto">Nome do Produto</label>
                                    <input  type="text" 
                                            onChange={this.handleChange}
                                            value={this.state.nome_produto}
                                            name='nome_produto'
                                            className="form-control" 
                                            id="nome_produto"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label for="qtd">Quantidade</label>
                                    <input  type="number"
                                            onChange={this.handleChange}
                                            value={this.state.qtd_produto}
                                            className="form-control" 
                                            name="qtd_produto" 
                                            id="qtd" 
                                            step="0.5"/>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <button className="btn btn-success" onClick={this.adicionarItem}>Adicionar item</button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Status</th>
                                <th>Nome do Produto</th>
                                <th>Preço Unitário</th>
                                <th>Quantidade</th>
                                <th>Preço Total</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.itens_pedido.map((item,i)=>{
                                return (<tr key={i}>
                                            <td>{i+1}</td>
                                            <td>
                                                <select value={item.status} 
                                                        name="status" 
                                                        id="status"
                                                        className="form-control">
                                                    <option value="Preparando">Preparando</option>
                                                    <option value="Pronto">Pronto</option>
                                                    <option value="Entregue">Entregue</option>
                                                </select>
                                            </td>
                                            <td>{item.nome_produto}</td>
                                            <td>{item.preco_produto}</td>
                                            <td>{item.qtd_produto}</td>
                                            <td>{item.preco_produto * item.qtd_produto}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={(e)=>this.excluirItem(item)}>Excluir</button>
                                            </td>
                                        </tr>)})}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CadastroPedidos;
