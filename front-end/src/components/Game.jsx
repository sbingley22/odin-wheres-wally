import Header from "./Header"
import {useState} from 'react'
import { Container, Image } from 'react-bootstrap';
import Hud from "./Hud";

const Game = ( { level } ) => {
  const image = `/whitby${level}.jpg`

  const [pos, setPos] = useState([-1,-1])
  const [showDropDown, setShowDropDown] = useState(false)
  const [characters, setCharacters] = useState([
    "Dracular",
    "Werewolf",
    "Frankenstein"
  ])

  const imageClicked = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    if (showDropDown) {
      // close drop down
      setShowDropDown(false)
    }
    else {
      // show drop down at location
      setPos([x,y])
      setShowDropDown(true)
    }
  }

  return (
    <div>
      <Header />
      <Container fluid style={{backgroundColor: "black", padding: "15px" }}>
        <Hud 
          pos={pos} 
          showDropDown={showDropDown} 
          setShowDropDown={setShowDropDown}
          characters={characters} 
          setCharacters={setCharacters} 
        />
        <Image 
          src={image} 
          onClick={imageClicked}
          alt="Your Image" 
          className="img-fluid" 
        />
      </Container>
    </div>
  )
}

export default Game