export const deletePost = id => ({
  type: 'DELETE_POST',
  id
});
export const addPost = (post) => {
  const {author, message, date, upVotes, downVotes, profImg, id} = post;
  return {
    type: 'ADD_POST',
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
  type: 'UP_VOTE',
  id
});
export const downVote = id => ({
  type: 'DOWN_VOTE',
  id
});