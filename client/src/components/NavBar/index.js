import React from "react";
import "./nav.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-outline-light search">Search Books</button></a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved"><button type="button" className="btn btn-outline-light saved">Saved Books</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;