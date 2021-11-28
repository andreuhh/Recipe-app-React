import { NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar() {
    const { color } = useTheme()

    return (
        <div className="navbar" style={{ background: color }}>
            <nav >
                <NavLink to="/" className="brand">
                    <h3>Cooking</h3>
                </NavLink>
                <Searchbar />
                <NavLink to="/create">
                    <h3>Create Recipe</h3>
                </NavLink>
            </nav>
        </div>
    )
}
