import React, {useState} from 'react';
import NewMemo from "./NewMemo";

const Memo = () => {

    const[count, setCount]= useState(0);
    const[input, setInput] = useState('');

    function handleInput(e){
        setInput(e.target.value);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() =>setCount(count+1)}>Click</button>
      <br/>
      <input type="text" value ={input} onChange ={handleInput}/>
      <hr/>
      <NewMemo newCount={count}/>
    </div>
  )
}

export default Memo;
