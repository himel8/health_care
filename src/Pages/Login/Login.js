import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle, signInUsingGithub, handleSignIn, emailChange, passwordChange, error} = useAuth()
    return (
        <div className='custom-login-bg py-5'>
            <div className='mx-auto custom-width'>
            <h1 className='custom-login-header'>My Hospital</h1>
            <form onSubmit={handleSignIn} >
            <div className='bg-light p-5 d-flex flex-column justify-content-center'>
                <h3 className='mb-3'>Sign in</h3>
                <div>
                    <button onClick={signInUsingGoogle} className='btn btn-primary me-3 px-5'> <i class="fab fa-google me-2"></i>Google</button>
                    <button onClick={signInUsingGithub} className='btn btn-primary px-5'><i class="fab fa-github me-2"></i>Github</button>
                </div>
                
                <div class="input-group my-3">
                    <span class="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input onBlur={emailChange} type="text" class="form-control" placeholder="Username or Email" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group my-3">
                    <span class="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input onBlur={passwordChange} type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <p className='text-primary text-end'><small>Forgot your password?</small></p>
                <p className='text-danger text-start'>{error}</p>
                <button  className='btn btn-primary me-3'>Sign in</button>
            </div>
            </form>
            <p className='text-light custom-ancor mb-5'>Registering to this website, you accept our <Link to='/terms'>Terms of use</Link>  and our <Link to='/privacy'>Privacy policy</Link></p>
            </div>
        </div>
    );
};

export default Login;