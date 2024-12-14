// importing react libraries which is important to use react features and library. 
//enabling us to utilize its features such as JSX (JavaScript XML), components, hooks, and other functionality.
import React from 'react'; 

// used in modern React projects to import the ReactDOM client module, which provides methods to render React components into the DOM.
import ReactDOM from 'react-dom/client';

// import App, {Hello as HELLO} from "./App";
// import Use from "./Use";
// import Data from "./Data";
// import Form from "./Form";

// import Appj from "./Appj";

// import Appjx from "./Appjx";

// import UseEffect from "./UseEffect";

// import Fetch from "./Fetch";

// import MultipleReturn from "./MultipleReturn";

// import Memo from "./Memo";

// import UseMemo from"./UseMemo";

// import ContextA from "./ContextA";

// import UseContextA from "./UseContextA";

import UseRefEx from "./UseRefEx";


// ReactDOM.createRoot:
// This method is part of the new React 18 rendering API.
// It creates a "root" container for our React component tree, enabling advanced features like concurrent rendering.

// document.getElementById('root'):
// This retrieves a DOM element with the ID of root.
// This is typically the main container element defined in our HTML file where the React app will be rendered.

const root = ReactDOM.createRoot(document.getElementById('root'));


// root: The root container created using ReactDOM.createRoot.
// element: The React element or component tree that you want to render.
root.render(
  <React.StrictMode>
    {/* <App name= "Moon"/> App is a component and name= "Moon" is a props */}
    {/* <HELLO/>
    <Appj/>
    <Appjx/>
    <Use/>
    <Data/> */}
    {/* <Form/> */}
    {/* <UseEffect/> */}
    {/* <Fetch/> */}
    {/* <MultipleReturn/> */}
    {/* <Memo/> */}
    {/* <UseMemo/> */}
    {/* <ContextA/> */}
   {/* <UseContextA/> */}
   <UseRefEx/>
  </React.StrictMode>
 
);


