import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="leftSide">
        Lado esquerdo
      </div>
      <div className="rightSide">
        Lado direito
      </div>
    </div>
  )
}

export default App
