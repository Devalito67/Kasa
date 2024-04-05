import { Link } from "react-router-dom";
import "/src/styles/Header.css"

function Header() {
return <div className="header">
        <img src="/src/assets/logo.png" alt="Logo Kasa" />
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/infos">A propos</Link>
        </nav>
    </div>
}

export default Header