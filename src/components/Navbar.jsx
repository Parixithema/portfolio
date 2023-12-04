import {NavLink} from "react-router-dom"
import { useCallback } from "react"

const Navbar = () => {
    const isActive = useCallback(({isActive}) => isActive ? 'text-blue-500' : 'text-black', [])
    return (
        <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text" >PP</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
          <NavLink to="/about" className={isActive}>
            About
          </NavLink>
          <NavLink to="/projects" className={isActive}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={isActive}>
            Contact
          </NavLink>

        </nav>
        </header>
    )
}

export default Navbar
