import React from 'react';

function ComponentCategory(item) {

    // eslint-disable-next-line no-unused-vars
    const [produtos, newProdutos] = item.data;

    return (
        <div className="categorias">
    <div class="row">
    <div class="col-4"> 
    <h3 class="text-monospace">Categorias</h3></div></div>

     <ul>
    <div class="row">
    <div class="col-2">
    <div class="list-group" id="list-tab" role="tablist">
                <li class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#lista-home" role="tab" aria-controls="home" onClick={() => newProdutos(produtos)}>Todos ({produtos.length})</li>
    </div>
    </div>
    </div>

    <div class="row">
    <div class="col-2">
    <div class="list-group" id="list-tab" role="tablist">
                <li class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#lista-home" role="tab" aria-controls="home" onClick={() => newProdutos(produtos.filter(data => data.categoria === "geladeira"))}>Geladeiras ({produtos.filter(data => data.categoria === "geladeira").length})</li> 
    </div>
    </div>
    </div>

    <div class="row">
    <div class="col-2">
    <div class="list-group" id="list-tab" role="tablist">    
                <li class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#lista-home" role="tab" aria-controls="home" onClick={() => newProdutos(produtos.filter(data => data.categoria === "fogao"))}>Fogões ({produtos.filter(data => data.categoria === "fogao").length})</li>
    </div>
    </div>
    </div>

    <div class="row">
    <div class="col-2">
    <div class="list-group" id="list-tab" role="tablist">    
                <li class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#lista-home" role="tab" aria-controls="home"onClick={() => newProdutos(produtos.filter(data => data.categoria === "microondas"))}>Microondas ({produtos.filter(data => data.categoria === "microondas").length})</li>
    </div>
    </div>
    </div>

    <div class="row">
    <div class="col-2">
    <div class="list-group" id="list-tab" role="tablist">
                <li class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#lista-home" role="tab" aria-controls="home" onClick={() => newProdutos(produtos.filter(data => data.categoria === "Lavadora de Roupas"))}>Lavadora de roupas({produtos.filter(data => data.categoria === "Lavadora de Roupas").length})</li>
    </div>
    </div>
    </div>

    <div class="row">
    <div class="col-2">
    <div class="list-group" id="list-tab" role="tablist">
                <li class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#lista-home" role="tab" aria-controls="home" onClick={() => newProdutos(produtos.filter(data => data.categoria === "Lavadora de Louças"))}>Lava Louças ({produtos.filter(data => data.categoria === "Lavadora de Louças").length})</li>
    </div>
    </div>
    </div>
            </ul>
        </div>
    )
}

export default ComponentCategory;