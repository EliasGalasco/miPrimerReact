import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
return (
    <>
    <div className="bg-nav sticky-top">
            <nav className="navbar navbar-expand-sm navbar-dark">
                <div className="container-fluid navbar-padre">
                    <nav className="navbar navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img src="./imagenes/logo-removebg-preview.png" alt="" width="90" height="80"
                                    className="d-inline-block align-text-center"/>
                                Natural Shine
                            </a>
                        </div>
                    </nav>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-list" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Promos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tienda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">HotWeek</a>
                            </li>
                        </ul>
                    </div>
                    <a className="" href="#">
                    <FontAwesomeIcon className='w-16' icon={faCartShopping} />
                    </a>
                </div>
            </nav>
    </div>
    </>
);
}

export default NavBar;
