import "../styles/Title.css";
import PropTypes from "prop-types";

export default function Title(props) {
   return <div className="title">
                <h1>{props.title.title}</h1>
                <h2>{props.title.location}</h2>
            </div>
}

Title.propTypes= {
    title: PropTypes.object
}