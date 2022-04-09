import './App.css';
import React from 'react'
import Deul from './Deul';
import {v4 as uuidv4} from 'uuid';
import BasicComponentz from './BasicComponentz';
import { useState , useRef, useEffect } from 'react';
import './App.css';

const LOCAL_STORAGE_KEY = 'reactApp.deuls';

/*
Learned from Youtube Totorial, Made into it's own component as my
own requirments
*/

export default function DeulMaster() {

    const [ deuls , setDeuls ] = useState([ 
        /*{ id: 1, name: "Green-Eyes" , deuled: true } , 
        { id: 2, name: "I'm Blue, abba di,  abba dai" , deuled: false }
        */
      ]);

      const deulNameRef = useRef()

      useEffect(() => {
        const storedDeuls = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedDeuls) setDeuls(storedDeuls);
    
      }, []);
    
      useEffect(() =>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(deuls))
    
      }, [deuls]);
    
      function handleStartDeul(e)
      {
          const name = deulNameRef.current.value
          if (name === '') return;
          console.log(name); 
          setDeuls( prevDeuls =>{
    
            return [...prevDeuls , {id: uuidv4(), name: name, deuled: false}];
          
          });
          deulNameRef.current.value = null; 
        
      }
    
      function toggleDeul(id)
      {
        //always make a new copy
        const newDeuls = [...deuls];
        const deul = newDeuls.find(deul => deul.id === id);
        deul.deuled = !deul.deuled;
        setDeuls(newDeuls);
      }
    
      function handleClearDeuls()
      {
        const deuls2End = deuls.filter( deul => !deul.deuled );
        setDeuls(deuls2End)
      }
    
      function itsNotTime2Duel() { setDeuls([]); }

  return (
    <div className="App">
      <h1>The Deul Master Page</h1>

      <BasicComponentz deuls={deuls} toggleDeul={toggleDeul}/>
          
          <input ref={deulNameRef} type="text" />
          <button onClick={handleStartDeul}>Time To Deul</button>
          <button onClick={handleClearDeuls}>Clear Deuled Deuls</button>
          <div>{deuls.filter( deul => !deul.deuled).length } deuls left to deul.</div>
          <button onClick={itsNotTime2Duel}> It's not time 2 Deul</button>
          <div>Kokonuts</div>
      
    </div>
  )
}
