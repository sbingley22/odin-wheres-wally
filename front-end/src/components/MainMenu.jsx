import { Link } from 'react-router-dom'
import Game from './Game'

const MainMenu = () => {
  return (
    <div className="main-menu">
      <Link to="/game">Play Game</Link>
    </div>
  )
}

export default MainMenu