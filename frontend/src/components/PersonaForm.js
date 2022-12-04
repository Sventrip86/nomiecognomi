import { useState } from "react"



const PersonaForm = () => {


    const [name, setName] = useState('')
    const [name2, setName2] = useState('')
    const [surname, setSurname] = useState('')
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const persona = { name, name2, surname, category, rating, comment  }

        const response = await fetch('/api/persone', {
            method: 'POST',
            body: JSON.stringify(persona),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setName('')
            setName2('')
            setCategory('')
            setRating('')
            setComment('')
            setError(null)
            console.log('new persona added', json)
        }
    }

    return(
        <form className="create" onSubmit={ handleSubmit }>
            <h3>Nome</h3>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <h3>Secondo nome</h3>
            <input 
                type="text"
                onChange={(e) => setName2(e.target.value)}
                value={name2}
            />
            <h3>Cognome</h3>
            <input 
                type="text"
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
            />
            <h3>Categoria</h3>
            <input 
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />
            <h3>Voto</h3>
            <input 
                type="number"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
            />
            <h3>Commento</h3>
            <input 
                type="text"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
            />
            <button> invia </button>

        </form>
    )
}

export default PersonaForm