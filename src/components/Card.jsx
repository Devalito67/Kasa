import PropTypes from "prop-types";
import styled from "styled-components";

export default function Card({ title, imageSource, onClick }) {
  return (
    <CardStyled onClick={onClick}>
      <img src={imageSource} alt={title} />
      <div className="card-infos">
        <h3>{title}</h3>
      </div>
    </CardStyled>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  imageSource: PropTypes.string
}

const CardStyled = styled.div`
    height: 255px;
    width: 335px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    cursor:pointer;

    @media screen and (min-width:480px) {
        height: 340px;
        width: 340px;
    }

    img {
        display: flex;
        height: 100%;
        border-radius: 10px 10px 0 0;
        object-fit: cover;
        object-position: center;
        min-width: 100%;
    }

    .card-infos {
    display: flex;
    flex-direction: column;
    height: 91px;
    padding: 20px;
    flex: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.00) 0%, rgba(10, 10, 10, 0.00) 42%, rgba(4, 4, 4, 0.20) 99.99%, rgba(0, 0, 0, 0.50) 100%);
    background-color: #ff6060;
        h3 {
                color: #FFF;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: 142.6%;
        }
    } 
 `;