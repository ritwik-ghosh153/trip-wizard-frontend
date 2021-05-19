import React, { useState } from 'react'

const ToggleButton = ({text, onClick, small}) => {

  var activeClass
  var inactiveClass
  if(small===true){
    activeClass='button btn btn-outline-dark btn-sm'
    inactiveClass='button btn btn-dark btn-sm'
  }
  else{
    activeClass='button btn btn-outline-dark btn-lg'
    inactiveClass='button btn btn-dark btn-lg'
  }
  const [active, setActive] = useState(false)
  return (
    <button onClick={()=>{
      setActive(!active)
      onClick()
    }}
    className={active? activeClass:inactiveClass}>
    {text}
    </button>
  )
}

export default ToggleButton
