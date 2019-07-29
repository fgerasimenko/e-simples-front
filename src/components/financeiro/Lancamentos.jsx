import React, { Component,Fragment } from 'react';
import CurrencyFormat from 'react-currency-format';
import {Data} from '../../store/data';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';


class Lancamentos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: [],
            pedidos: []
        }
    }

    searchInput = (e) => {
        let mudanca = {}
        mudanca[e.target.name] = e.target.value;
        mudanca.showMenu = true
        this.setState(mudanca);



        let produtos = []
        let filtrados = [];
        console.log(e.target)
        if(e.target.value !== ''){
            produtos = this.state.produtos

            filtrados = produtos.filter((produto) =>{
                const lc = produto.nome.toLowerCase()
                const filter = e.target.value.toLowerCase()
                
                return lc.includes(filter)
            });
        }else{
            produtos = this.state.produtos
        }

        this.setState({
            filtrados: filtrados
        })
    }

    handleChange = (e) => {
        let mudanca = {}
        mudanca[e.target.name] = e.target.value;

        this.setState(mudanca);
    }

    gerarCSV = () => {

        let dados = this.state.itens_pedido
        let csvContent = `\uFEFF`

        let cabecalho = ['#','Status','Nome do Produto','Preço Unitário','Quantidade','Preço Total'].join(';')
        csvContent += cabecalho
        csvContent += '\n'
        let linhas = []        
        dados.map((produto, i) => {
            let preco_total = (produto.preco_produto * produto.qtd_produto)
            preco_total -= produto.desconto
            csvContent += [ `${i+1}`,
                            produto.status,
                            produto.nome_produto,
                            parseFloat(produto.preco_produto).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                            produto.qtd_produto,
                            parseFloat(preco_total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })].join(';')
            
            csvContent += '\n'
        })

        var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        var link = document.createElement("a");
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", 'pedido.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();

        link.remove()

    }

    componentDidMount(){
        let produtos = Data.produtos
        let pedidos = Data.pedidos
        console.log(pedidos.itens_pedido)
        
        this.setState({
            produtos: produtos,
            pedidos: pedidos
        })
    }

    render(){
        return (
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Número Pedido</th>
                                <th>Data Pedido</th>
                                <th>Qtd. Itens</th>
                                <th>Status</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pedidos.map((pedido,i)=>{
                                return (
                                    <tr key={i}>
                                        <td>{pedido.id}</td>
                                        <td>{pedido.data_pedido}</td>
                                        <td>0</td>
                                        <td>{pedido.status}</td>
                                        <td>{pedido.preco_total}</td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default Lancamentos;
