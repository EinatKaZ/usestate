import { useState ,useEffect } from "react";
function Counter(props) {
    const {delta,maxCounter,getReset, needToReset} = props;
    const [count,setCount] = useState (0) ;

    useEffect(() => {
        if(needToReset){
            setCount(0)
            getReset(false)
        }
    },[needToReset])

    function incr(){
        setCount(
            function(oldCount){
                if(oldCount + delta > maxCounter) return 0
                return oldCount + delta
            }
        )
        console.log(count)
    }

    function reset (){
        getReset(true)
       // setCount(0)
    }

    return (
      <div>
        <h1> Counter </h1>
        <p> Counter is at {count} </p>
        <button onClick={incr}> Click to add {delta} to Counter </button>
        <p> <button onClick={reset}> Click to reset </button> </p>
      </div>
    );
  }
  
  export default Counter;