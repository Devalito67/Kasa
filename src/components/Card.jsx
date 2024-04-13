import { Link } from "react-router-dom";
import "/src/styles/Card.scss";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <Link to={`/card/${props.cardInfo.id}`}>
      <div className="card">
        <img src={props.cardInfo.cover} alt={props.cardInfo.title} />
        <div className="card-infos">
          <h3>{props.cardInfo.title}</h3>
        </div>
      </div>
    </Link>
  );
}

 Card.propTypes ={
  cardInfo: PropTypes.object
 }