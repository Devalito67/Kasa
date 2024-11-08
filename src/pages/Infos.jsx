import styled from "styled-components"
import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import datasInfos from "../datas/datasInfos.json"

function Infos() {
    return <InfosStyled>
        <Banner bannerBackground="/src/assets/backgroundInfos.jpg"/>
        <div className="collapses-container">
            {datasInfos.map(item => (
                <Collapse key={item.title} title={item.title} content={item.content} />
            ))}
        </div>
    </InfosStyled>

}

export default Infos

const InfosStyled = styled.div`
      display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    max-width: 1280px;

    @media screen and (min-width: 480px) {
        row-gap: 38px;
    }

.collapses-container {
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    width: 100%;
    row-gap: 20px;

    @media screen and (min-width: 480px) {
        display: flex;
        flex-direction: column;
        max-width: 1024px;
        width: 100%;
        row-gap: 30px;
    }
}
`;