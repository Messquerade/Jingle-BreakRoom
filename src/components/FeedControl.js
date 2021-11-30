import React from 'react';
import FeedList from './FeedList';
import NewPost from './NewPost';

class FeedControl extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      mainPostList: [{
        author: 'Sally Elf',
        message: 'this is my first post',
        date: 'March',
        upVotes: 0,
        downVotes: 0,
        profImg: 'https://cataas.com/cat?width=100'
      }],
      selectedPost: null,
      editing: false,
    }
  };

// Post will have a author, profile image, message, date, number of upvotes, number of downvotes

// feedList needs to be arranged by upvotes -- maybe in the reducer itself sort before the return?
// part of the method on FeedControl?

handleNewPostCreation = (newPost) => {
  const newPostList = this.state.mainPostList.concat(newPost);
  this.setState({
    mainPostList: newPostList
  });
}

render(){
  return(
    <React.Fragment>
      <NewPost onNewPostCreation={this.handleNewPostCreation}/>
      <FeedList postList={this.state.mainPostList}/>
    </React.Fragment>
  );
}



} //end of class

export default FeedControl;