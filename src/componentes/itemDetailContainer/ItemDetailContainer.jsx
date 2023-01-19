import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "../estructureCard/EstructureCard.css"
import { getSingleItem } from '../asyncmocks/ProductosAssync';
import { FaCircle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import "../itemDetailContainer/itemDetailContainer.css"




function ItemDetailContainer() {
  
  const [productos, setProduct] = useState({});

  let { itemid } = useParams();

  useEffect(() => {
    getSingleItem(itemid).then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert(`Error: ${error}`));
  }, []);

  return (
    <Card className='ItemDetail d-flex justify-content-center cards'>
          <Card.Img variant="top" className='h-5 imgDetail d-flex justify-content-center' src={productos.imagen} />
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
            <Button className="d-flex align-items-center" id={productos.id} >Agregar al Carro</Button>
          </Card.Body>
        </Card>
  );
}

export default ItemDetailContainer;
