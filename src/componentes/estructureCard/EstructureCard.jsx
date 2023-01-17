import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../estructureCard/EstructureCard.css"
import { FaCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


function EstructureCard({id, titulo, detalle, imagen, precio, stock}) {
  const urlDetail = `/item/${id}`;
    return (
        <Card className='col-12 cards col-md-6 col-lg-6 col-xl-4 m-1 ' style={{ width: '18rem' }}>
          <Link to={urlDetail}><Card.Img variant="top" className='h-5 img-fluid' src={imagen} /> </Link>
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text className='detalle'>
              {detalle}
            </Card.Text>
            <Link to={urlDetail}><Button className='btnDetalle' id={id} >Ver Detalle</Button></Link>
            <div className='precios'>
            <p className='precio'>{precio}</p>
            <div>
              <p className='stock'><FaCircle className='green'/> {stock}</p>
            </div>
            </div>
            <Button id={id} >Agregar al Carro</Button>
          </Card.Body>
        </Card>
      );
    }

export default EstructureCard