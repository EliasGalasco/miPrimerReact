import React from "react";
import NavBar from "./componentes/navbar/NavBar";
import "../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./componentes/itemslistcontainer/ItemListContainer";
import Footer from "./componentes/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import NotFoundPage from "./Page/NotFoundPage";
import { userContext, UserContextProvider } from "./storage/userContext";
import {CartContextProvider} from './storage/cartContext'


function App() {
  return (
    /*4 Colocar Provider personalizado */
    <CartContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:categoryid" element={<ItemListContainer/>} />
              <Route path="/item/:itemid" element={<ItemDetailContainer/>} />
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
      </UserContextProvider>
    </CartContextProvider>
  );
}

export default App;
