import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListarProdutos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faturas: [],
            prestadores: [],
            filtroStatus: '',
            filtroFornecedor: '',
            filtroData: '',
            aviso: '',
            mostrar_aviso: false,
            classe_aviso: ''
        }
    }
    render(){
        return (<h1>Olá</h1>);
    }
}

export default ListarProdutos;
