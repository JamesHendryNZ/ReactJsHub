import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

export default function Navator() {
  return (
    <nav>
        <ul   >
            <Link to='/tutorialsdone'>
              <li className="App-link"> Components made by following tutorials.</li>
            </Link>
            <Link to='/projectapps'>
              <li  className="App-link"> Small ProjectApps I have made myself.</li>
            </Link>
        </ul>
    </nav>
  )
}

export function TutorialNavator() {
  return (
    <nav>
        <ul   >
            <Link to='/deulmaster'>
              <li className="App-link"> Components made by following tutorials.</li>
            </Link>
            <Link to='/chucknorrisjoke'>
              <li  className="App-link"> Small ProjectApps I have made myself.</li>
            </Link>
        </ul>
    </nav>
  )
}