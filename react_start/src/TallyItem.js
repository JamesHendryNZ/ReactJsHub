import { render } from '@testing-library/react';
import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react'
import Tally from './Tally';



export default function TallyItem({ tallyItem , refresh , deleteItem , addItem , amount }) {

  /*
  this.state = 
  {
    name: tallyItem.name
  };

  getValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value} );
  }
*/  
  function upAmount()
  {
    tallyItem.amount += 1;
    refresh();
  }

  function downAmount()
  {
    tallyItem.amount -= 1;
    refresh();
  }

  function handleDelete()
  {
    deleteItem(tallyItem.id);
    refresh();
  }
  
  function renderDeleteButton( lengths )
  {
    if (lengths > 1)
      return ( <button onClick={handleDelete}>Delete</button>);
      
      
  }

/*
  const toTitle = (event) => {
    //console.log('got to handler here. Pressed : ' + event.key);
    if (event.key === 'Enter')
      renderTitle(false);

  }
*/

  function renderTitle(  )
  {

      return (<p> <input type="text" value={tallyItem.name} onChange={e => changeTite(e.target.value) }/> : {tallyItem.amount}</p>)
//    else
//      return(<p onClick={renderTitle(true)}>{tallyItem.name} : {tallyItem}</p>)
  }

  function changeTite (newValue)
  {
    //console.log(newValue);
    tallyItem.name = newValue;
    refresh();
    
  }



  return (
    <div>
      {renderTitle()}<button onClick={upAmount}>^</button><button onClick={downAmount}>v</button>
      <button onClick={addItem}>Add Item</button>{renderDeleteButton(amount)}
    </div>
  )
}
