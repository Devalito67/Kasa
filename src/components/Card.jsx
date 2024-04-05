import "/src/styles/Card.css"

function Card(props) {   
return <div className="card">
  <img src={props.cardInfo.cover} alt={props.cardInfo.title}/>
    <h3>{props.cardInfo.title}</h3>
</div>
}

export default Card