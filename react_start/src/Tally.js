import {React, useState } from 'react';
import TallyItem from './TallyItem';
import {v4 as uuidv4} from 'uuid';

export default function Tally( { tallyItems , setItems } ) {
  

  console.log( JSON.stringify(tallyItems) + " ::at Tally ::");

  function addItem()
  {
    console.log('New Item made')
    const newItem = { id: uuidv4(), name: "NewTally", amount : 0};
    
    setItems( prevItems => {
      return [ ...prevItems , newItem];
    });
    
  }

  function deleteItem(id)
  {
    console.log('item deleted :: ' + id.id);
    const allButTheOne = tallyItems.filter( Tally => Tally.id !== id);

    setItems(allButTheOne);
    
  }

  function refresh()
  {
    setItems(refreshedItems => { return  [...refreshedItems] } );
  }
  


  return (
    tallyItems.map( Tally => {
        return <div>
                <TallyItem key={Tally.id} tallyItem={Tally} refresh={refresh} deleteItem={deleteItem} addItem={addItem} amount={tallyItems.length}></TallyItem> 
                </div>
    })
  )
}
