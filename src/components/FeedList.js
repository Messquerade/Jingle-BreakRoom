import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function FeedList(props) {
  return(
    <React.Fragment>
      {props.postList.map((post, index) =>
      <Post 
        author={post.author}
        message={post.message}
        date={post.date}
        upVotes={post.upVotes}
        downVotes={post.downVotes}
        profImg={post.profImg}
        id={post.id}
        key={index}
      />
      )}
    </React.Fragment>
  );
}

FeedList.propTypes = {
  postList: PropTypes.array
}

export default FeedList;