import "/src/styles/Banner.css"
import PropTypes from "prop-types"

export default function Banner(props) {
    return (
        <div className="banner">
            <img src={props.img} alt="image banniere" />
        </div>
    );
}

Banner.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string
}