import axios from 'axios'
import React, { useState } from 'react'
import Adminnav from './Adminnav'

const Addemployee = () => {
     const [input, xinput] = useState(
        {
        empname:"",
        empid:"",
        email:"",
        mobile:"",
        age:"",
        role:"",
        salary:""   
}
    )
    const inputhandler=(event)=>{
        xinput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:4000/addemp",input).then(
            (res)=>{
                alert("Successfully Added")
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
            
            <Adminnav/>
     <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 ">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Employee Name</label>
                                <input type="text" className="form-control" name='empname' value={input.empname} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Employee ID</label>
                                <input type="number" name="empid" id="" className="form-control" value={input.empid} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" name="email" id="" className="form-control" value={input.email} on onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="number" className="form-control" name='age' value={input.age} onChange={inputhandler} />                              
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile Number</label>
                                <input type="number" className="form-control" name='mobile' value={input.mobile} onChange={inputhandler} />                              
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Job Role</label>
                                <input type="text" className="form-control" name='role' value={input.role} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Salary</label>
                                <input type="number" className="form-control" name='salary' value={input.salary} onChange={inputhandler} />                              
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readvalues}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   </div>
  )
}

export default Addemployee