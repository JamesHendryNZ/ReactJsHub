import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';

export default function ExtraPage() {
  
  useEffect(() =>{
    getItems();

  },[]);

  const [items, setItems] = useState();

  const getItems = async () => {
    const options = {
      method: 'GET',
      url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
      headers: {
        accept: 'application/json',
        'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'x-rapidapi-key': '156bd03643mshb33b5514efab493p117a23jsn9d6877c5483f'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data.value);
      setItems(response.data.value);
    }).catch(function (error) {
      console.error(error);
    });
    
    console.log("awoo");
    //console.log(data);
  }
  
  return (
    <div className="App">
      <h1>This is an Extra Page</h1>
      <b>Born in Bloody Bold Boron Bodies</b>
      <h3> Random Chuck Norris Joke API</h3>
      <p>{items}</p>

      <button onClick={getItems}> A new Chuck Norris Joke</button>

    </div>
  );
}
