import React from 'react'
import { Link } from 'react-router-dom'

const Adminnav = () => {
  return (
    <div>
            <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/ah"><b>EMPLORA</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/ah">Home</Link>
                            <Link class="nav-link active" to="/a">Add Employee</Link>
                            <Link class="nav-link active" to="/m">Manage Request</Link>                          
                            <Link class="nav-link active" to="/v">View Employee</Link>
                            <Link class="nav-link" to="/al">Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
  )
}

export default Adminnav