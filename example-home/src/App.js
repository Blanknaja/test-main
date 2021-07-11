import logo from './logo.svg';
import './App.css';
// import { Button } from '../lib/module1/build/index'
// import { Hello , ProjectCardVertical } from 'home-component-modules';
import  { Hello } from 'home-component-modules';
import {ProjectCardVertical}   from 'home-component-modules';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>test src/App.js</code> and save to reload.
        </p>
        {/* <Button textTitle = "test src/App.js" /> */}
        <Hello text = "test Message"/>
        <ProjectCardVertical title = "HI CARD"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
