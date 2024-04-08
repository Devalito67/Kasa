import "/src/styles/Banner.css"

function Banner(props) {
    const bannerClass = props.filter ? "banner filter" : "banner";

    return (
        <div className={bannerClass}>
            <img src={props.img} alt="image banniere" />
            <h1>{props.title}</h1>
        </div>
    );
}

export default Banner;