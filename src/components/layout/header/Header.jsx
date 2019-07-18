import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    }



    render(){
        return (
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">BTH</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to='/pedidos' className='nav-link'>Pedidos</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/' className='nav-link'>Produtos</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="btn btn-link nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cadastros
                            </button>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="nav-item dropdown-item" to={{pathname: '/produto/:produto_id'}}>Cadastro de Produto</Link>
                                <Link className="nav-item dropdown-item" to={{pathname: '/produto/:produto_id'}}>Cadastro de Pedidos</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        );
    }
}

export default Header;
