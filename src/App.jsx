import Starter from "./navigation/Navbar";

/*
This is the main App component where the 
application's structure is defined. It serves 
as the root component that renders the Navbar 
component, which is the main feature of this 
application.
*/

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        margin: "20px",
      }}
    >
      <Starter />
    </div>
  );
}

export default App;
