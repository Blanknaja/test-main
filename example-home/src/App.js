import logo from './logo.svg';
import './App.css';
// import { Button } from '../lib/module1/build/index'
import { Hello , ProjectCardVertical } from 'home-component-modules';
import {TestComponent } from 'react-component-library';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Button textTitle = "test src/App.js" /> */}
        <TestComponent theme = "secondary"/>
        <ProjectCardVertical />
      </header>
    </div>
  );
}

export default App;
