
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

const {max} = 50 ;


function App() {
  const [delta, setDelta] = useState (1) ;
  
  function handleDelta(e){
    console.log(e);
    setDelta(Number(e.target.value))

    }
  

    return (
    <div className="App">
        Use state
        <p><input type="number" value = {delta} onChange = {handleDelta} /></p>
        if( e.target.value > {max}){
           setDelta(0)
        }
        <Counter delta = {delta} />
        <Counter delta = {delta} />
    </div>
  );
}

export default App;

//if(delta > max ){
  //input.value = 0
//}