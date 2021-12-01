import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function FeedList(props) {
  return(
    <React.Fragment>
      {Object.values(props.postList).map((post) =>
      <Post 
        author={post.author}
        message={post.message}
        date={post.date}
        upVotes={post.upVotes}
        downVotes={post.downVotes}
        profImg={post.profImg}
        id={post.id}
        key={post.id}
        onUpVote={props.onUpVote}
        onDownVote={props.onDownVote}
        onClickDetail={props.onClickDetail}
      />
      )}
    </React.Fragment>
  );
}

FeedList.propTypes = {
  postList: PropTypes.object,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  onClickDetail: PropTypes.func
}

export default FeedList;