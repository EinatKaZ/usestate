
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [delta, setDelta] = useState (1) ;
  const [maxCounter , setMaxCounter] = useState(100);
  
  function handleDelta(e){
    console.log(e);
    setDelta(Number(e.target.value))
    }

  function handleMax(e){
    console.log(e);
    setMaxCounter(Number(e.target.value))
  }
  

    return (
    <div className="App">
        Use state
        <p><input type="number" value = {delta} onChange = {handleDelta} /></p>
        <p><input type="number" value = {maxCounter} onChange = {handleMax} /></p>
        <Counter delta = {delta} maxCounter = {maxCounter} />
        <Counter delta = {delta} maxCounter = {maxCounter} />
    </div>
  );
}

export default App;

//if(delta > max ){
  //input.value = 0
//}