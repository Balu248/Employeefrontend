import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Usernav from './Usernav'

const Userviewemployee = () => {
 const [empview, xempview] = useState(
        []
    )
    const fetchData = () => {
        axios.get("http://localhost:4000/viewemployee").then(
            (res) => {
                xempview(res.data)
            }
        ).catch()
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div style={{
            backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
        }}>
            <Usernav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           
                            <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                                 <div class="card text-center bg-warning">
                            <div class="card-body">
                                <h2 class="card-title">EMPLOYEE DETAILS</h2>
                                <p class="card-text"></p></div>
                        </div><br></br>
                         <div className='table-responsive'>
                                <table class="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Employee ID</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Salary</th>
                                        </tr>
                                    </thead>
                                {empview.map(
                                    (value,index)=>{
                                        return(
                                            <tbody>
                                        <tr>
                                            <th scope="row">{value.empname}</th>
                                            <td>{value.age}</td>
                                            <td>{value.empid}</td>
                                            <td>{value.email}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.role}</td>
                                            
                                            
                                        </tr>
                                       
                                    </tbody>
                                        )
                                    }
                                )}
                                    
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userviewemployee