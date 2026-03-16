import { useState } from "react";   

export const ColorPicker = () => {
  const [color,toggleColor] = useState('#ffffff')

  const handleToggleColor = (e) => {
    toggleColor(e.target.value)
  }

  return (
    <div id="color-picker-container" style={{background : color}}>
      <label>Choose a color from the input color below:</label>
      <input onChange={handleToggleColor} id="color-input" type="color" value={color}></input>
    </div>
  )
};