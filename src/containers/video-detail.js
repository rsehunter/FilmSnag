import React, { Component } from "react";
import { connect } from "react-redux";

class VideoDetail extends Component {

  render() {
    if (!this.props.video) {
      return <h2 className="text">Select a video to get started.</h2>;
    }

    let {
      images,
      title,
      durationMinutes,
      durationSeconds } = this.props.video;

    return (
      <div className="detail">
        <div className="detail-img-container tooltip">
          <img src = {images.image[0].src} alt={title}/>
          <img className="button" src = "../youtube-play-button.png" />
        </div>
        <h2>{title}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    video: state.activeVideo
  };
}

export default connect(mapStateToProps)(VideoDetail);
