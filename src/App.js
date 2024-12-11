import './App.css'

// Define a functional component named "App"
function App(props) { // here props work as a property
    console.log(props);
    let a=2; 
    // The component returns JSX to render the UI
    return (
        <div className="hello" >
            {/* Fragment: Allows grouping of elements without adding an extra DOM node */}
            <h1>Hello: {props.name} </h1>  {/* This renders a heading with the text "Hello" */}
            <p style={{color: 'white'}} >Moon{ a+2000}</p>     {/* This renders a paragraph with the text "Moon" */}
        </div>
    );
}

function  Hello() {
  return (
    <div>
      <h1>HELLO!!!</h1>
    </div>
  )
}

// Export the App component so it can be imported and used in other files
export default App;
export{Hello};
