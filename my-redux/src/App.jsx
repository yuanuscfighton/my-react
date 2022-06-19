import React from "react";
import Count from "./containers/Count";
import Person from "./containers/Person";

class App extends React.Component {
  render() {
    return (
      <div>
        <Count/>
        <hr/>
        <Person/>
      </div>
    );
  }
}

export default App;