import * as a from '../../actions';
import * as c from '../../actions/ActionsTypes'

describe('jingle break room actions', () => {
  it('deletePost should create DELETE_POST action', () => {
    expect(a.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1
    });
  });
  it('addPost should create ADD_POST action', () => {
    expect(a.addPost({
      author: 'billy',
      message: 'theres no bathrooms',
      date: 'today',
      upVotes: 0,
      downVotes: 0,
      profImg: 'catURL',
      id: 1}))
      .toEqual({
      type: c.ADD_POST,
      author: 'billy',
      message: 'theres no bathrooms',
      date: 'today',
      upVotes: 0,
      downVotes: 0,
      profImg: 'catURL',
      id: 1
      });
  });

  it('upVote should create UP_VOTE action', () => {
    expect(a.upVote(1)).toEqual({
      type: c.UP_VOTE,
      id: 1
    })
  });
  
  it('downVote should create DOWN_VOTE action', () => {
    expect(a.downVote(1)).toEqual({
      type: c.DOWN_VOTE,
      id: 1
    })
  });
});