//  rfce boilar palte code.
import React, { useState } from 'react'

function Count_1() {
const [color,setColor]=useState(0)   // positive ke liye
//  color is a vriable and setColor is access method  and value se is use the usetState() method



  function inc(){
setColor(color+1)
  }

  function neg(){
 setColor(color-1)
  }
  return (
    <div>
        <button onClick={inc}>+</button>
        <span> {color} </span>
        <button onClick={neg}> -</button>

    </div>
  )
}

export default Count_1