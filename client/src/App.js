import React, { useState, useEffect } from "react"
import {useForm} from "./useForm"

function App() {

  const [{ hitPoints, hitPoints2 }, setHitPoints] = useState({ hitPoints: 10, hitPoints2: 50 })
  const [values, handleChange] = useForm({hairColor: " ", eyeColor: " " })

  useEffect(() => {
    console.log("Billy")
  })

  function attack() {
    setHitPoints(currentState => ({
      ...currentState, hitPoints: currentState.hitPoints - 1
    }))
  }

  function heal() {
    setHitPoints(currentState => ({
      ...currentState, hitPoints: currentState.hitPoints + 1
    }))
  }

  function attackOther() {
    setHitPoints(currentState => ({
      ...currentState, hitPoints2: currentState.hitPoints2 - 1
    }))
  }

  function healOther() {
    setHitPoints(currentState => ({
      ...currentState, hitPoints2: currentState.hitPoints2 + 1
    }))
  }

  function changeHair(e) {
    handleChange(e.target.value)
  }



  return (
    <div>
      Board Game
      <br></br>
      This Piece has {hitPoints} HP. Some other piece has {hitPoints2} HP.
      <button onClick={attack} >Attack</button>
      <button onClick={heal} >Heal</button>
      <button onClick={attackOther} >Attack other piece</button>
      <button onClick={healOther} >Heal other piece</button>
      This piece has hair. It's hair color is {values}
      <br></br>
      <label htmlFor="Hair Color">
        Hair Color:
      </label>
      <input
        name="Hair Color"
        placeholder="Enter Hair Color"
        onChange={e => changeHair(e)}
      >
      </input>
    </div>
  )
}

export default App;


//create the board
