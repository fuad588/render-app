import React from 'react'
import './Popup.css'
const Popup = (props) => {
    const {popClass} = props
  return (
    <div className={'popup '+ popClass}>Hover olundu</div>
  )
}

export default Popup