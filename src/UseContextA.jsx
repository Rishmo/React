import React, {createContext} from 'react'
import UseContexttB from "./UseContexttB";

const GreetContext = createContext();
// const Greet2Context = createContext();

const UseContextA = () => {

    const greet = "Hello";
    const greet2 = "Hiiii";
  return (
    <div>
        {/* <GreetContext.Provider value={greet}>
        <Greet2Context.Provider value={greet2}>
        <UseContexttB/>
        </Greet2Context.Provider>
        </GreetContext.Provider> */}

        <GreetContext.Provider value={{greet, greet2}}>
        <UseContexttB/>
        </GreetContext.Provider>
    </div>
  )
}

export default UseContextA;
export {GreetContext};
