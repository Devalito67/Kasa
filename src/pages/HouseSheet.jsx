import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel.jsx";
import Collapse from "../components/Collapse.jsx";
import DatasFetch from "../components/DatasFetch.jsx"; // Importer la fonction pour récupérer les données
import Host from "../components/Host.jsx";
import Tags from "../components/Tags.jsx";
import Title from "../components/Title.jsx";
import Rating from "../components/Rating.jsx";
import "../styles/HouseSheet.scss"
import Error from "./Error.jsx";


export default function HouseSheet() {

    const { id } = useParams(); // Récupérer l'ID de la carte depuis l'URL
    const cardInfo = DatasFetch().find((data) => data.id === id); // Trouver la carte avec l'ID correspondant
    if (!cardInfo) {
        return <Error />; // Gérer le cas où la carte n'est pas trouvée
    }

    return (
        <div className="houseSheet-container">
            <Carrousel pictures={cardInfo.pictures} />
            <div className="infos">
                <div className="title-tags">
                    <Title title={{ title: cardInfo.title, location: cardInfo.location }} />
                    <Tags tags={cardInfo.tags} />
                </div>
                <div className="host-rate">
                    <Host host={cardInfo.host} />
                    <Rating rating={cardInfo.rating} />
                </div>
            </div>
            <div className="details">
                <Collapse key={cardInfo.id + "description"} title="Description" content={cardInfo.description} />
                <Collapse key={cardInfo.id + "equipments"} title="&Eacute;quipements" content={cardInfo.equipments} />
            </div>

        </div>
    );
}
