import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
class ChildCat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numofpets: 0,
    };
  }
  incrementofpets = () => {
    this.setState({ numofpets: this.state.numofpets + 1 });
  };
  render() {
    return (
      <div>
        {/*         <h1>Hi from cat component</h1>
        <h3>Name : {this.props.name}</h3>
        <img title={this.props.name} src={this.props.imgURL}></img>
        <p>Number of pets : 0</p>
        <button>go some where</button> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.imgURL}
            onClick={this.incrementofpets}
          />
          <Card.Body>
            <Card.Title> {this.props.name}</Card.Title>
            <Card.Text>Number of pets : {this.state.numofpets}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default ChildCat;
