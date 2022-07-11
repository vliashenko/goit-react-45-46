import React, { useState } from 'react';

const LoginForm = () => {

    const [ login, setLogin ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleChangeLogin = (e) => {
        setLogin(e.currentTarget.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Login
                <input 
                    type="text" 
                    value={login}
                    onChange={handleChangeLogin}                   
                /> 
            </label>

            <label>
            Password
                <input 
                    type="password" 
                    value={password}
                    onChange={handleChangePassword}
                /> 
            </label>

            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;