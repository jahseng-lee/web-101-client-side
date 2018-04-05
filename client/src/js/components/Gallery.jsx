import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  get doggoImage() {
    if (this.props.imageName) {
      return `http://localhost:3001/${this.props.imageName}`
    }
  }

  render() {
    if(this.doggoImage) {
      let doggo = this.doggoImage;

      return (
        <div className="gallery">
          <img src={doggo} />
        </div>
      );
    } else {
      return (
        <div className="gallery" />
      );
    }
  }
}

Gallery.propTypes = {
  imageName: PropTypes.string
};

export default Gallery;
