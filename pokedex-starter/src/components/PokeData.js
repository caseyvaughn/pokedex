function PokeData(props) {
  // console.log("poke data test");
  return (
    <div>
      <h1> Name: {props.pokemon.name}</h1>
      <h2> Height: {props.pokemon.height}</h2>
      {/* <h2> Base Experience: {props.base_experience}</h2> */}
    </div>
  )
}

export default PokeData;