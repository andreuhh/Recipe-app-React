import { NavLink } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <NavLink to="/" className="brand">
                    <h3>Cooking</h3>
                </NavLink>
                <NavLink to="/create">
                    <h3>Create Recipe</h3>
                </NavLink>
            </nav>
        </div>
    )
}
