export function HobbyList({hobbies}){
  const hobbyItems = [];
  for(let i = 0; i < hobbies.length; i++){
    hobbyItems.push(<li key={i}>{hobbies[i]}</li>)
  }

  return(
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>{hobbyItems}</ul>
    </div>
  )
}