import React from "react";
import ChildCat from "./ChildCat.js";
import Cat1 from "./asstes/1.jpg";
import Cat2 from "./asstes/2.jpg";
class Parent extends React.Component {
  render() {
    return (
      <div>
        <h1>Parent</h1>
        <ChildCat name="Franke" imgURL={Cat1} />
        <ChildCat name="Fluffy" imgURL={Cat2} />
      </div>
    );
  }
}
export default Parent;
