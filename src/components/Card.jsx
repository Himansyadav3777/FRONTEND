import React from 'react'
// rfce to boilar palte
import './card.css'
function Card() {
  return (

    <div id='adi'>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xj-KzT_gYWjXfmEWMl8C5ik93MnxmucjvA&s" alt="" height={100} width={100}/>

<h1>{props.name}</h1>
<h3>{props.edu}</h3>
    </div>
  )
}

export default Card