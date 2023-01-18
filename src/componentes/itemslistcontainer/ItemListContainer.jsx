import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import getItems from '../asyncmocks/ProductosAssync';
import ItemList from "../ItemList/ItemList";

function ItemListConatainer() {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
    getItems().then((respuesta) => {
        setProducts(respuesta);
        });
    }, [])
    
    return (
        <>
        <ItemList products={products} />
        </>
    );
}

export default ItemListConatainer;