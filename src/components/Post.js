import React from 'react';
import PropTypes from 'prop-types'

function Post(props) {
  const imageStyle = {
    width: '100px'
  }

  function handleUpVote() {
    return props.onUpVote(props.id);
  }

  function handleChangeDetail() {
    return props.onClickDetail(props.id);
  }

  function handleDownVote() {
    return props.onDownVote(props.id);
  }

  return(
    <div className='card' onClick={() => handleChangeDetail()}>
      <img src={props.profImg} alt='profile Img' style={imageStyle}/>
      <h1>{props.author}</h1>
      <p>{props.date}</p>
      <hr/>
      <p>{props.message}</p>
      <p>up votes:{props.upVotes} down votes: {props.downVotes}</p>
      <button onClick={()=> handleUpVote()} className='btn'>⬆️</button>
      <button onClick={()=> handleDownVote()} className='btn'>⬇️</button>
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
  id: PropTypes.string,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  onClickDetail: PropTypes.func
};

export default Post;