import React from 'react';

import formasdepagamento from '../imagens/formasdepagamento.png';

function ComponentFooter() {
    return (
        <div className="container">
            <footer id="rodape">
                <h4 className="text-danger">Formas de Pagamento</h4>
                <img width="400px" src={formasdepagamento} alt="Formas de pagamento" />
                <p>&copy; Recode Pro</p>
            </footer>
        </div>
    )
}

export default ComponentFooter;