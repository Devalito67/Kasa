import Banner from "../components/Banner"
import DatasFetch from "../components/DatasFetch"
import "../styles/Home.scss"
import Card from "../components/Card"

function Home() {
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
                <Card key={data.id} cardInfo={data} />
            ))}
        </div>

    </div>
}

export default Home