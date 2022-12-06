
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [delta, setDelta] = useState (1) ;
  const [maxCounter , setMaxCounter] = useState(100);
  const [reset , setReset] = useState(false)
  
  function handleDelta(e){
    console.log(e);
    setDelta(Number(e.target.value))
    }

  function handleMax(e){
    console.log(e);
    setMaxCounter(Number(e.target.value))
  }
  
  function getReset(data){
    console.log(data)
    setReset(data)
  }

    return (
    <div className="App">
        Use state
        <p><input type="number" value = {delta} onChange = {handleDelta} /></p>
        <p><input type="number" value = {maxCounter} onChange = {handleMax} /></p>
        <p> Maximum value {maxCounter} </p>
        <Counter delta = {delta} maxCounter = {maxCounter} getReset = {getReset} needToReset = {reset} />
        <Counter delta = {delta} maxCounter = {maxCounter} getReset = {getReset} needToReset = {reset} />
    </div>
  );
}

export default App;

//if(delta > max ){
  //input.value = 0
//}