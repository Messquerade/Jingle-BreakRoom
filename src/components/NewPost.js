import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm'

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
      <ReusableForm 
      formSubmissionHandler={handleNewPostFormSubmission}
      buttonText='Post'
      />
    </>
  );
}

NewPost.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPost;