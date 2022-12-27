import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function itemListConatainer({title, precio, detalle, img}) {
    return (
        <div className='container Cards p-9'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{detalle}</Card.Text>
                <Card.Text>{precio}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
    );
}

export default itemListConatainer;