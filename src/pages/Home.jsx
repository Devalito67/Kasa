import Banner from "../components/Banner"
import DatasFetch from "../components/DatasFetch"
import "../styles/Home.css"
import Card from "../components/Card"

function Home() {
    return <div>
        <Banner img="/src/assets/backgroundHome.jpg" title="Chez vous, partout et ailleurs" filter />
        <div>
            <div className="cards_container">
                {DatasFetch().map((data) => (
                    <Card key={data.id} cardInfo={data} />
                ))}
            </div>
        </div>
    </div>
}

export default Home