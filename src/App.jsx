import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Navrbar/Nav'
import Middle from './components/Middle/Middle'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Nav></Nav>
      <Middle></Middle>
    </>
  )
}

export default App
