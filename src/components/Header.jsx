import "/src/styles/Header.css"
import { NavLink } from "react-router-dom";

function Header() {
return <div className="header">
        <img src="/src/assets/logo.png" alt="Logo Kasa" />
        <nav>
            <NavLink className={({ isActive }) => isActive ? "active-class" : "non-active-class"} to="/">Accueil</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-class" : "non-active-class"} to="/infos">A propos</NavLink>
        </nav>
    </div>
}

export default Header