const ViewAgeCharacter = ({ age, name, img }) => {
  return (
    <div>
      <p>{age}</p>
      <p>{name}</p>
      <div style={{ width: "200px", height:"300px" }}>
        <img src={`http://localhost:3000/${img}`} alt={name} width="100%" height="100%"/>
      </div>
    </div>
  )
}

export default ViewAgeCharacter
