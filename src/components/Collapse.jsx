import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const renderContent = () => {
        if (typeof content === "string") {
            return <p>{content}</p>;
        } else if (Array.isArray(content)) {
            return (
                <ul>
                    {content.map((contentData, index) => (
                        <li key={index}>{contentData}</li>
                    ))}
                </ul>
            );
        } else {
            return null;
        }
    };

    return (
        <CollapseStyled>
            <div className="titleInfo" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <button
                    className={`collapse-toggle-button ${isOpen ? 'open-collapse' : ''}`}   
                >
                    <img src="/src/assets/arrow_back.svg" alt="" />
                </button>
            </div>
            <div className={`descriptionInfo ${isOpen ? 'open' : ''}`}>
                {renderContent()}
            </div>
        </CollapseStyled>
    );
}

Collapse.propTypes= {
title: PropTypes.string,
content: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
])
}

const CollapseStyled = styled.div`
     display: flex;
    width: 100%;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    .titleInfo {
        display: flex;
        justify-content: space-between;
        background-color: var(--primary-color);;
        color: white;
        padding: 10px;
        border-radius: 5px;
        height: 30px;
        align-items: center;
        cursor: pointer;

        @media screen and (min-width: 480px) {
            padding: 10px 15px;
            height: 54px;
        }

        h3 {
            color: #FFF;
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
            line-height: 142.6%;

            @media screen and (min-width: 480px) {
                font-size: 24px;
            }
        }
        .open-collapse {
        transform: rotate(-180deg);
        transition: all 0.5s;
        }

        .collapse-toggle-button {
            transition: all 0.5s;
            background-color: transparent;
            height: 32px;
        }
    }

    .descriptionInfo {
        padding: 15px 20px 20px 20px;
        position: absolute;
        display: flex;
        top: -200px;
        transition: top 0.5s;
        z-index: -5;
        height: 0;

        p {
            color: var(--secondary-color);
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 142.6%;

            @media screen and (min-width: 480px) {
                font-size: 18px;
            }
        }
        
        &.open {
        display: flex;
        top: 0px;
        transition: top 0.5s;
        position: relative;
        height: auto;
        }
    }
`;