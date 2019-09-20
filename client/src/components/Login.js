import React, {useState} from "react";
import axios from "axios";

const Login = (props) => {

const [creds, setCreds] = useState({username: '', password: ''})

const handleChange = e => {
  e.preventDefault()
  setCreds({...creds, [e.target.name]: e.target.value})
}

const handleSubmit = e => {
  e.preventDefault()
  axios.post('http://localhost:5000/api/login', creds)
  .then(res => {
    localStorage.setItem('token', res.data.payload)
    props.history.push('/bubblesPage')
  })
  .catch(err => console.log(err.response))
}
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' placeholder='username' onChange={handleChange} />
        <input type='password' name='password'  placeholder='password' onChange={handleChange} />
        <button type='submit'>Log In</button>
      </form>
    </>
  );
};

export default Login;
