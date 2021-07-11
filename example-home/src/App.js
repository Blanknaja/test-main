import logo from './logo.svg';
import './App.css';
// import { Button } from '../lib/module1/build/index'
// import { Hello , ProjectCardVertical } from 'home-component-modules';
import  { Hello } from 'home-component-modules';
import {ProjectCardVertical}   from 'home-component-modules';
import {TestComponent } from 'react-component-library';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Button textTitle = "test src/App.js" /> */}
        <Hello text = "test Message"/>
        <ProjectCardVertical title = "HI CARD"/>
        <TestComponent theme = "secondary"/>
      </header>
    </div>
  );
}

export default App;
