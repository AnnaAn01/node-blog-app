import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Register = () => {
    const [unputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    })

    return (
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder='username' />
                <input required type="email" placeholder='email' />
                <input required type="password" placeholder='password' />
                <button>Register</button>
                <p>There was an error</p>
                <span>Do you have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Register