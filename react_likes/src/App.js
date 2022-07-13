import { useState } from 'react'
import Likes from './component/Likes'
import './App.css'

function App() {
  const [totalLikes, setTotalLikes] = useState(0)

  const addLike = () => {
    setTotalLikes(totalLikes + 1)
  }

  const minusLike = () => {
    if (totalLikes >= 1) {
      setTotalLikes(totalLikes - 1)
    } else {
    }
  }

  return (
    <div className="App">
      <Likes totalLikes={totalLikes} addLike={addLike} minusLike={minusLike} />
    </div>
  )
}

export default App
