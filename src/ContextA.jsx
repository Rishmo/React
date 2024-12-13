import React, {createContext} from 'react'
import ContextB from "./ContextB";

const GreetContext = createContext();
const Greet2Context = createContext();

const ContextA = () => {

    const greet = "Hello";
    const greet2 = "Hiiii";
  return (
    <div>
        <GreetContext.Provider value={greet}>
        <Greet2Context.Provider value={greet2}>
        <ContextB/>
        </Greet2Context.Provider>
        </GreetContext.Provider>
      
    </div>
  )
}

export default ContextA;
export {GreetContext, Greet2Context};
