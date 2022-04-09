import { React , useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Tally from './Tally';


export default function TallyApp() {

  const [ items , setItems ] = useState([
    { id:uuidv4() , name:"Testing" , amount:12},
    { id:uuidv4() , name:"Testingzz" , amount:69}
  ]);



  function handleAddItem(e)
  {

  }

  function clearItems()
  {
    setItems([{id:uuidv4() , name:"Default" , amount:0}])
  }

  return (
    <div className='App'>
      <h1>Tally App Mini Project</h1>

      <Tally tallyItems={items} setItems={setItems}/>
      <button onClick={clearItems}>Reset Items</button>
      
    </div>
  )
}
