import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import {Data} from '../../store/data';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';


class CadastroProduto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: [],
            marcas: [],
            tipos: []
        }
    }
    validarCampos = () =>{
        return true
    }

    componentDidMount(){
        let produto = this.props
        let marcas = Data.marcas
        let tipos = Data.tipos
        
        this.setState({
            marcas: marcas,
            tipos: tipos
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="align-center">Cadastro de Novo Produto</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="nome_produto">Nome do Produto</label>
                            <input type="text" className="form-control" id="nome_produto"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="preco_produto">Preço de Venda</label>
                            <CurrencyFormat
                                prefix={'R$ '}
                                decimalSeparator={','}
                                decimalScale={2}
                                allowNegative={false}
                                className="form-control"
                                name="preco_produto"
                                id="preco_produto"
                                placeholder='Ex.: R$ 0,00'
                                maxLength={15}
                                onChange={this.handleChange}
                                value={this.state.preco} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label for="marca_produto">Marca</label>
                        <select name="marca_produto" id="marca_produto" className="form-control">
                            <option value="" disabled selected>Selecione...</option>
                            {this.state.marcas.map((marca,i)=>{
                                return (
                                    <option value={marca}>{marca}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label for="marca_produto">Tipo de Produto</label>
                        <select name="marca_produto" id="marca_produto" className="form-control">
                            <option value="" disabled selected>Selecione...</option>
                            {this.state.tipos.map((tipo,i)=>{
                                return (
                                    <option value={tipo}>{tipo}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastroProduto;
