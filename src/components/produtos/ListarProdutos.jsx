import React, { Component } from 'react';
import {Data} from '../../store/data';
import { Link } from 'react-router-dom';


class ListarProdutos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: []
        }
    }

    componentDidMount(){

        this.setState({
            produtos: Data.produtos
        })
        
    }

    render(){
        console.log(this.state.produtos)
        return (
            <div className="container">
                <div className="row">
                    {this.state.produtos.map((produto,i)=>{
                        return(
                        
                            <div className="col-md-4">
                                <div class="card">
                                    <img class="card-img-top" src={produto.caminho_img} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{produto.nome}</h5>
                                        <p class="card-text">{produto.descricao}</p>
                                        <a href="#" class="btn btn-primary">Ir para o produto</a>
                                    </div>
                                </div>
                            </div>
                        
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default ListarProdutos;
