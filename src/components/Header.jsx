import styled from "styled-components";
import Navbar from "./Navbar";
import { PropTypes } from "prop-types";

function Header({ logo }) {
    return <HeaderStyled>
        {logo}
        <Navbar />
    </HeaderStyled>
}

export default Header

Header.propTypes={
 logo :PropTypes.element   
}


const HeaderStyled = styled.header`
    display: flex;
    max-width: 1280px;
    min-width: 335px;
    width: 100%;
    font-size: 12px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%;

    @media screen and (min-width: 480px) {
        font-size: 24px;
    }

    img {
        height: 47px;

        @media screen and (min-width: 480px) {
            height: 100%;
        }
    }
`;