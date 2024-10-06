import PropTypes from "prop-types";
import styled from "styled-components";

export default function Title({title, location}) {
   return <TitleStyled>
                <h1>{title}</h1>
                <h2>{location}</h2>
            </TitleStyled>
}

Title.propTypes= {
    title: PropTypes.string,
    location: PropTypes.string
}

const TitleStyled = styled.div`
   display: flex;
    font-style: normal;
    line-height: 142.6%;
    row-gap: 15px;
    flex-direction: column;

    h1 {
        color: #FF6060;
        font-size: 18px;
        font-weight: 500;

        @media screen and (min-width: 480px) {
            font-size: 36px;
        }
    }

    h2 {
        color: #000;
        font-size: 14px;
        font-weight: 500;

        @media screen and (min-width: 480px) {
            font-size: 18px;
        }
    }
`;