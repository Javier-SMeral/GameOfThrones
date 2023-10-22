const ViewAgeCharacter = ({ id, age, name, img }) => {
  return (
    <div id='v__card'>
      <p>{age}</p>
      <p>{name}</p>
      <div>
        <img src={`http://localhost:3000/${img}`} alt={name} width="100%" height="100%"/>
      </div>
    </div>
  )
}

export default ViewAgeCharacter
