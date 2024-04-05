import "/src/styles/Banner.css"

function Banner(props) {
return <div className="banner">
    <img src={props.img} alt="" />
            <h1>props.titre</h1>
        </div>
}

export default Banner