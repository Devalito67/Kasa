import "../styles/Host.css"

export default function Host(props) {
    return <div className="host">
        <p>{props.host.name}</p>
        <img src={props.host.picture} alt={props.host.name}/>
    </div>
}