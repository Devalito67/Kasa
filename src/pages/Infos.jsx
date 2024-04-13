import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import datasInfos from "../datas/datasInfos.json"
import "../styles/Infos.scss"

function Infos() {
    return <div className="infos-container">
        <Banner img="/src/assets/backgroundInfos.jpg"/>
        <div className="collapses-container">
            {datasInfos.map(item => (
                <Collapse key={item.title} title={item.title} content={item.content} />
            ))}
        </div>
    </div>

}

export default Infos