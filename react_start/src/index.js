import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DeulMaster from './DeulMaster';
import ExtraPage from './ExtraPage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router , Link, Route , Routes } from 'react-router-dom';
import TutorialsDone from './TutorialsDone';
import ProjectApps from './ProjectApps';
import TallyApp from './TallyApp';


ReactDOM.render(
  <React.StrictMode>
        <Router>
          <Routes>
            
            <Route path='/' element={<App />} />
            <Route path='/chucknorrisjoke' element={<ExtraPage />} />
            <Route path='/deulmaster' element={<DeulMaster />} />
            <Route path='/tutorialsdone' element={<TutorialsDone />} />
            <Route path='/projectapps' element={<ProjectApps />} />
            <Route path='/tallyapp' element={<TallyApp/>} />

          </Routes>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
