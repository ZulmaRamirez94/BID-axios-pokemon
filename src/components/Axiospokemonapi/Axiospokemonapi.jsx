import axios from 'axios';
import React, {useState} from 'react'
const Axiospokemonapi = () => {

    const [pokemones, setPokemones] = useState ([]);
    const getPokemones = async () =>{
        const baseURL = `https://pokeapi.co/api/v2/pokemon?limit=807&offset=0`;
            await axios.get(baseURL)
            .then(response=>{
                setPokemones(response.data.results.map((pokemon)=>pokemon.name));
            })
        }

    return (
        <div style={{margin:'auto'}}>
        <button onClick={() => getPokemones()} style={{backgroundColor:'gray', color:'white'}}>
        Fetch Pokemon
        </button>
        <ul>
            {pokemones.map((pokemon, index) => {
            return (
                <li key={index}>
                {pokemon}
                </li>
                )
            })}
        </ul>
        </div>
    )
}

export default Axiospokemonapi
