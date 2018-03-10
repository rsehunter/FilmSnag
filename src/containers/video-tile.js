import React, { Component } from 'react';

export default class VideoTile extends Component {
  render() {
    let {
      images,
      title,
      permaLink,
      durationMinutes,
      durationSeconds } = this.props.video;

    return(
      <div className="video">
        <div className="img-container">
        <img src = {images.image[0].src} alt={title}/>
          <div className='duration'>
            <span>{durationMinutes<10? '0'+durationMinutes: durationMinutes}:</span>
            <span>{durationSeconds<10? '0'+durationSeconds: durationSeconds}</span>
          </div>
        </div>
        <div className="img-title">{title}</div>
      </div>
    );
  }
}
