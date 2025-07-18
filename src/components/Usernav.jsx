import React from 'react'
import { Link } from 'react-router-dom'

const Usernav = () => {
  return (
     <div>
            <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/uh"><b>EMPLORA</b></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/uh">Home</Link>
                            <Link class="nav-link active" to="/rl">Request Leave</Link>
                            <Link class="nav-link active" to="/s">Status</Link>                          
                            <Link class="nav-link active" to="/v">View Employees</Link>
                            <Link class="nav-link" to="/ul">Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
  )
}

export default Usernav