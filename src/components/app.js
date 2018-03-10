import React from "react";
import { Component } from "react";

import VideoList from "../containers/video-list";
import VideoDetail from "../containers/video-detail";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      text:'',
    }
  }

  handleChange = (event)=>{
    console.log(event.target.value);
    this.setState({text:event.target.value});
  }

  render() {
    return (
      <div>
        <input className="input" type='text' onChange={this.handleChange} />
        <VideoDetail />
        <VideoList search = {this.state.text}/>
      </div>
    );
  }
}
