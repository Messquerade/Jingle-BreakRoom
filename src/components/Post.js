import React from 'react';
import PropTypes from 'prop-types'

function Post(props) {
  return(
    <div>
      <img src={props.profImg} alt='profile Img' />
      <h1>{props.author}</h1>
      <p>{props.date}</p>
      <hr/>
      <p>{props.message}</p>
      <p>upvotes:{props.upVotes} downvotes: {props.downVotes}</p>
    </div>
    );
}

Post.propTypes = {
  author: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string,
  upVotes: PropTypes.number,
  downVotes: PropTypes.number,
  profImg: PropTypes.string,
  id: PropTypes.string
};

export default Post;