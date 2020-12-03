import React from 'react';

function ComponentProduct(produtos) {

    return produtos.produtos && produtos.produtos.map((item, i) => {

        return (
            <div className="box_produtos bg-white" id={item.categoria} key={i}>
                <img className="imgs img-fluid" src={`http://localhost/recode/imagens/${item.imagem}`} alt="Refrigerador Electrolux" width="120px" />
                <br />
                <div className="descricao">{item.descricao}</div>
                <hr />
                <strike className="text-danger">{item.precoantigo}</strike>
                <div className="preco">{item.precofinal}</div>
            </div>
        )
    })
}

export default ComponentProduct;