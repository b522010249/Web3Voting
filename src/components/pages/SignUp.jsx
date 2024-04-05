import React, { useState } from 'react';
import './SignUp.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/padlock.png';
import id_icon from '../Assets/id card.png';

const SignUp = () => {
    const [action, setAction] = useState('Log in');
    const [idNumber, setIdNumber] = useState('');

    /*const handleSubmit = () => {
        console.log('Form submitted');
    };*/

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === 'Sign Up' && (
                    <div className='input'>
                        <img src={email_icon} alt='' />
                        <input type='email' placeholder='Your Email' />
                    </div>
                )}

                {action === 'Sign Up' && (
                    <div className='input'>
                        <img src={id_icon} alt='' />
                        <input
                            type='text'
                            placeholder='ID Number'
                            value={idNumber}
                            onChange={(e) => setIdNumber(e.target.value)}
                        />
                    </div>
                )}

                <div className='input'>
                    <img src={user_icon} alt='' />
                    <input type='text' placeholder='Student ID' />
                </div>

                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input type='password' placeholder='Password' />
                </div>
            </div>
            {action === 'Log in' && (
                <div className='forgot-password'>
                    Forgot Password? <span>Click Here!</span>
                </div>
            )}
            <div className='submit-container'>
                <div
                    className={action === 'Log in' ? 'submit gray' : 'submit'}
                    onClick={() => setAction('Sign Up')}
                >
                    Sign Up
                </div>
                <div
                    className={action === 'Sign Up' ? 'submit gray' : 'submit'}
                    onClick={() => setAction('Log in')}
                >
                    Log in
                </div>
            </div>
            {/*<div className='submit' onClick={handleSubmit}>
                Submit
            </div>*/}
        </div>
    );
};

export default SignUp;
