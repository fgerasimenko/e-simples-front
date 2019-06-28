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
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to='/pedidos' className='nav-link'>Pedidos</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/' className='nav-link'>Produtos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
