import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountdownLightSwitch from './CountdownLightSwitch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountdownLightSwitch></CountdownLightSwitch>
    </>
  )
}

export default App
