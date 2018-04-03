import React from "react";
import { render } from "react-dom";

import Canvas from "./components/Canvas";
import Gallery from "./components/Gallery";

import "./../app.scss"

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Canvas />
        <Gallery />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
