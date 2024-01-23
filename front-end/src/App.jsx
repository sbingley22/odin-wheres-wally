import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainMenu from './components/MainMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-dark text-light'>
      <Header />
      <MainMenu />
    </div>
  )
}

export default App
