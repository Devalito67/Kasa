import { useState } from "react";
import "../styles/Carrousel.css"

export default function Carrousel(props) {
    console.log(props)

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === props.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.pictures.length - 1 : prevIndex - 1));
    };

console.log(currentIndex)

    return (
        <div className="carrousel">
            <button className="previous-arrow" onClick={prevSlide}><img src="/src/assets/previous-arrow.png" alt="previous-arrow" /></button>
            <img src={props.pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
            <p className="imageNumber">{currentIndex+1}/{props.pictures.length}</p>
            <button className="next-arrow" onClick={nextSlide}><img src="/src/assets/next-arrow.png" alt="next-arrow" /></button>
        </div>
    );
}



