import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import {Data} from '../../store/data';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import './CadastroPedidos.css'


class CadastroPedidos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: [],
            filtrados: [],
            itens_pedido: [],
            marcas: [],
            tipos: [],
            id_produto: null,
            nome_produto: "",
            qtd_produto: 0,
            preco_produto: 0,
            desconto: 0,
            mensagem: "",
            classe_mensagem: "",
            alerta: false,
            showMenu: false
        }
        this.escolherProduto = this.escolherProduto.bind(this)
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

    validarCampos = () =>{
        

        return true
    }

    escolherProduto = (e, produto) => {
        console.log(produto)

        
        this.setState({
            nome_produto: produto.nome,
            id_produto: produto.id,
            preco_produto: produto.preco_venda,
            showMenu: !this.state.showMenu
        })
    }

    adicionarItem = () =>{
        let itens = this.state.itens_pedido
        let id = Math.floor(Math.random() * 100) + 1//this.state.id_produto
        let nome = this.state.nome_produto
        let qtd = this.state.qtd_produto
        let desconto = this.state.desconto
        let preco = this.state.preco_produto ? this.state.preco_produto : 0

        if(preco > 0 && desconto > 0){
            if(desconto > preco){
                this.setState({
                    classe_mensagem: "alert alert-danger",
                    mensagem: "O desconto deve ser menor que o preço",
                    alerta: !this.state.alerta
                })
            }
        }

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
            desconto: desconto,
            status: "Preparando"
        })

        console.log(itens)

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

        this.setState({
            produtos: produtos,
            filtrados: produtos
        })
    }

    render(){
        const procurar = this.state.showMenu ? 'block' : 'none';
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
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="nome_produto">Nome do Produto</label>
                                    <div class="dropdown">
                                        <input  type="text" 
                                                onChange={this.searchInput}
                                                value={this.state.nome_produto}
                                                name='nome_produto'
                                                className="form-control dropbtn" 
                                                id="nome_produto"
                                                placeholder="Procurar..." 
                                                aria-label="Search"/>
                                        <div class="dropdown-content" style={{display: procurar}}>
                                            {this.state.filtrados.map((produto,i) =>{
                                                return(
                                                <div key={i} className="dropdown-option" onClick={(e) => {this.escolherProduto(e,produto)}}>
                                                    <span class="nome-produto">{produto.nome}</span> - 
                                                    <span>
                                                        {parseFloat(produto.preco_venda).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                                    </span>
                                                </div>)
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label for="desconto">Desconto</label>
                                    <input  type="number" 
                                            onChange={this.handleChange}
                                            value={this.state.desconto}
                                            name='desconto'
                                            className="form-control" 
                                            id="desconto"/>
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
                                            <td>{(item.preco_produto - item.desconto) * item.qtd_produto}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={(e)=>this.excluirItem(item)}>Excluir</button>
                                            </td>
                                        </tr>)
                                    })
                                }
                        </tbody>
                    </table>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <button className="btn btn-success" disabled>Salvar</button>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <button className="btn btn-primary" onClick={this.gerarCSV}>Gerar CSV</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastroPedidos;
