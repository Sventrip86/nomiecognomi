

const PersonaDetails = ({ persona }) =>  {


    return (
        <div className="persona-details">
            <h4>{persona.name}</h4>
            <h4>{persona.surname}</h4>
            <p> <strong> Categoria: </strong>{persona.category}</p>
            <p> <strong> Rating: </strong>{persona.rating}</p>
            <p> <strong> Commenti: </strong>{persona.comment}</p>

        </div>
    )
}


export default PersonaDetails