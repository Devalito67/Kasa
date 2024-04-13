import "../styles/Rating.scss";
import PropTypes from "prop-types";

export default function Rating(props) {
    const rateValue = props.rating

    const range = [1, 2, 3, 4, 5]
    return <div className="rate">
            {range.map((rangeElem) =>
                rateValue >= rangeElem ? <span key={rangeElem.toString()}><img src="/src/assets/star-active.svg" alt="star-active"/></span> : <span key={rangeElem.toString()}><img src="/src/assets/star-inactive.svg" alt="star-inactive"/></span>
            )}
            </div>
}

Rating.propTypes= {
    rating: PropTypes.string
}