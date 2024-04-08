import "../styles/Tags.css"

export default function Tags(props) {
    return  <div className="tags">
    {props.tags.map((tag, index) => (
        <button key={index}>{tag}</button> // Example of rendering tags with unique keys
    ))}
</div>
}