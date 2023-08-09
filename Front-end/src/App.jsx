import { useState } from 'react'
import matchScreen from './components/matchScreen'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <matchScreen></matchScreen>
    </>
  )
}

export default App
