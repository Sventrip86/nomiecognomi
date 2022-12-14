import { useEffect, useState } from 'react'

//components

import PersonaDetails from '../components/PersonaDetails'
import PersonaForm from '../components/PersonaForm'

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
                    <PersonaDetails key={persona._id} persona={persona} />
                )
                )}
            </div>
            <PersonaForm/>
        </div>
    )
}

export default Home