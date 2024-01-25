import Header from "./Header"
import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import Hud from "./Hud";
import WinForm from "./WinForm";

const apiUrl = import.meta.env.VITE_API_URL

const Game = ( { level } ) => {
  const image = `/whitby${level}.png`

  const [pos, setPos] = useState([-1,-1])
  const [realPos, setRealPos] = useState([-1,-1])
  const [showDropDown, setShowDropDown] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)
  
  const [levelData, setLevelData] = useState()
  const url = `${apiUrl}api/levels/${level}`
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const jsonData = await response.json()
        setLevelData(jsonData.data)
        //console.log(jsonData.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  },[])

  const [startTime, setStartTime] = useState()
  const [totalTime, setTotalTime] = useState()
  useEffect(()=>{
    setStartTime(new Date())
  }, [])

  const imageClicked = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    // Get the dimensions of the image
    const imageElement = e.target;
    const imageWidth = imageElement.clientWidth;
    const imageHeight =  (imageWidth / imageElement.naturalWidth) * imageElement.naturalHeight;
  
    // Normalize the coordinates to the range [0, 1]
    const normalizedX = x / imageWidth;
    const normalizedY = y / imageHeight;
  
    console.log("click: ", normalizedX, normalizedY);

    if (showDropDown) {
      // close drop down
      setShowDropDown(false)
    }
    else {
      // show drop down at location
      setPos([normalizedX, normalizedY]);
      setRealPos([x, y]);
      setShowDropDown(true)
    }
  }

  const gameWon = () => {
    // Player has completed the level
    setGameFinished(true)
    const currentTime = new Date();
    const seconds = Math.floor((currentTime - startTime) / 1000);
    setTotalTime(seconds)
  }

  return (
    <div>
      <Header />
      <Container fluid style={{backgroundColor: "black", padding: "15px" }}>
        { gameFinished ? 
          <WinForm
            time={totalTime}
            level={level}
          />
        :
          <>
          <Hud 
            pos={pos} 
            realPos={realPos} 
            showDropDown={showDropDown} 
            setShowDropDown={setShowDropDown}
            levelData={levelData} 
            setLevelData={setLevelData} 
            gameWon={gameWon}
          />
          <Image 
            src={image} 
            onClick={imageClicked}
            alt="Your Image" 
            className="img-fluid" 
          />
          </>
        }
      </Container>
    </div>
  )
}

export default Game