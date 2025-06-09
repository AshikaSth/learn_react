import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'; // CSS Modules
import LifeCycleA from './components/LifeCycleA';

function App() {
  return (
    <div className="App">
      <LifeCycleA />
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheets primary ={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <EventBind/> */}


      {/* <FunctionClick/>
      <ClassClick/> */}
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
