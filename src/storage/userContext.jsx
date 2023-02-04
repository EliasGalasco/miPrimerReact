import { createContext } from "react";
/*1 Creacion context */
export const userContext = createContext({ user: "User Default"});

/*3 aplicamos el Provider Custom */
export function UserContextProvider (props){
    /*Lo pasamos por props porq en app los componentes estan como children */
    return(
    <userContext.Provider value={{user: "Elias"}}>
    {props.children}
    </userContext.Provider>
    )
}