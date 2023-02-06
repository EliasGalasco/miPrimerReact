import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom";
import UserMenu from './UserMenu';
import { useContext } from 'react';
import { cartContext } from '../../storage/cartContext';

/*Llamar funcion total items con useContext  */

function NavBar() {
    const {totalItems} = useContext(cartContext)
return (
    <>
    <div className="bg-nav sticky-top">
            <nav className="navbar navbar-expand-sm navbar-dark">
                <div className="container-fluid navbar-padre">
                    <nav className="navbar navbar-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">
                                <img src="../imagenes/logo-removebg-preview.png" alt="" width="90" height="80"
                                    className="d-inline-block align-text-center"/>
                                Natural Shine
                            </Link>
                        </div>
                    </nav>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-list" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category/bebibles">Refrescos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category/polvo">Suplementos</NavLink>
                            </li>
                        </ul>
                    </div>
                    <UserMenu/>
                    <Link className="carrito" to="/carrito" >
                    <FontAwesomeIcon className='w-16' icon={faCartShopping} />
                    {totalItems(0)}
                    </Link>
                </div>
            </nav>
    </div>
    </>
);
}

export default NavBar;
