import React, { useEffect, useState } from 'react'
import Usernav from './Usernav'
import axios from 'axios'

const Status = () => {
  const [statusview, xstatusview] = useState(
    [
      {
        status: "",
        empname: "",
        empid: "",
        email: "",
        date: "",
        days: ""

      }
    ]
  )
  const fetchData = () => {
    axios.get("http://localhost:4000/viewleave").then(
      (res) => {
        xstatusview(res.data)
      }
    ).catch((err) => {
      console.error("Error fetching leave requests:", err);
    })
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
                    <h2 class="card-title">Leave Requests</h2>
                    <p class="card-text"></p></div>
                </div><br></br>
                <div className='table-responsive'>
                  <table class="table table-dark table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date for leave</th>
                        <th scope="col">Number of days</th>
                        <th scope="col">Action</th>


                      </tr>
                    </thead>
                    <tbody>
                      {statusview.map(
                        (value, index) => {
                          return (

                            <tr>
                              <th scope="row">{value.empname}</th>
                              <td>{value.empid}</td>
                              <td>{value.email}</td>
                              <td>{value.date}</td>
                              <td>{value.days}</td>
                              <td>{value.status} </td>


                            </tr>



                          )
                        }
                      )}
                    </tbody>


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

export default Status