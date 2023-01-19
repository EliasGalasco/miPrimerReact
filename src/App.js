import React from "react";
import NavBar from "./componentes/navbar/NavBar";
import "../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./componentes/itemslistcontainer/ItemListContainer";
import Footer from "./componentes/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryid" element={<ItemListContainer/>} />
          <Route path="/item/:itemid" element={<ItemDetailContainer/>} />
          <Route path="*" element={<h1>404. Page not found</h1>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
