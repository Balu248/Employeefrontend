import React, { useState } from 'react'
import Usernav from './Usernav'
import axios from 'axios'

const Request = () => {
  const [linput, xlinput] = useState(
    {
      empname: "",
      empid: "",
      email: "",
      date: "",
      days: ""
    }

  )
  const inputhandler = (event) => {
    xlinput({ ...linput, [event.target.name]: event.target.value })
  }
  const readvalues = () => {
    console.log(linput)
    axios.post("http://localhost:4000/leaverequest", linput).then(
      (res) => {
        alert("Request Sent")
      }
    ).catch()
  }
  return (
    <div style={{
      backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }}>

      <Usernav />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3 ">

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Employee Name</label>
                <input type="text" className="form-control" name='empname' value={linput.empname} onChange={inputhandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Employee ID</label>
                <input type="number" name="empid" id="" className="form-control" value={linput.empid} onChange={inputhandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" name="email" id="" className="form-control" value={linput.email} onChange={inputhandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Date of leave</label>
                <input type="date" name="date" id="" className="form-control" value={linput.date} onChange={inputhandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Number of days</label>
                <input type="number" className="form-control" name='days' value={linput.days} onChange={inputhandler} />

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button className="btn btn-success" onClick={readvalues}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request