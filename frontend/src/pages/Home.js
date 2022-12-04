import { useEffect, useState } from 'react'

const Home = () => {
    
    const [persone, setPersone ] = useState(null)

    useEffect(()=> {

        const fetchPersone = async () => {
            const response = await fetch('/api/persone')
            const json = await response.json()

            if(response.ok) {
                setPersone(json)
            }
        }

        fetchPersone()
    }, [])
    
    
    
    return (
        <div className="home">
            <div className="persone">
                {persone && persone.map((persona)=> (
                    <p key={persona._id}>{persona.name}</p>
                )
                )}
            </div>
        </div>
    )
}

export default Home