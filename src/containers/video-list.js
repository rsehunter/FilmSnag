import React, { Component } from "react";
import { connect } from "react-redux";
import { selectVideo,fetchList } from "../actions/index";
import VideoTile  from './video-tile';

class VideoList extends Component {

  componentDidMount(){
      // var xhttp = new XMLHttpRequest();
      // var self = this;
      // xhttp.onreadystatechange = function(e){
      //   if (xhttp.readyState === 4 && xhttp.status === 200){
      //     self.props.fetchList( JSON.parse(this.response));
      //     }
      //   }
      // xhttp.open("get", "http://www.snagfilms.com/apis/films.json?limit=10", true);
      // xhttp.send();
      this.props.fetchList();
    }

  renderList() {
    if(this.props.posts.length===0) {
      return (<div>Loading...</div>);
    }else{
      var result;
      if(this.props.search.length===0){
        result = this.props.posts[0].films.film
      }else{
        result = this.props.posts[0].films.film.filter( video =>
          video.title.toLowerCase().indexOf(this.props.search.toLowerCase())>-1
      )}
      return result.map(video => {
        return (
          <li className="tile"
            key={video.id}
            onClick={() => this.props.selectVideo(video)}
          >
            <VideoTile video={video} />

          </li>
        );
      });
      }
    }

  render() {
    return (
      <ul className="list">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateToProps, { selectVideo,fetchList})(VideoList);
