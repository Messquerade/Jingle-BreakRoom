import * as c from './ActionsTypes'

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});
export const addPost = (post) => {
  const {author, message, date, upVotes, downVotes, profImg, id} = post;
  return {
    type: c.ADD_POST,
    author: author,
    message: message,
    date: date,
    upVotes: upVotes,
    downVotes: downVotes,
    profImg: profImg,
    id: id
  }
}
export const upVote = id => ({
  type: c.UP_VOTE,
  id
});
export const downVote = id => ({
  type: c.DOWN_VOTE,
  id
});