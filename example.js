
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myInput: "",
    };
    this.BoundInput = bindTwoWay.call(this, "input", "myInput");
  }
  render() {
    const { BoundInput } = this;
    return (
      <div className="App">
        <BoundInput style={{ marginRight: "10px" }} placeholder="Your name" />
        <span onClick={() => this.setState({ myInput: "" })}>clear</span>
      </div>
    );
  }
}
