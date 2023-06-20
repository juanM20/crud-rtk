import { useState } from "react"
import { useGetPokemonByNameQuery } from "../features/queries/pokeSlice"
import { Link } from "react-router-dom"

const PokeList = () => {
    const [pokeName, setPokeName] = useState('charizard')
    const { data, error, isLoading } = useGetPokemonByNameQuery(pokeName)
    console.log(data);

    const handleNameChange = e => {
        e.target.value === '' | e.target.value === ' ' ? setPokeName('charizard') :
            setPokeName(e.target.value)
    }

    return (
        <div>
            <div className="container mx-auto pokemon">
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                        <h1 className="capitalize">{data.name}</h1>
                        <img src={data.sprites.front_default} alt={data.species.name}></img>
                        <span>Weight: {data.weight} </span>
                        <span>Height: {data.height} </span>
                        <div>
                            Type: {data.types.map(type => {
                                return `${type.type.name}/`
                            })}
                        </div>
                    </>
                ) : null}
            </div>
            <div className="container">
                <label>Pokemon name: </label>
                <input type="text" name="poke_name" className="poke-name text-slate-600" placeholder="write name..." onChange={handleNameChange} />
            </div>
            <div className="back">
                <Link to='/'>Back to Home</Link>
            </div>
        </div>
    )


}


export default PokeList