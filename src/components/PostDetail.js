import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props){
  const { post, onClickDelete, onClickEdit } = props;
  return(
    <div class='card'>
      <img src={post.profImg} alt='profile Img' />
      <h1>{post.author}</h1>
      <p>{post.date}</p>
      <hr/>
      <p>{post.message}</p>
      <p>up votes:{post.upVotes} down votes: {post.downVotes}</p>
      <button onClick={()=> onClickDelete(post.id)}>Delete</button>
      <button onClick={()=> onClickEdit()}>Edit</button>
    </div>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func
}

export default PostDetail;