import React from 'react';
import FeedList from './FeedList';
import NewPost from './NewPost';
import EditPost from './EditPost';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PostDetail from './PostDetail';
import * as a from '../actions'

class FeedControl extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedPost: null,
      editing: false,
    }
  };


handleNewPostCreation = (newPost) => {
  const { dispatch } = this.props;
  const action = a.addPost(newPost);
  dispatch(action);
}

handleEditPostSubmission = (newPost) => {
  const {dispatch } = this.props;
  const action = a.addPost(newPost);
  dispatch(action);
  this.setState({editing: false, selectedPost: null})
}

handleDeletePost = (id) => {
  const { dispatch } = this.props;
  const action = a.deletePost(id)
  dispatch(action);
  this.setState({selectedPost: null})
}

handleEditClick = () => {
  this.setState({editing: true})
}

handleChangingSelectPost = (id) => {
  const selectedPost = this.props.mainPostList[id];
  this.setState({selectedPost: selectedPost})
}

handleUpVote = (id) => {
  const { dispatch } = this.props;
  const action = a.upVote(id)
  dispatch(action);
}
handleDownVote = (id) => {
  const { dispatch } = this.props;
  const action = a.downVote(id);
  dispatch(action);
}

handleClickReturn = () => {
  this.setState({
    selectedPost: null,
    editing: false
  })
}


render(){
  let currentlyVisibleState = null;
  let newPostVisible = <NewPost onNewPostCreation={this.handleNewPostCreation}/>;

  if(this.state.selectedPost != null && this.state.editing) {
    newPostVisible = null;
    currentlyVisibleState = <EditPost
      post={this.state.selectedPost}
      onEditPost={this.handleEditPostSubmission}
      onReturn={this.handleClickReturn}
      />
  } else if (this.state.selectedPost != null)  {
    currentlyVisibleState = <PostDetail 
      post={this.state.selectedPost}
      onClickDelete={this.handleDeletePost}
      onClickEdit={this.handleEditClick}
      onReturn={this.handleClickReturn}
      />
  } else {
    currentlyVisibleState = <FeedList 
    postList={this.props.mainPostList}
    onUpVote={this.handleUpVote}
    onDownVote={this.handleDownVote}
    onClickDetail={this.handleChangingSelectPost}
    />
  }
  return(
    <React.Fragment>
      {newPostVisible}
      <hr/>
      {currentlyVisibleState}
    </React.Fragment>
  );
}



} //end of class

FeedControl.propTypes = {
  mainPostList: PropTypes.object
};

const sortByVote = (postList) => {
  const postArray = Object.entries(postList);
  const sortedArray = postArray.sort((a,b) => (b[1].upVotes - b[1].downVotes) - (a[1].upVotes - a[1].downVotes));
  return Object.fromEntries(sortedArray)
}

const mapStateToProps = state => {

if (state === undefined){
  return {
    mainPostList: state
  };
  
}else{
  const sortedState = sortByVote(state);
  return {
    mainPostList: sortedState
  };
}

};

FeedControl = connect(mapStateToProps)(FeedControl);

export default FeedControl;