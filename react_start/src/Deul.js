import React from 'react'

export default function Deul({ deul , toggleDeul }) {
  
  function handleDeulClick()
  {
    toggleDeul(deul.id);
  }
  
  return (
    <div>
      <label>
      <input type="checkbox" checked={deul.deuled} onChange={handleDeulClick}/>
      {deul.name}  
      </label>
      
    </div>
  )
}
