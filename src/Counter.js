import { useState } from "react";
function Counter() {
    const [count,setCount] = useState (0) ;

    function incr(){
        setCount(
            function(oldCount){
                return oldCount + 1
            }
        )
        console.log(count)
    }

    function reset (){
        setCount(0)
    }

    return (
      <div>
        <h1> Counter </h1>
        <p> Counter is at {count} </p>
        <button onClick={incr}> Click to add 1 to Counter </button>
        <p> <button onClick={reset}> Click to reset </button> </p>
      </div>
    );
  }
  
  export default Counter;