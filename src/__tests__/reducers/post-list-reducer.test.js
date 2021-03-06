import postListReducer from "../../reducers/post-list-reducer";
import * as c from '../../actions/ActionsTypes';

describe('postListReducer', () => {
  let action;
  const postData = {
    author: 'Sally Elf',
    message: 'this is my first post',
    date: 'March',
    upVotes: 0,
    downVotes: 0,
    profImg: 'https://cataas.com/cat?width=100',
    id: '1'
  }
  const currentState = {
    1: {author: 'Sally Elf',
    message: 'this is my first post',
    date: 'March',
    upVotes: 0,
    downVotes: 0,
    profImg: 'https://cataas.com/cat?width=100',
    id: '1'},
    2: {author: 'Bobby Elff',
    message: 'this is the second post',
    date: 'January',
    upVotes: 0,
    downVotes: 0,
    profImg: 'https://cataas.com/cat?width=100',
    id: '2'}
  };
  
  test('Should return state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to postList', () => {
    const { author, message, date, upVotes, downVotes, profImg, id } = postData;
    action ={
      type: c.ADD_POST,
      author: author,
      message: message,
      date: date,
      upVotes: upVotes,
      downVotes: downVotes,
      profImg: profImg,
      id: id
    }

    expect(postListReducer({}, action)).toEqual({
      [id]:{
        author: author,
        message: message,
        date: date,
        upVotes: upVotes,
        downVotes: downVotes,
        profImg: profImg,
        id: id 
      }
    })
  })
  test('Should successfully delete post from postList', () =>{
    action = {
      type: c.DELETE_POST,
      id:1
    }
    expect(postListReducer(currentState, action)).toEqual({
    2: {author: 'Bobby Elff',
    message: 'this is the second post',
    date: 'January',
    upVotes: 0,
    downVotes: 0,
    profImg: 'https://cataas.com/cat?width=100',
    id: '2'}
    });
  });
  test('should successfully increment upVotes on post', () => {
    action = {
      type: c.UP_VOTE,
      id: 1
    }
    expect(postListReducer(currentState, action)).toEqual({
      1: {author: 'Sally Elf',
      message: 'this is my first post',
      date: 'March',
      upVotes: 1,
      downVotes: 0,
      profImg: 'https://cataas.com/cat?width=100',
      id: '1'},
      2: {author: 'Bobby Elff',
      message: 'this is the second post',
      date: 'January',
      upVotes: 0,
      downVotes: 0,
      profImg: 'https://cataas.com/cat?width=100',
      id: '2'}
    });
  });

  test('should successfully increment downVotes on post', () => {
    action = {
      type: c.DOWN_VOTE,
      id: 1
    }
    expect(postListReducer(currentState, action)).toEqual({
      1: {author: 'Sally Elf',
      message: 'this is my first post',
      date: 'March',
      upVotes: 1,
      downVotes: 1,
      profImg: 'https://cataas.com/cat?width=100',
      id: '1'},
      2: {author: 'Bobby Elff',
      message: 'this is the second post',
      date: 'January',
      upVotes: 0,
      downVotes: 0,
      profImg: 'https://cataas.com/cat?width=100',
      id: '2'}
    });
  });
});