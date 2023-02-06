import React, { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "../estructureCard/EstructureCard.css"
import { getSingleItem } from '../asyncmocks/ProductosAssync';
import { FaCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import "../itemDetailContainer/itemDetailContainer.css"
import { cartContext } from "../../storage/cartContext";
import { HeadBodyGrid } from "../Loader/Loader";




function ItemDetailContainer() {
  
  const [productos, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)
  /*----------useParams--------- */
  let { itemid } = useParams();

  /*-------useContext----------- */
  const {cart} = useContext(cartContext);

  /*----2 Funcion agregar al Carrito----- */
  /*(1)Llamamos a addItem con useContext y le pasamos como parametro el cartContext */
  const { addItem } = useContext(cartContext)

  function agregarAlCarro(count){
    /*(2)llamamos al useContext y le pasamos el producto*/
    productos.count = count
    addItem(productos)
  }

  useEffect(() => {
    getSingleItem(itemid).then((respuesta) => {
        setProduct(respuesta);
      })
      .finally(() =>{setLoading(false)} )
  }, [itemid]);
  if(loading){
    return <HeadBodyGrid/>
  }

  return (
    <Card className='ItemDetail cardsDetail d-flex justify-content-center cards'>
          <Card.Img variant="top" className='h-5  imgDetail d-flex justify-content-center' src={productos.imagen} />
          <Card.Body>
            <Card.Title>{productos.titulo}</Card.Title>
            <Card.Text className='detalle'>
              {productos.detalle}
            </Card.Text>
            <div className='precios'>
            <p className='precio'>{productos.precio}</p>
            <div>
              <p className='stock'><FaCircle className='green'/> {productos.stock}</p>
            </div>
            </div>
            {/* <Button className="d-flex align-items-center" id={productos.id} >Agregar al Carro</Button> */}
          </Card.Body>
          <ItemCount onAddtoCart={agregarAlCarro}/>
        </Card>
  );
}

export default ItemDetailContainer;
