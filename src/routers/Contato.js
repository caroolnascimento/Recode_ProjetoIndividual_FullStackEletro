import React from 'react';

import email from '../imagens/email.png';
import whatsapp from '../imagens/whatsapp.png';

function Contato() {
    return (
        <React.Fragment>
            <header>
                <h2 className="display-5">Contatos</h2>
                <hr />
                
            </header>
            <div className="container" class="shadow-lg p-3 mb-5 bg-white rounded"  className="p-3 mb-2 bg-transparent text-dark">
                <div className="email row">
                    <div className="zap col text-center">
                        <img className="logo" src={email} alt="Email" />
                        <p>contato@fullstackeletro.com</p>
                    </div>

            <div className="whatsapp col text-center">
                        <img className="logo" src={whatsapp} alt="Whatsapp" />
                        <p>(11) 99999-9999</p>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <form method="post" action="">
                    <div className="form-group mx-10 texte-center">
                        <h4>Nome:</h4>
                        <input name="nome" className="nome" type="text" />
                        <h4>Mensagem: </h4>
                        <textarea name="msg" className="textoarea"></textarea> <br />
                        <input className="enviar bg-success mt-3 btn-lg" type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Contato;