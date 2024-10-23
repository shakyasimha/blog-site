import { NavLink } from "react-router-dom";
import './Navbar.css';
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav>
        <h2 className="site-header"> 
            Site Name 
        </h2>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen)
            }}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open": ""} >
            <li> 
                <NavLink to="/"> Home </NavLink>
            </li>
            <li>
                <NavLink to="/search"> Search </NavLink>
            </li>
            <li> 
                <NavLink to="/about"> About </NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contacts</NavLink>
            </li>
        </ul>
    </nav>
}

export default Navbar;