import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  const {buttonText, formSubmissionHandler} = props;
  return(
    <form onSubmit={formSubmissionHandler}>
    <label for='author'>Author: </label>
    <input
      type='text'
      name='author'
      placeholder='author'
      className='form-control' />
    <br/>
    <label for='date'>Date: </label>
    <input
      type='date'
      name='date'
      placeholder='date'
      className='form-control' />
    <br/>
    <input
      type='textarea'
      name='message'
      placeholder='post message'
      className='form-control' />
    <br/>
    <button className='btn' type='submit'>{buttonText}</button>
  </form>
  )
}

ReusableForm.propTypes = {
formSubmissionHandler: PropTypes.func,
buttonText: PropTypes.string
}

export default ReusableForm;