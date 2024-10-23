import { NavLink } from "react-router-dom";

function Navbar() {
    return <nav>
        <h2 className="site-header"> 
            Site Name 
        </h2>
        <ul>
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