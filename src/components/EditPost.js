import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditPost(props) {

  const { onEditPost, post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    onEditPost({
      profImg: "https://cataas.com/cat?width=100",
      author: event.target.author.value,
      date: event.target.date.value,
      message: event.target.message.value,
      upVotes: 0,
      downVotes: 0,
      id: post.id
    })
  }

  return(
    <>
    <h2>Edit Post</h2>
    <ReusableForm 
      formSubmissionHandler={handleEditPostFormSubmission}
      buttonText="Edit Post"
    />
    </>
  )
}

EditPost.propTypes = {
  post: PropTypes.object,
  onEditPost:PropTypes.func,
  onReturn: PropTypes.func
}

export default EditPost;