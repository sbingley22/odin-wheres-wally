import { Button } from "react-bootstrap"

const Hud = ({ pos, showDropDown, setShowDropDown, characters, setCharacters }) => {
  const style = {
    position: "relative",
    left: pos[0]+"px",
    top: pos[1]+"px",
    padding: "5px",
    backgroundColor: "black",
  }

  const characterSelected = (index) => {
    // Check if selection is correct
    setShowDropDown(false)
  }

  return (
    <div className="hud">
      { showDropDown &&
        <div style={style}>
          { characters.map( (char, index) => (
            <Button key={char} onClick={()=>(characterSelected(index))}>{char}</Button>
          ))}
        </div>
      }
    </div>
  )
}

export default Hud