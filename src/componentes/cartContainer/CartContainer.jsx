import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { cartContext } from "../../storage/cartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { creadorOrdenDeCompra } from "../../services/firebase";
import Swal from "sweetalert2";

function CartContainer() {
  const { cart, removeItem, totalItems, clearCart } = useContext(cartContext);

  async function finalizarCompra(e) {
    const items = cart.map((productos) => ({
      id: productos.id,
      titulo: productos.titulo,
      precio: productos.precio,
      descuento: productos.discount,
      count: productos.count
    }));
    //1 Model de orden de compra
    const order = {
      buyer: {},
      items: cart,
      date: new Date(),
      total: "",
    };
    //2Subir a la dataBase
    let idCompra = await creadorOrdenDeCompra(order);
    //3 Ultimo finalizar compra y darle un chekout al user
    Swal.fire({
      title: 'Estas seguro/a?',
      text: "Solo confirmalo si estas seguro/a!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Gracias por su compra!',
          text: `Su ID del envio es ${idCompra}`,
          imageUrl: 'https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_43c66089ead0dcaea56b199c5267a889.jpg',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
        /*Agregar funcion vaciar carro */
        clearCart()
      }
    })
    
  }


  if (cart.length === 0) {
    return (
      <>
        <h2 className="d-flex justify-content-center">
          No tienes ningun producto agregado.{" "}
        </h2>
        <hr className="container" />
        <div className="d-flex justify-content-around">
          <h3>Mi Carrito</h3>
          <Link to="/">
            <Button>Volver a la tienda</Button>
          </Link>
        </div>
        <hr className="container" />
      </>
    );
  } else {
    return (
      <>
        <h1 className="d-flex justify-content-center">Tieda Natural Shine</h1>
        <hr className="container" />
        <div className="d-flex justify-content-around">
          <h3>Mi Carrito</h3>
          <Link to="/">
            <Button>Seguir Comprando</Button>
          </Link>
        </div>
        <hr className="container" />
        {cart.map((item) => (
          <div key={item.id} className="d-flex justify-content-around">
            <div>
              <Card.Img
                variant="top"
                className="imgDetail imgCart "
                src={item.imagen}
              />
              <h3 className="d-flex">{item.titulo}</h3>
              <p className="d-inline">Cantidad: {item.count}</p>
              {cart ? (
                <p className="stock d-inline">
                  {" "}
                  <FaCircle className="green" /> {item.stock}
                </p>
              ) : (
                <p className="stock d-inline">
                  <FaCircle className="red" /> Sin Stock
                </p>
              )}
              <hr />
            </div>
            <div className="d-flex align-items-center">
              {item.precio}
              <Button
                className="btnEliminar"
                onClick={() => removeItem(item.id)}
              >
                X
              </Button>
            </div>
          </div>
        ))}
        <hr className="container" />
        <div className="d-flex justify-content-center">
        <Button className="" onClick={finalizarCompra}>
          Finalizar Compra
        </Button>
        </div>
      </>
    );
  }
}
export default CartContainer;
