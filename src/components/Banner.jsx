import "/src/styles/Banner.css"

function Banner(props) {
    return (
        <div className="banner">
            <img src={props.img} alt="image banniere" />
            <h1>{props.title}</h1>
        </div>
    );
}

export default Banner;