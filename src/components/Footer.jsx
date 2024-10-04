import styled from 'styled-components';
import PropTypes from "prop-types"

function Footer({logo, footerInfos}) {
    return <FooterStyled>
        {logo}
        <p>{footerInfos}</p>
    </FooterStyled>
}

export default Footer

Footer.propTypes = {
    logo: PropTypes.element,
    footerInfos: PropTypes.string
};

const FooterStyled = styled.footer`
    display: flex;
    background-color: black;
    align-items: center;
    flex-direction: column;
    padding-top: 66px;
    padding-bottom: 30px;
    width: 100%;
    row-gap: 20px;

    p {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: #FFF;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 142.6%;

        @media screen and (min-width:480px) {
            width: 512px;
            font-size: 24px;
        }
    }
`;