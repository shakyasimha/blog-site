import { Link } from "react-router-dom";

function Navbar() {
    return <nav className="nav">
        <h2 className="site-header"> <Link to="/"> Site Name </Link></h2>
        <ul>
            <li> 
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/search"> Search </Link>
            </li>
            <li> 
                <Link to="/about"> About </Link>
            </li>
            <li>
                <Link to="/contact">Contacts</Link>
            </li>
        </ul>
    </nav>
}

export default Navbar;