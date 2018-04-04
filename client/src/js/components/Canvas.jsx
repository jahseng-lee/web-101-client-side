import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="canvas">
        <div className="canvas-container">
          <h1>WHO'S A GOOD BOY</h1>
          <button onClick={this.props.handleClick}>SHOW ME A GOOD BOY!</button>
        </div>
      </div>
    );
  }
}

Canvas.propTypes = {
  handleClick: PropTypes.func
};

export default Canvas;
