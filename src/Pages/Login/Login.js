import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle, signInUsingGithub, handleSignIn, emailChange, passwordChange, error} = useAuth();

    return (
        <div className='custom-login-bg py-5 row'>
            <div className='mx-auto custom-width'>
                {/* title */}
            <h1 className='custom-login-header'>Health Care</h1>
            <form onSubmit={handleSignIn} >
            <div className='bg-light p-5 d-flex flex-column justify-content-center'>
                <h3 className='mb-3'>Sign in</h3>
                <div>
                    {/* google sign In */}
                    <button onClick={signInUsingGoogle} className='btn btn-primary ms-3 me-3 px-5 mb-3'> <i className="fab fa-google me-2"></i>Google</button>
                    {/* github sign In */}
                    <button onClick={signInUsingGithub} className='btn btn-primary mb-3 px-5'><i className="fab fa-github me-2"></i>Github</button>
                </div>
                {/* email box input */}
                <div className="input-group my-3">
                    <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input onBlur={emailChange} type="text" className="form-control" placeholder="Username or Email" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                {/* password box input */}
                <div className="input-group my-3">
                    <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input onBlur={passwordChange} type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <p className='text-primary text-end'><small>Forgot your password?</small></p>
                <p className='text-danger text-start'>{error}</p>
                {/* sign in button  */}
                <button  className='btn btn-primary me-3'>Sign in</button>
            </div>
            </form>
            {/* trams & conditions  */}
            <p className='text-light custom-ancor mb-5'>Registering to this website, you accept our <Link to='/terms'>Terms of use</Link>  and our <Link to='/privacy'>Privacy policy</Link></p>
            </div>
        </div>
    );
};

export default Login;