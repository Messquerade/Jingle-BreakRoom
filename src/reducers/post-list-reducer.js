import * as c from '../actions/ActionsTypes';

export default (state = {}, action) => {
  const { author, message, date, upVotes, downVotes, profImg, id } = action;
  switch(action.type) {
    case c.ADD_POST:
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
    case c.DELETE_POST:
      let newState = {...state};
      delete newState[id];
      return newState;
    case c.UP_VOTE:
      let upState = {...state};
      upState[id].upVotes += 1;
      return upState;
    case c.DOWN_VOTE:
      let downState = {...state};
      downState[id].downVotes += 1;
      return downState;
    default:
      return state;
  }
}