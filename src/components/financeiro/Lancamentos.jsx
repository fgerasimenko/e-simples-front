import React, { Component,Fragment } from 'react';
import CurrencyFormat from 'react-currency-format';
import {Data} from '../../store/data';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';

const Total = (pedidos) =>{
    //let pedidos = this.state.pedidos
    console.log(pedidos)
    let total = 0

    pedidos.map(pedido=>{
        total += pedido.preco_total
    })
    return (<td>{total}</td>) //NÃO FUNCIONA AINDA
}
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

        let dados = this.state.pedidos
        let csvContent = `\uFEFF`
        console.log(dados)
        let cabecalho = ['#','Número Pedido','Data do Pedido','Qtd Itens','Status','Total'].join(';')
        csvContent += cabecalho
        csvContent += '\n'
        let linhas = []        
        dados.map((pedido, i) => {
            csvContent += [ `${i+1}`,
                            pedido.id,
                            pedido.data_pedido,
                            0,
                            pedido.status,
                            pedido.preco_total]
            
            csvContent += '\n'
        })

        var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        var link = document.createElement("a");
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", 'pedidos.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();

        link.remove()

    }

    componentDidMount(){
        let produtos = Data.produtos
        let pedidos = Data.pedidos
        
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
                                        <td>{pedido.data_pedido.toLocaleString()}</td>
                                        <td>{pedido.itens_pedidos.length}</td>
                                        <td>{pedido.status}</td>
                                        <td>{parseFloat(pedido.preco_total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    </tr>)
                            })}
                            <tr>
                                <td colSpan="4" className="text-right">TOTAL</td>
                                <Total pedidos={this.state.pedidos}/>
                            </tr>
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default Lancamentos;
