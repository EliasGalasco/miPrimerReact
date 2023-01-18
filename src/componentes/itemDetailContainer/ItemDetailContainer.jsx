import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "../estructureCard/EstructureCard.css"
import { getSingleItem } from '../asyncmocks/ProductosAssync';
import { FaCircle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";




function ItemDetailContainer() {
  
  const [productos, setProduct] = useState([]);

  let { itemid } = useParams();

  useEffect(() => {
    getSingleItem(itemid).then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert(`Error: ${error}`));
  }, []);

  return (
    <Card className='col-12 cards col-md-6 col-lg-6 col-xl-4 m-1' style={{ width: '18rem' }}>
          <Card.Img variant="top" className='h-5 img-fluid' src={productos.imagen} />
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
            <Button id={productos.id} >Agregar al Carro</Button>
          </Card.Body>
        </Card>
  );
}

export default ItemDetailContainer;
