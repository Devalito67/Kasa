import styled from "styled-components";
import PropTypes from "prop-types";

export default function Rating({rating}) {
    const rateValue = rating

    const range = [1, 2, 3, 4, 5]
    return <RatingStyled>
            {range.map((rangeElem) =>
                rateValue >= rangeElem ? <span key={rangeElem.toString()}><img src="/assets/star-active.svg" alt="star-active"/></span> : <span key={rangeElem.toString()}><img src="/assets/star-inactive.svg" alt="star-inactive"/></span>
            )}
            </RatingStyled>
}

Rating.propTypes= {
    rating: PropTypes.string
}

const RatingStyled = styled.div`
    display: flex;
    
    img {
        height: 18px;

        @media screen and (min-width: 480px) {
            height: 36px;
        }
    }
`;