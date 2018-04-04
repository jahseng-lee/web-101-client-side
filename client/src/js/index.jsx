import React from "react";
import { render } from "react-dom";

import Canvas from "./components/Canvas";
import Gallery from "./components/Gallery";

import "./../app.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imageName: ""
    };
  }

  handleClick() {
    fetch("http://localhost:3000/good_boys/random")
      .then(results => results.json())
      .then(data => {
        let imageName = data.img_url

        this.setState({imageName: imageName});
      });
  }

  render() {
    return (
      <div className="page">
        <Canvas
          handleClick={this.handleClick.bind(this)}
        />
        <Gallery imageName={this.state.imageName}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
