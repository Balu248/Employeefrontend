import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Adminlogin = () => {
    const navigate = useNavigate()
    const [login, changeLogin] = useState({ username: "", password: "" })

    const inputHandler = (e) => {
        changeLogin({ ...login, [e.target.name]: e.target.value })
    }

    const readValues = (e) => {
        e.preventDefault(); 
        if (login.username === "admin" && login.password === "12345") {
            navigate('/ah')
        } else {
            alert("Invalid admin credentials")
        }
    }

    return (
        <div style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg")',
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
                                    src="data:image/png;base64,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"
                                    alt="Admin Icon"
                                    style={{ width: '70px' }}
                                />
                                <h4 className="mt-2 fw-bold text-primary">Admin Login</h4>
                            </div>

                            <form onSubmit={readValues}>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        placeholder="Enter admin username"
                                        value={login.username}
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
                                        placeholder="Enter admin password"
                                        value={login.password}
                                        onChange={inputHandler}
                                        required
                                    />
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary fw-bold">Login</button>
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

export default Adminlogin
