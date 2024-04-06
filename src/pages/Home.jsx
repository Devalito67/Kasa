import Banner from "../components/Banner"
import DataFetch from "../components/DatasFetch"
import "../styles/Home.css"

function Home() {
    return <div>
        <Banner img="/src/assets/backgroundHome.jpg" title="Chez vous, partout et ailleurs" filter/>
        <div>
            <DataFetch />
        </div>
    </div>
}

export default Home