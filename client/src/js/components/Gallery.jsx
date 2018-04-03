import React from "react";
import { render } from "react-dom";

class Gallery extends React.Component {
  render() {
    const doggo = require("./../../../assets/images/shocked-doggo.jpg")

    return (
      <div className="gallery">
        <img src={doggo} />
      </div>
    );
  }
}

export default Gallery;
