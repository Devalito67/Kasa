import styled from "styled-components";
import PropTypes from "prop-types"

export default function Banner({bannerBackground, className }) {
    return (
        <BannerStyled className={className}>
            <img src={bannerBackground} alt="image banniere" />
        </BannerStyled>
    );
}

Banner.propTypes = {
    bannerBackground: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string
}

const BannerStyled = styled.div`
      display: flex;
    justify-content: center;
    border-radius: 25px;
    height: 111px;
    overflow: hidden;
    width: 100%;

    @media screen and (min-width: 480px) {
        height: 223px;
    }

    img {
        display: flex;
        object-fit: cover;
        width: 100%;
    }
`;