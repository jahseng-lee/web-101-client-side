import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  doggoImage(imageName) {
    switch(imageName) {
      case "shocked-doggo.jpg":
         return require("./../../../assets/images/shocked-doggo.jpg");
      case "smart-doggo.jpg":
         return require("./../../../assets/images/smart-doggo.jpg");
      case "spaced-doggo.jpg":
         return require("./../../../assets/images/spaced-doggo.jpg");
      default:
        "";
    }
  }

  render() {
    if(this.doggoImage(this.props.imageName)) {
      let doggo = this.doggoImage(this.props.imageName);

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
