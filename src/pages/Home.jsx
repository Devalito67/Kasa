import Banner from "../components/Banner"
import DatasFetch from "../components/DatasFetch"
import "../styles/Home.scss"
import Card from "../components/Card"
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();

    return <div className="home-container">
        <div className="banner-container">
            <Banner img="/src/assets/backgroundHome.jpg" />
            <div className="banner-text">
                <p className="text">Chez vous,&nbsp;</p>
                <p className="text">partout et ailleurs</p>
            </div>
        </div>
        <div className="cards-container">
            {DatasFetch().map((data) => (
                <Card
                    key={data.id}
                    title={data.title}
                    imageSource={data.cover}
                    onClick={() => navigate(`/card/${data.id}`)} />
            ))}
        </div>
    </div>
}

export default Home