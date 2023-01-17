import React from 'react'
import "../Footer/Footer.css"
import {FaFacebookF, FaTwitter, FaYoutube} from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";




function Footer() {
return (
    <footer className="pie-pagina absolute-bottom">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <a href="#">
                        <img src="./imagenes/logo-removebg-preview.png" alt="Logo de NaturalShine"/>
                    </a>
                </figure>
            </div>
            <div className="box">
                <h2 className='h-93px'>SOBRE NOSOTROS</h2>
                <p>Somos Una Empresa de Profesionales en nuestro tema.</p>
                <p>No dudes en comunicarte con nosotros por cualquier consulta.</p>
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                    <a target="_blank" href="https://www.instagram.com/natural_shiine/" ><AiFillInstagram className='insta'/></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100078172969262&is_tour_dismissed=true"><FaFacebookF className='face'/></a>
                    <a href="#" className=""><FaTwitter className='twitter'/></a>
                    <a href="#" className=""><FaYoutube className='youtube'/></a>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2022 <b>NaturalShine</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
  )
}

export default Footer