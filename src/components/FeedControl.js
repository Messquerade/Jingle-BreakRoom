import React from 'react';
import FeedList from './FeedList';
import NewPost from './NewPost';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PostDetail from './PostDetail';

class FeedControl extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedPost: null,
      editing: false,
    }
  };

// Post will have a author, profile image, message, date, number of upvotes, number of downvotes

// feedList needs to be arranged by upvotes -- maybe in the reducer itself sort before the return?
// part of the method on FeedControl?

handleNewPostCreation = (newPost) => {
  const { dispatch } = this.props;
  const { author, message, date, upVotes, downVotes, profImg, id } = newPost;
  const action ={
    type: 'ADD_POST',
    author: author,
    message: message,
    date: date,
    upVotes: upVotes,
    downVotes: downVotes,
    profImg: profImg,
    id: id
  }
  dispatch(action);
}

handleDeletePost = (id) => {
  const { dispatch } = this.props;
  const action = {
    type: 'DELETE_TICKET',
    id: id
  }
  dispatch(action);
}

handleEditClick = () => {
  this.setState({editing: true})
}

handleChangingSelectPost = (id) => {
  const selectedPost = this.props.mainPostList[id];
  this.setState({selectedPost: selectedPost})
}

handleUpVote = (postId) => {
  const { dispatch } = this.props;
  const { author, message, date, upVotes, downVotes, profImg, id } = this.props.mainPostList[postId];
  const action ={
    type: 'ADD_POST',
    author: author,
    message: message,
    date: date,
    upVotes: upVotes + 1,
    downVotes: downVotes,
    profImg: profImg,
    id: id
  }
  dispatch(action);
}
handleDownVote = (postId) => {
  const { dispatch } = this.props;
  const { author, message, date, upVotes, downVotes, profImg, id } = this.props.mainPostList[postId];
  const action ={
    type: 'ADD_POST',
    author: author,
    message: message,
    date: date,
    upVotes: upVotes,
    downVotes: downVotes + 1,
    profImg: profImg,
    id: id
  }
  dispatch(action);
}


render(){
  let currentlyVisibleState = null;

  if (this.state.selectedPost != null)  {
    currentlyVisibleState = <PostDetail 
      post={this.state.selectedPost}
      onClickDelete={this.handleDeletePost}
      onClickEdit={this.handleEditPost}
      />
  } else {
    currentlyVisibleState = <FeedList 
    postList={this.props.mainPostList}
    onUpVote={this.handleUpVote}
    onDownVote={this.handleDownVote}
    />
  }
  return(
    <React.Fragment>
      <NewPost onNewPostCreation={this.handleNewPostCreation}/>
      <hr/>
      {currentlyVisibleState}
    </React.Fragment>
  );
}



} //end of class

FeedControl.propTypes = {
  mainPostList: PropTypes.object
};

const mapStateToProps = state => {

  
    return {
      mainPostList: state
    };
  

};

FeedControl = connect(mapStateToProps)(FeedControl);

export default FeedControl;