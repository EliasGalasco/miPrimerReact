import { createContext, useState } from "react";
/*1 Crear context */

export const cartContext = createContext();

/*2 Crear Provider custom */
export function CartContextProvider(props){
    let [cart, setCart,] = useState([])


    /*--1 FUNCION AGREGAR AL CARRO--*/
    function addItem(item){
        /*------------Comprobar si el item existe----- */
        const itemInCart = cart.find(itemCart => itemCart.id === item.id)
        if(itemInCart){
            let nuevoCart = [...cart];
            let index = cart.findIndex(itemCart => itemCart.id === item.id )
        }else{
        /*Version compactada*/
        setCart([...cart, item])  
        }
    }
    /*-- FUNCION ELIMINAR ITEM --*/
    function removeItem(itemId){
    cart.remove(item=> item.id == itemId)
    }
    /*-- FUNCION VACIAR CARRITO --*/
    function clearCart(){
        
    }
    /*-- FUNCION TOTAL CARRITO --*/
    function totalItems(){
    let total = cart.reduce((contador, producto) => contador + producto.count, 0);
    return total;
    }

    return (
    /*3 Aplicamos el custom provider */
    <cartContext.Provider value={{cart, addItem, totalItems, clearCart, removeItem}}>
        {props.children}
    </cartContext.Provider>
    )
}