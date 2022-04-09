import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

export default function ProjectAppNavator() {
  return (
    <nav >
        <ul   >
            <Link to='/tallyapp'>
              <li className="App-link"> A tally app to count different things when I need to.</li>
            </Link>
        </ul>
    </nav>
  )
}
