
import { useState} from 'react';
import './App.css';
import Menu from './components/Menu';
import { gameStateContext } from './Helpers/Contexts';
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'
function App() {

  const [gameState, setGameState] = useState("menu")
  const [userName,setUserName] = useState("")
  const [score,setScore] = useState(0)
  return (
 
    <div className="App">
      <h1>Quiz App</h1>
      <gameStateContext.Provider value={{gameState,setGameState,userName,setUserName,score,setScore}}>
      {gameState==="menu" && <Menu/>}
      {gameState==="playing" && <Quiz/>}
      {gameState==="finished" && <EndScreen/>}
      </gameStateContext.Provider>
    </div>

  )
}

export default App;
