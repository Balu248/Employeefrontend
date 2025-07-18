import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            backgroundImage: 'url("https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            position: 'relative',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>

          
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.55)',
                zIndex: 0
            }}></div>

            
            <div className="container text-center text-light py-5" style={{ position: 'relative', zIndex: 1 }}>
                <h1 className="display-3 fw-bold text-white text-shadow mb-2">EMPLORA</h1>
                <h4 className="fst-italic mb-3">Empowering Employee Management</h4>
                <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
                    Manage employee data, track leaves, and streamline HR tasks effortlessly with Emplora’s modern interface for admins and users.
                </p>

               <img
  src="https://www.vhv.rs/dpng/d/598-5982089_icon-blue-company-icon-png-transparent-png.png"
  alt="Welcome"
  className="rounded-circle"
  style={{ width: '100px', height: '100px', margin: '30px 0', objectFit: 'cover' }}
/>


                
                <div className="d-flex justify-content-center gap-4 flex-wrap mt-3">
                    <div
                        className="card text-white bg-primary border-0 shadow-lg"
                        style={{ width: '10rem', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                        onClick={() => navigate('/al')}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <h5 className="card-title fw-bold">Admin</h5>
                        </div>
                    </div>

                    <div
                        className="card text-white bg-success border-0 shadow-lg"
                        style={{ width: '10rem', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                        onClick={() => navigate('/ul')}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <h5 className="card-title fw-bold">User</h5>
                        </div>
                    </div>
                </div>

               
                <footer className="mt-5 text-light small">
                    &copy; {new Date().getFullYear()} Emplora. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default Main;
