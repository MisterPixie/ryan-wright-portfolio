import { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import "../sass/layout/_header.scss";

export const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="navbar-container bg-gradient-cold">
            <div className="container">
                <nav className="navbar " role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <h1 className="navbar-item">Ryan's Portfolio</h1>
                        <button onClick={() => {setIsActive(!isActive)}} className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </button>
                    </div>

                    <div id="navMenu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                        <div className="navbar-end">
                            <Link className="navbar-item" to="/">
                                Home
                            </Link>

                            <Link className="navbar-item" to="/projects">
                                Projects
                            </Link>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;