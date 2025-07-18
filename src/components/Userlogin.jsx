import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Userlogin = () => {
    const navigate = useNavigate()
    const [ulogin, setLogin] = useState({ username: "", password: "" })

    const inputHandler = (e) => {
        setLogin({ ...ulogin, [e.target.name]: e.target.value })
    }

    const readValues = (e) => {
        e.preventDefault()
        if (ulogin.username === "user" && ulogin.password === "12345") {
            navigate('/uh')
        } else {
            alert("Invalid user credentials")
        }
    }

    return (
        <div style={{
            backgroundImage: 'url("https://wallpapers.com/images/hd/light-color-pink-and-blue-background-8zrww1yggwb8mbh3.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            position: 'relative'
        }}>
            
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="col-md-6 col-lg-4">
                        <div className="card p-4 shadow-lg border-0">
                            <div className="text-center mb-3">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                                    alt="User Icon"
                                    style={{ width: '70px' }}
                                />
                                <h4 className="mt-2 fw-bold text-success">User Login</h4>
                            </div>

                            <form onSubmit={readValues}>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        placeholder="Enter username"
                                        value={ulogin.username}
                                        onChange={inputHandler}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter password"
                                        value={ulogin.password}
                                        onChange={inputHandler}
                                        required
                                    />
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-success fw-bold">Login</button>
                                </div>
                            </form>

                            <div className="mt-3 text-center">
                                <Link to="/" className="text-decoration-none">
                                    <u>&larr; Back to Home</u>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userlogin
