import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hook/useAuth';
import './Login.css'
const Login = () => {
    const {signinWithGoogle ,} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect = location.state?.from || '/home';
    const handleGoogleLogin= () =>{
        signinWithGoogle()
        .then(res=>{
            history.push(redirect)
        })
    }
    return (
        
        <div>
            <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <p class="message">Not registered? <a href="#">Create an account</a></p>
        </form>
        <button className='btn btn-warning' onClick={handleGoogleLogin}>Google Sign In</button>
      </div>
    </div>
            
            
        </div>
    );
};

export default Login;