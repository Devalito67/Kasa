import styled from "styled-components";
import PropTypes from "prop-types";

export default function Host({name, picture}) {
    return <HostStyled>
        <p>{name}</p>
        <img src={picture} alt={name}/>
    </HostStyled>
}

Host.propTypes= {
    name: PropTypes.string,
    picture: PropTypes.string
}

const HostStyled = styled.div`
      display: flex;
    flex-direction: row;
    column-gap: 10px;
    align-items: center;

    @media screen and (min-width: 480px) {
        column-gap: 10px;
        align-items: center;
    }

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #c4c4c4;

        @media screen and (min-width: 480px) {
            width: 64px;
            height: 64px;
        }
    }

    p {
        width: min-content;
        color: var(--primary-color);
        text-align: right;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 142.6%;

        @media screen and (min-width: 480px) {
            font-size: 18px;
        }
    }
`;