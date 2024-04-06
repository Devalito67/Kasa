import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import datasInfos from "../datas/datasInfos.json"

function Infos() {
    return <div>
        <Banner img="/src/assets/backgroundInfos.jpg"/>
        <div>
            {datasInfos.map(item => (
                <Collapse key={item.title} title={item.title} content={item.content} />
            ))}
        </div>
    </div>

}

export default Infos