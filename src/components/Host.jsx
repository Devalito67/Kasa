import "../styles/Host.scss"
import PropTypes from "prop-types";

export default function Host(props) {
    return <div className="host">
        <p>{props.host.name}</p>
        <img src={props.host.picture} alt={props.host.name}/>
    </div>
}

Host.propTypes= {
    host: PropTypes.object
}