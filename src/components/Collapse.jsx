import { useState } from "react";
import "/src/styles/Collapse.css";
import PropTypes from "prop-types";

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
        <div className="collapse">
            <div className="titleInfo">
                <h3>{title}</h3>
                <button
                    className={`collapse-toggle-button ${isOpen ? 'open-collapse' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img src="/src/assets/arrow_back.svg" alt="" />
                </button>
            </div>
            <div className={`descriptionInfo ${isOpen ? 'open' : ''}`}>
                {renderContent()}
            </div>
        </div>
    );
}

Collapse.propTypes= {
title: PropTypes.string,
content: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
])
}