import { Button } from "react-bootstrap"

const Hud = ({ pos, realPos, showDropDown, setShowDropDown, levelData, setLevelData, gameWon }) => {
  const style = {
    position: "relative",
    left: realPos[0]+"px",
    top: realPos[1]+"px",
    padding: "7px",
    backgroundColor: "black",
  }

  const characterSelected = (i) => {
    // Check if selection is correct
    const charx = levelData[i].x
    const chary = levelData[i].y
    const x = pos[0]
    const y = pos[1]
    const radius = 0.05
    //console.log(x, charx)
    //console.log(y, chary)

    if (x > charx - radius && x < charx + radius) {
      if (y > chary - radius && y < chary + radius) {
        // correct selection
        const slicedArray = levelData.filter((element,index) => index !== i)
        setLevelData(slicedArray)
        
        if (slicedArray.length <= 0) {
          // Player has found all characters
          gameWon()
        }
      }
    }

    setShowDropDown(false)
  }

  return (
    <div className="hud">
      { showDropDown &&
        <div style={style}>
          { levelData.map( (char, index) => (
            <Button 
              key={char.character} 
              onClick={()=>(characterSelected(index))}
              style={{ display: "block", width: "100%", margin: "2px 0" }}
            >
              {char.character}
            </Button>
          ))}
        </div>
      }
    </div>
  )
}

export default Hud