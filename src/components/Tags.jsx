import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Tags({tags}) {
    return <TagsStyled>
        {tags.map((tag, index) => (
            <button key={index}>{tag}</button>
        ))}
    </TagsStyled>
}

Tags.propTypes = {
    tags: PropTypes.array
}

const TagsStyled = styled.div`
   display: flex;
    flex-direction: row;
    column-gap: 10px;

    button {
        display: flex;
        color: #FFF;
        text-align: center;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 142.6%;
        background-color: #ff6060;
        border-radius: 10px;
        width: 85px;
        min-height: 18px;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 480px) {

            font-size: 14px;
            width: 115px;
            min-height: 25px;
        }
    }
`;