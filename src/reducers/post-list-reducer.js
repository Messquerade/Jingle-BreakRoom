export default (state = {}, action) => {
  const { author, message, date, upVotes, downVotes, profImg, id } = action;
  switch(action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]:{
          author: author,
          message: message,
          date: date,
          upVotes: upVotes,
          downVotes: downVotes,
          profImg: profImg,
          id: id 
        }
      });
    case 'DELETE_POST':
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
}