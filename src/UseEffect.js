import React, {useState, useEffect} from 'react'

const UseEffect = () => {

    const [clicked, setClick]= useState();
    const [count, setCount]= useState(0);

    useEffect(() =>{
        console.log("we're in useState");

        return(
            () =>{
                console.log("return of useState"); // it will execute first
                // in this return will work as cleanUp
            }
        )

    },[clicked]); // this will execute for setClick function

  return (
    <div>
      <button onClick={() => setClick("Follow")}>Follow</button>
      <br/>
      <hr/>
      <button onClick={() => setClick("For")}>For</button>
      <button onClick={() => setClick("More")}>More</button>
      <h1>{clicked}</h1>
      <br/>
      <hr/>
      <button onClick={() => {setCount(count+1)}}>+</button>
      <h1>{count}</h1>
    </div>
  )
}

export default UseEffect;                
