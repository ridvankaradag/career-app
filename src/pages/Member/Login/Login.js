import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(username === 'elif' && password === '1'){
            window.location.replace(window.location.origin + '/dashboard');
        }else{
            alert('Error, please try again');
        }
    }

    return (
        <div className="">
            <div className="container">
                <div id="login" className="login">
                    <div className="login-icon-field">Login</div>
                    <form onSubmit={onSubmit}>
                        <div className="login-form">
                            <div className="username-row">
                                <label></label>
                                <input 
                                    type="text" 
                                    name="username" 
                                    placeholder="Username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)} required
                                />
                            </div>
                            <div className="username-row">
                                <label></label>
                                <input 
                                    type="text" 
                                    name="password" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} required
                                />
                            </div>
                        </div>
                        <div className="call-to-action">
                            <button id="login-button" type="submit">Log In</button>
                            <p>Don't have an account? <span>Sign Up</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;