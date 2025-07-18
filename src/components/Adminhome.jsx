import React from 'react'

import Adminnav from './Adminnav'

const Adminhome = () => {
    return (
        <div style={{
            position: 'relative',
            backgroundImage: 'url("https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWRtaW58ZW58MHx8MHx8fDA%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
        }}>


            <Adminnav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
                                <div
                                    className="carousel-caption d-none d-md-block"
                                    style={{
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        borderRadius: "8px",
                                        padding: "12px 20px",
                                        maxWidth: "90%",
                                        margin: "0 auto",
                                        boxShadow: "0 3px 7px rgba(0,0,0,0.25)",
                                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                        color: "#fff",
                                    }}
                                >
                                    <h5 style={{ fontWeight: "700", fontSize: "1.5rem", marginBottom: "8px" }}>
                                        Glad to have you here Boss!
                                    </h5>
                                    <p style={{ fontSize: "1rem", lineHeight: "1.3" }}>
                                        Your dashboard to manage Employees.
                                    </p>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExampleCaptions" class="carousel slide">
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        minHeight: "100vh",

                                    }}>
                                        <div id="carouselExampleCaptions" className="carousel slide" style={{ maxWidth: "800px", width: "100%" }}>
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29tcGFueXxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..." />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5>Welcome, Admin</h5>
                                                        <p>Manage employees, review leave requests, and keep your organization running smoothly with Emplora.</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29tcGFueXxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..." />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5>"Empowered teams build powerful futures."</h5>
                                                        <p>At Emplora, your voice, your leave, and your time matter.</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvbXBhbnl8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="..." />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5>"Great management starts with clarity."</h5>
                                                        <p>Emplora helps you lead with confidence and insight.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Adminhome