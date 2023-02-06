import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import getItems, {getCategoryId} from '../asyncmocks/ProductosAssync';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";


function ItemListConatainer() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let { categoryid } = useParams();
    
    async function obtenerProductos() {
        setIsLoading(true);
        if (!categoryid) {
            try {
                let respuesta = await getItems();
                setProducts(respuesta);
            } catch (error) {
                setProducts(`Se produjo un error inesperado, recargue`);
            } finally {
                setIsLoading(false);
            }
        } else {
            let respuesta = await getCategoryId(categoryid);
            setProducts(respuesta);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        obtenerProductos();
    }, [categoryid])
    
    if(isLoading)
    return (
        <Loader/>
    )
    
    return (
        <>
        {
                <ItemList products={products} />
        }
        </>
    );
}

export default ItemListConatainer;