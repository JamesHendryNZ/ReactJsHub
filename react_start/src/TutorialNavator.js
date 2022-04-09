import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

export default function TutorialNavator() {
  return (
    <nav >
        <ul   >
            <Link to='/deulmaster'>
              <li className="App-link"> A todo list that I turned into a time to deul list.</li>
            </Link>
            <Link to='/chucknorrisjoke'>
              <li  className="App-link"> Chuck Norris Joke API for basic API use.</li>
            </Link>
        </ul>
    </nav>
  )
}
