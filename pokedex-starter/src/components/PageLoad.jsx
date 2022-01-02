function PageLoad(props) {
  console.log("page loads testing");
  return (
    <div className="home-page">
      <h1> Ability: {props.abilities.ability.name}</h1>
      <h2>testing pikachu</h2>
    </div>
  )
}

export default PageLoad;