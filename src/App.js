import './App.css';
import { useState } from 'react';
function App() {

  const [count, setCount] = useState(0);
  const hadleClickIncrement =()=>{
    setCount(count +1)
  }
  const hadleClickDecrement = () =>{
    setCount(!count-1)
    if(count <= 0){
      alert("You can't count more then 0, reset the count")
    }

  }
  const handleClickReset = () =>{
    setCount(0)
 
  }
  return (
    <div className="App">
      <h1>{count}</h1>
     <button onClick={hadleClickIncrement}>Increse</button>
     <button onClick={handleClickReset}>Reset</button>
     <button onClick={hadleClickDecrement}>Decrese</button>
    </div>
  );
}

export default App;
