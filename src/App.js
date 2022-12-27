import React from "react";
import NavBar from "./componentes/navbar/NavBar";
import "../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./componentes/itemslistcontainer/ItemListContainer";
function App() {
  return (
    <>
    <NavBar/>
    <div className="container d-flex ">
    <ItemListContainer
    title="Prod1"
    precio={4000}
    detalle="lorem ipsum dolor"
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gSGTNKI484vM_eTCzcHidrG58WimiR2VpQ&usqp=CAU"
    />
    <ItemListContainer
    title="Prod2"
    precio={6000}
    detalle="lorem ipsum dolor4444"
    img="https://m.media-amazon.com/images/I/41LPfrWGhjL.jpg"
    />
    <ItemListContainer
    title="Prod3"
    precio={8000}
    detalle="lorem ipsum dolor22222"
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSq_aFM7OGVkWO-1JCAaqx6NWcv9ZB7kmvLQ&usqp=CAU"
    />
    </div>
  </>
  );
}

export default App;
