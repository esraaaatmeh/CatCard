import React from "react";
import Parent from "./components/Parent.js";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Props and states</h1>
        <Parent />
      </div>
    );
  }
}

export default App;
