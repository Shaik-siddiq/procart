import React, { useState } from 'react'
import { Link } from 'react-router-dom';
let Login = () => {
    let [user, setUser] = useState({ email: '', password: '' });
    let inputHandler = (event) => {
        setUser({ ...user, [event.target.name]: [event.target.value] })
    }
    let submitHandler = (event) =>{
        event.preventDefault()
        console.log(user, 'Testing')
    }
    return (
        <div>
            <section>
                <div className='container mt-4'>
                    <div className='row'>
                        <div className='col md-5'>
                            <div className='card'>
                                <div className='card-header'></div>
                                <div className='card-body'>
                                    <form onSubmit={submitHandler}>
                                        <div className='form-group'>
                                            <input className='form-control'
                                                type='text'
                                                placeholder='Email/UserName'
                                                name='email'
                                                value={user.email}
                                                onChange={inputHandler}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input className='form-control'
                                                type='Password'
                                                placeholder='Password'
                                                name='password'
                                                value={user.password}
                                                onChange={inputHandler}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input className='form-control btn btn-success'
                                                type='submit'
                                                value='login'
                                            />
                                        </div>
                                    </form>
                                    <Link to='/forgetPassword'>forgetPassword</Link>
                                    <Link to='/Registration'>Registration</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Login