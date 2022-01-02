import { useState } from "react";

function Form(props) {
  const [pokemonName, setPokemonName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setNewSearch(pokemonName);
    setPokemonName("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemon">Pokemon: </label>
        <input
          id="pokemonName"
          type= "text"
        value={pokemonName}
        placeholder="Pokemon Name"
        onChange={(e) => setPokemonName(e.target.value)}

        />
        <input type = "submit" value="Find Pokemon"/>
      </form></>
  )


}

export default Form;