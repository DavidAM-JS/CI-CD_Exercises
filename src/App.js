import logo from './logo.svg';
import imagen from './Professional Picture 3.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = {imagen} width="200px" height ="250px"/>
       <p>Hello, I'm David Almaraz and I am a mechatronic engineer graduated from the Autonomous University of Yucatán, I have knowledge of automation, 
         electronics and software. Currently I am dedicated to the software development of Javascript in Ksquare University</p>
      </header>
    </div>
  );
}

export default App;
