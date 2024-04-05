import { Link } from "react-router-dom"

function Error() {
    return <div>
        <h2>404</h2>
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
}

export default Error