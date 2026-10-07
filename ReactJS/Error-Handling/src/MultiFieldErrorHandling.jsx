import React from 'react'

const MultiFieldErrorHandling = () => {
  return (
    <div>
        <form onSubmit={(e)=> {
          e.preventDefault();
          alert('Form Submit succesfully')
        }}>
          <label>Email: </label>
          <input type="email" name='email' required /><br />

          <label>Password: </label>
          <input type="password" name='password' minLength='8' required /><br />

          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default MultiFieldErrorHandling