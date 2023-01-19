import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import getItems, {getCategoryId} from '../asyncmocks/ProductosAssync';
import ItemList from "../ItemList/ItemList";

function ItemListConatainer() {

    const [products, setProducts] = useState([]);
    let { categoryid } = useParams();

    useEffect(() => {
    if(categoryid){
        getCategoryId(categoryid).then((respuesta) => {
        setProducts(respuesta);
        });
    }else{
        getItems().then((respuesta) => {
        setProducts(respuesta);
    });
    }
    }, [categoryid]);
    
    return (
        <>
        <ItemList products={products} />
        </>
    );
}

export default ItemListConatainer;