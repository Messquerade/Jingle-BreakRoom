import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewPost(props) {

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      profImg: "https://cataas.com/cat?width=100",
      author: event.target.author.value,
      date: event.target.date.value,
      message: event.target.message.value,
      upVotes: 0,
      downVotes: 0,
      id: v4()
    });
  }

  return(
    <>
      <h2>Make a new Post</h2>
      <form onSubmit={handleNewPostFormSubmission}>
        <label for='author'>Author: </label>
        <input
          type='text'
          name='author'
          placeholder='author'
          className='form-control' />
        <br/>
        <label for='date'>Date: </label>
        <input
          type='date'
          name='date'
          placeholder='date'
          className='form-control' />
        <br/>
        <input
          type='textarea'
          name='message'
          placeholder='post message'
          className='form-control' />
        <br/>
        <button className='btn' type='submit'>Post</button>
      </form>
    </>
  );
}

NewPost.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPost;