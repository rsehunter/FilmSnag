import axios from 'axios';
export function selectVideo(video) {
  return {
    type: "VIDEO_SELECTED",
    payload: video
  };
}


export function fetchList(){
	return function(dispatch){
    axios.get('http://www.snagfilms.com/apis/films.json?limit=20')
      .then(function(res){
        dispatch({type:"FETCH_LIST", payload: res.data})
      });
  }
}
``
