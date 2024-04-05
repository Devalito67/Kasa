import { useState } from "react"
import "/src/styles/Collapse.css"

function Collapse() {
    const [isOpen, setIsOpen] = useState(false)


    return isOpen ? (
        <div className="collapse">
            <div className="info">
                <div className="titleInfo">
                    <h3>Fiabilité</h3>
                    <button
                        className='collapse-toggle-button-close'
                        onClick={() => setIsOpen(false)}
                    >
                        <img src="/src/assets/arrow_back.svg" alt="" />
                    </button>
                </div>
                <div className="descriptionInfo-open">
                    <p>Les annonces postées sur Kasa garantissent une fiablilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièremnt vérifiées par nos équipes.</p>
                </div>
            </div>
        </div>
    ) : (

        <div className="collapse">
            <div className="info">
                <div className="titleInfo">
                    <h3>Fiabilité</h3>
                    <button
                        className='collapse-toggle-button'
                        onClick={() => setIsOpen(true)}
                    >
                        <img src="/src/assets/arrow_back.svg" alt="" />
                    </button>
                </div>
                <div className="descriptionInfo">
                    <p>Les annonces postées sur Kasa garantissent une fiablilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièremnt vérifiées par nos équipes.</p>
                </div>
            </div>
        </div>
    )
}

export default Collapse