import './AuthPage.css';
import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <>
        <main className='AuthPage'>
            <div>
            <h4 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 
            <div className='auth-aside'>
            <div className='logo'>ST DRUM SH<i className="fa-light fa-drum" id='logo-icon'></i>P</div>
            <h2>Don't have an account yet?</h2>
            <div className='signup-btn grow'>SIGN UP</div>
            </div>
            : 
            <div>
            <div className='auth-aside'>
            <div className='logo'>ST DRUM SH<i className="fa-light fa-drum" id='logo-icon'></i>P</div>
            <h2 className='auth-message-1'>Already have an account?</h2>
            <div className='login-btn grow'>LOG IN</div>
            </div>
            </div>
            }</h4>
            </div>
            {showLogin ?  
            <div>
            <h4 className='auth-message-2'>Please Log In</h4>
            <LoginForm setUser={setUser} /> 
            </div>
            : 
            <div>
            <h4 className='auth-message-2'>Please sign in to begin shopping</h4>
            <SignUpForm setUser={setUser} />
            </div>
            }
        </main>
        </>
    )
}

export default AuthPage;