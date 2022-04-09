import logo from './logo.svg';
import './App.css';
import Navator from './Navator';

function App() {

  console.clear();
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            You have to Start from Somewhere.
        </h1>
        <p>
          The React.js Hub For James Hendry.
        </p>

        
        <Navator  />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/james-hendry-11b5b1227/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn.
        </a>
      </header>
    </div>
  );
}

export default App;
