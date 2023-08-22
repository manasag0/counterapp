import './App.css';
import { useState } from 'react';
function App() {

  const [count, setCount] = useState(0);
  const hadleClickIncrement =()=>{
    setCount(count +1)
  }
  const hadleClickDecrement = () =>{
    setCount(count-1)
    if(count<0){
      setCount()
    }alert("You cannot decrese more then 0")
  }
  return (
    <div className="App">
      <h1>{count}</h1>
     <button onClick={hadleClickIncrement}>Increse</button>
     <button onClick={hadleClickDecrement}>Decrese</button>
    </div>
  );
}

export default App;
