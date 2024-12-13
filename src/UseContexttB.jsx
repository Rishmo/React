// import React from 'react';
// import { GreetContext, Greet2Context } from './UseContextA';

// const UseContexttB = () => {
//   return (
//     <GreetContext.Consumer>
//         {(val) =>{
//             return (
//                 <Greet2Context.Consumer>
//                     {
//                         (val2) =>{
//                             return <h1>Greet: {val} {val2}</h1>
//                         }
//                     }
//                 </Greet2Context.Consumer>
//             ) 
//         }
//     }
//     </GreetContext.Consumer>
//   )
// }

// export default UseContexttB;



import React, {useContext} from 'react'
import { GreetContext } from './UseContextA';

const UseContexttB = () => {
    
    const useCon = useContext(GreetContext);
    // const useCon2 = useContext(Greet2Context);

  return (
    <h1>Greet: {useCon.greet} {useCon.greet2}</h1>
  )
}

export default UseContexttB;
