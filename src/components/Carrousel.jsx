import { useState } from "react";
import "../styles/Carrousel.scss"
import PropTypes from "prop-types";

export default function Carrousel(props) {
    console.log(props)

    const [currentIndex, setCurrentIndex] = useState(0);

    const renderContent = () => {
        if (props.pictures.length === 1) {
            return <div className="carrousel">
                <img src={props.pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
        } else if (props.pictures.length === 0){
            return <div className="carrousel">
            <img src={props.cover} alt={props.title} />
        </div>
        }else {
            return (
                <div className="carrousel">
                    <button className="previous-arrow" onClick={prevSlide}><img src="/src/assets/previous-arrow.png" alt="previous-arrow" /></button>
                    <img src={props.pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
                    <p className="imageNumber">{currentIndex + 1}/{props.pictures.length}</p>
                    <button className="next-arrow" onClick={nextSlide}><img src="/src/assets/next-arrow.png" alt="next-arrow" /></button>
                </div>
            );
        }
    }


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === props.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.pictures.length - 1 : prevIndex - 1));
    };


    console.log(currentIndex)

    return (
        renderContent()
    );
}

Carrousel.propTypes = {
    pictures: PropTypes.array
}