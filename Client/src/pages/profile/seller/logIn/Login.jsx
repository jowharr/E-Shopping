import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../../../componets/nav-bar/NavBar'
import './Login.css'

function Login() {

  const [state, setState] = useState()
  const Navigate = useNavigate()

  const handleInputChanges = (e) => {
    const { value, name } = e.target
    setState({ ...state, [name]: value })
  }

  const  loginSubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:8000/login-seller", state).then((res) => {
      if(res.data.success === true){

        localStorage.setItem('token', JSON.stringify(res.data.tok))
        localStorage.setItem('id', JSON.stringify(res.data.login_id))

        Navigate('/upload-item')
        console.log(res);
      
      }
      console.log("res==>>",res);
    }).catch((error)=>{
      // const incorrectPass = "Password Incorrect"
      alert(error.response.data.message);
    })
  }

  return (
    <>

      <NavBar />
      <br />
      <br />
      <br />

      <section className="vh-100">
        <div className="container-fluid h-custom ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={loginSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-google" />
                  </button>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-twitter" />
                  </button>

                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                {/* Email input */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="email"
                      id="form3Example3c"
                      className="form-control"
                      name='username'
                      onChange={handleInputChanges}
                    />
                    <label className="form-label" htmlFor="form3Example3c">
                      Your Email
                    </label>
                  </div>
                </div>
                {/* Password input */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock fa-lg me-3 fa-fw" />
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="password"
                      id="form3Example4c"
                      className="form-control"
                      name='password'
                      onChange={handleInputChanges}
                    />
                    <label className="form-label" htmlFor="form3Example4c">
                      Password
                      
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="/seller-sign-up" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>


    </>
  )
}

export default Login