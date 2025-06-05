import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">

      <FunctionClick/>
      <ClassClick/>
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name = "Bruce" heroName = "BatMan">
        <p> This is children props.</p>
        </Greet> 
      <Greet name ="Clark" heroName = "SuperMan">
        <button>Action</button>
      </Greet> */}

      {/* <Greet name ="Diana" heroName = "WonderWoman"/> 
      <Welcome name = "Bruce" heroName = "BatMan"/> */}
      {/*<Welcome name ="Clark" heroName = "SuperMan"/>
      <Welcome name ="Diana" heroName = "WonderWoman"/> 

       <Hello/> */}
    </div>
  );
}

export default App;
