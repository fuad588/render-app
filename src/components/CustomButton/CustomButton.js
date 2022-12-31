import React from 'react'
import './CustomButton.css'
const CustomButton = (props) => {
    let {text, buttonClick, buttonHover, buttonLeave} = props
    return (
    <button onClick={buttonClick} onMouseEnter = {buttonHover} onMouseLeave = {buttonLeave}>
        {text}
    </button>
  )
}

export default CustomButton