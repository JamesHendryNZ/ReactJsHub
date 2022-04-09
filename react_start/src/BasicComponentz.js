import React from 'react'
import Deul from './Deul';

export default function BasicComponentz( { deuls , toggleDeul } ) {
      
return (
  deuls.map( deul => {
      return <Deul key={deul.id} deul={ deul } toggleDeul={toggleDeul} />
      
    })

  /*
    <div>          
      <h3>A basic component</h3>
      <h1>Yoh ho ho, it's a me, Marrio</h1>
    
    </div>

*/
  )
}
