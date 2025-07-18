import React from 'react'
import Usernav from './Usernav'

const UserHome = () => {
  return (

    <div
      style={{
        position: "relative",
        backgroundImage:
          'url("https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?cs=srgb&dl=pexels-fauxels-3184357.jpg&fm=jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Usernav />

      <div className="container">
        <div className="row">
          <div className="col-12">

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
                  Glad to have you here!
                </h5>
                <p style={{ fontSize: "1rem", lineHeight: "1.3" }}>
                  Your dashboard to manage your time and leaves.
                </p>
              </div>


            </div>


            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    className="d-block w-100"
                    alt="User Slide 1"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Welcome, User</h5>
                    <p>Apply for leave, check approval status, and stay connected with your team through Emplora.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    className="d-block w-100"
                    alt="User Slide 2"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Your leave requests at your fingertips</h5>
                    <p>Track your leave status and manage your work-life balance effortlessly.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFVzZXJ8ZW58MHx8MHx8fDA%3D"
                    className="d-block w-100"
                    alt="User Slide 3"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Stay productive, stay informed</h5>
                    <p>Keep track of your tasks and stay updated with company announcements.</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default UserHome