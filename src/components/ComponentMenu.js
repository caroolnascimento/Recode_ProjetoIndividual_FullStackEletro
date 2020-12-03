import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../imagens/logo.png';
import produtos from '../imagens/produtos.png';
import nossaslojas from '../imagens/nossaslojas.png';
import faleconosco from '../imagens/faleconosco.png';

function ComponentsMenu() {
    return (
        <nav className="menunav navbar-expand-md navbar-dark mt-1">
            <div>
                <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse"  data-target="#navbarResponsive" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link to="/"><img width="200px" src={logo} alt="Página Inicial" /></Link>
                    <Link to="/produtos"><img width="200px" src={produtos} alt="Produtos" /></Link>
                    <Link to="/nossaslojas"><img width="200px" src={nossaslojas} alt="Nossas Lojas" /></Link>
                    <Link to="/contatos"><img width="200px" src={faleconosco} alt="Fale Conosco" /></Link>
		        </div>
	        </div>
		</nav>
    )
}

export default ComponentsMenu;