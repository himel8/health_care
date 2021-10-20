import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {handleRegister, emailChange, passwordChange, error, nameChange} = useAuth();
    return (
        <div className='custom-login-bg py-5'>
            <div className='mx-auto custom-width'>
            <h1 className='custom-login-header'>Health Care</h1>
            <form onSubmit={handleRegister} className='bg-light p-5 pt-3 d-flex flex-column justify-content-center mb-5 mt-5'>
                <h3 className='my-4'>Sign Up</h3>
                
                <div className="input-group my-2 mt-3">
                    <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input onBlur={nameChange} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group my-2">
                    <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input onBlur={emailChange}  type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" required/>
                </div>
                <div className="input-group my-2 mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input onBlur={passwordChange} type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" required/>
                </div>
                <p className='text-danger text-start'>{error}</p>
                <button className='btn btn-primary me-3 fw-bold py-2'>Sign Up</button>
            </form>
            </div>
        </div>
    );
};

export default Register;