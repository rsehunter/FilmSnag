export default function(state = [],action){
  switch(action.type){
    case "FETCH_LIST":
      return [...state,action.payload];
    default:
      return state;
  }
}
