import React, { useEffect, useState } from 'react'
import Adminnav from './Adminnav'
import axios from 'axios'

const Managereq = () => {
  const [leavereq, xleavereq] = useState(
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
        xleavereq(res.data)
      }
    ).catch((err) => {
      console.error("Error fetching leave requests:", err);
    })
  }

  useEffect(() => { fetchData() }, [])

  const updateStatus = (id, status) => {
    axios.put(`http://localhost:4000/leave/${id}/status`, { status })
      .then(() => {
        alert(`Leave ${status}`);
        fetchData();
      })
      .catch((err) => {
        alert("Error updating leave status");
        console.error(err);
      })
  };

  return (
    <div style={{
      backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }}>
      <Adminnav />
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
                      {leavereq.map(
                        (value, index) => {
                          return (

                            <tr>
                              <th scope="row">{value.empname}</th>
                              <td>{value.empid}</td>
                              <td>{value.email}</td>
                              <td>{value.date}</td>
                              <td>{value.days}</td>
                              <td>
                                {value.status === "pending" ? (
                                  <>
                                    <button
                                      className="btn btn-success btn-sm me-2"
                                      onClick={() => updateStatus(value._id, "approved")}
                                    >
                                      Approve
                                    </button>
                                    <button
                                      className="btn btn-danger btn-sm"
                                      onClick={() => updateStatus(value._id, "denied")}
                                    >
                                      Deny
                                    </button>
                                  </>
                                ) : (
                                  <em>No action</em>
                                )}
                              </td>


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

export default Managereq