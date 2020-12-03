import React, { useState, useEffect } from 'react';
import ComponentCategory from '../components/ComponentCategory';
import ComponentProduct from '../components/ComponentProduct';

function Produtos() {

    const [produtos, setProdutos] = useState([]);
    // eslint-disable-next-line
    const [useProdutos, newProdutos] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const resposta = await fetch("https://bracael-burger.firebaseio.com/.json")
        const dados = await resposta.json()
        setProdutos(dados);
    }, []);
    
    useEffect(() => {
        newProdutos(produtos)
    }, [produtos])


    return (
        <React.Fragment>
            <header>
                <h2 className="display-5">Produtos</h2>
                <hr />
            </header>
            <ComponentCategory data={[produtos, newProdutos]} />
            <main>
                <section className="produtos bg-white">
                    <ComponentProduct produtos={useProdutos} />
                </section>
            </main>
        </React.Fragment>
    )
}

export default Produtos;