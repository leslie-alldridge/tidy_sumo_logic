import React from "react";
import logo from "./logo.svg";
import "./App.css";

function tidyQuery(query) {
  let splitQuery = query.split(/(?=[|])/);
  // let prettyQuery;
  console.log(splitQuery);
  // prettyQuery = splitQuery.split(/(?=[|])/)
  // splitQuery.map(queryLine => prettyQuery = queryLine + '\n')
  // console.log(prettyQuery);
  return splitQuery;
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    pretty: "",
    userQuery: "",
  };

  generate = (e) => {
    e.preventDefault();
    let pretty = this.state.userQuery.split(/(?=[|])/);
    let newQuery = "";
    pretty.map((line) => {
      line += "\n";
      newQuery += line;
    });

    this.setState({
      pretty: newQuery,
    });
  };

  update = (text) => {
    let userQuery = text.target.value;
    this.setState({
      userQuery,
    });
  };

  render() {
    console.log(this.state.pretty);

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h2>Sumo Prettier</h2>
            <form style={{ width: "80vw", marginLeft: "10%" }}>
              <textarea onChange={this.update}>Enter Sumo Query...</textarea>
              <button onClick={this.generate}>Prettier</button>
            </form>
            <br />
            <pre style={{ textAlign: "left", fontSize: "20px" }}>
              {this.state.pretty}
            </pre>
            <button
              style={{ width: "80vw", marginLeft: "10%" }}
              onClick={() => {
                navigator.clipboard.writeText(this.state.pretty);
              }}
            >
              Copy
            </button>
            {this.state.copySuccess}
          </header>
        </div>
      </div>
    );
  }
}

export default App;
