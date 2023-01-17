import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "../estructureCard/EstructureCard.css"
import { getSingleItem } from '../productos/ProductosAssync';
import { FaCircle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';



function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  let {itemid} = useParams();

  useEffect(() => {
    getSingleItem(itemid).then((respuesta) => {
      setProduct(respuesta);
    });
  }, []);

  return (
    <Card className='col-12 cards col-md-6 col-lg-6 col-xl-4 m-1 ' style={{ width: '18rem' }}>
          <Card.Img variant="top" className='h-5 img-fluid' src={product.imagen} />
          <Card.Body>
            <Card.Title>{product.titulo}</Card.Title>
            <Card.Text className='detalle'>
              {product.detalle}
            </Card.Text>
            <div className='precios'>
            <p className='precio'>{product.precio}</p>
            <div>
              <p className='stock'><FaCircle className='green'/> {product.stock}</p>
            </div>
            </div>
            <Button id={product.id} >Agregar al Carro</Button>
          </Card.Body>
        </Card>
  );
}

export default ItemDetailContainer;
