import { useParams } from "react-router-dom";
import Carroussel from "../components/Carroussel";
import Collapse from "../components/Collapse.jsx";
import DatasFetch from "../components/DatasFetch"; // Importer la fonction pour récupérer les données
import Host from "../components/Host.jsx";
import Tags from "../components/Tags.jsx";


function HouseSheet() {

    const { id } = useParams(); // Récupérer l'ID de la carte depuis l'URL
    const cardInfo = DatasFetch().find((data) => data.id === id); // Trouver la carte avec l'ID correspondant
    console.log(cardInfo)
    if (!cardInfo) {
        return <div>Card not found</div>; // Gérer le cas où la carte n'est pas trouvée
    }

    return (
        <div>
            <Carroussel />
            <div className="title">
                <h1>{cardInfo.title}</h1>
                <h2>{cardInfo.location}</h2>
            </div>
            <Tags tags={cardInfo.tags} />
            <Host host={cardInfo.host} />
            <div className="rate">
                {cardInfo.rating}
            </div>
            <Collapse key={cardInfo.id + "description"} title="Description" content={cardInfo.description} />
            <Collapse key={cardInfo.id + "equipments"} title="Equipements" content={cardInfo.equipments} />
        </div>
    );
}

export default HouseSheet;