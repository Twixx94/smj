import './Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom'
// import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul className="ul-nav">
        <li className="nav-li">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-li">
        <Link className="nav-link" to="/prestataire">Prestataires</Link>
        </li>
        <li className="nav-li">
        <Link className="nav-link" to="/list">Renseignement</Link>
        </li>
        <li className="nav-li">
        <Link className="nav-link" to="/list2">Sanitaire</Link>
        </li>
        </ul>
        </nav>
    </div>
  )
}
