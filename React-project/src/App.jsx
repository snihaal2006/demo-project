import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login, { Sample } from './component/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <h1>Hello World</h1>
      <Login />
      <Sample />
    </div>
  )
}

export default App
