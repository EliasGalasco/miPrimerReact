import { createContext, useState } from "react";
import Swal from "sweetalert2";
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
            Swal.fire({
                icon: 'error',
                title: 'El Producto ya existe en el carro.',
                text: 'Intenta modificarlo o eliminalo!',
                footer: '<p>Si tienes otro tipo de error envíanoslo</p>'
            })
        }else{
        /*Version compactada*/
        setCart([...cart, item])  
        }
    }

    /*-- FUNCION ELIMINAR ITEM --*/
    const removeItem = (id) =>{
        setCart(prev=> prev.filter(product=> product.id !== id))
    }
    /*-- FUNCION VACIAR CARRITO --*/
    function clearCart(){
        setCart([])
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