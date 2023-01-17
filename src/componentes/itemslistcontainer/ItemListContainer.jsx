import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import getItems from '../productos/ProductosAssync';
import EstructureCard from "../estructureCard/EstructureCard";

function itemListConatainer() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getItems().then((respuesta) => {
        setProducts(respuesta);
        });
    }, [])
    
    return (
        <div className='row d-inline-flex justify-content-center'>
            {getItems.map((prod)=>(
                <EstructureCard
                key={prod.id}
                id={prod.id}
                titulo={prod.titulo}
                detalle={prod.detalle}
                imagen={prod.imagen}
                precio={prod.precio}
                stock={prod.stock}
            />
        ))}
    </div>
    );
}

export default itemListConatainer;