import postListReducer from "../../reducers/post-list-reducer";

describe('postListReducer', () => {
  
  test('Should return state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
});