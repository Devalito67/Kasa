import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Carrousel({pictures, cover, title}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderContent = () => {
        if (pictures.length === 1) {
            return <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
        } else if (pictures.length === 0) {
            return <img src={cover} alt={title} />
        } else {
            return <>
                <button className="previous-arrow" onClick={prevSlide}><img src="/src/assets/previous-arrow.png" alt="previous-arrow" /></button>
                <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
                <p className="imageNumber">{currentIndex + 1}/{pictures.length}</p>
                <button className="next-arrow" onClick={nextSlide}><img src="/src/assets/next-arrow.png" alt="next-arrow" /></button>
            </>;
        }
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    return <CarrouselStyled>
        {renderContent()}
    </CarrouselStyled>
}

Carrousel.propTypes = {
    pictures: PropTypes.array,
    cover: PropTypes.string,
    title: PropTypes.string
}

const CarrouselStyled = styled.div`
    display: flex;
    width: 100%;
    height: 255px;
    align-items: center;
    position: relative;
    justify-content: center;

    @media screen and (min-width: 480px) {
        height: 415px;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;

        @media screen and (min-width: 480px) {
            border-radius: 25px;
        }
    }

    .previous-arrow,
    .next-arrow {
        height: 20px;
        width: auto;

        @media screen and (min-width: 480px) {
            height: 79px;
        }
    }

    .previous-arrow {
        left: 6px;

        @media screen and (min-width: 480px) {
            left: 24px;
        }
    }

    .next-arrow {
        right: 6px;

        @media screen and (min-width: 480px) {
            right: 24px;
        }
    }

    .next-arrow,
    .previous-arrow,
    .imageNumber {
        position: absolute;
        z-index: 1;
        background-color: transparent;
    }

    .imageNumber {
        display: none;

        @media screen and (min-width: 480px) {
            display: block;
            color: #FFF;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            bottom: 25px;
        }
    }
`;