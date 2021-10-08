import React from 'react';

const Login = (props) =>
{
    const { email, setEmail, password, setpassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input
                    type="text"
                    aurofocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.targer.value)}
                />
                <p className="errorMsg"> {emailError}</p>
                <label>Password</label>
                <input
                    type="text"
                    required
                    value={password}
                    onChange = {(e) =>setpassword(e.target.value)}
                />
                <p className="errorMsg"> {passwordError}</p>
            </div>
    </section>
    );
};

export default Login;