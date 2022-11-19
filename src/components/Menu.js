import React from "react";
import "../App.css";
import { gameStateContext } from "../Helpers/Contexts";
import {useContext} from 'react'


function Menu(){
    const {gameState,setGameState,userName,setUserName} = useContext(gameStateContext)
return <div className="Menu">
    <label>Enter your name</label>
        <input type="text" placeholder="Ex: John" onChange={(event)=>{
            setUserName(event.target.value)
        }}></input>
        <button onClick={()=>{
            setGameState('playing')
        }}>Start Quiz</button>
       
</div>
}
export default Menu