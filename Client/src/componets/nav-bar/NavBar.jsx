import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './StyleNav.css'

function NavBar() {

  
  const [state, setState] = useState()

  useEffect(()=> {
      axios.get("http://localhost:8000/cart/products").then((res)=> {
        setState(res.data.data.length)
      }).catch((err)=>{
        console.log(err)
      })
    },[])

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
        <div className='container'>
          <a href="/" className='navbar-brand d-flex justify-content-between align-items-center order-lg-0'>
            <img src="/images/logo-4.png" alt="site-icon" className='' />
            <span className='text-uppercase fw-lighter ms-2'>Menscart</span>

          </a>

          <div className='order-lg-2'>
          <button type='button' className='btn position-relative'>
              <i className='fa-solid fa-user'></i>
            </button>
            <button type='button' className='btn position-relative'>
              <i className='fa fa-heart'></i>
              <span className='position-absolute top-0 start-100 translate-middle badge bg-primary'>1</span>
            </button>
            <a href="/cart">
            <button type='button' className='btn position-relative'>
              <i className='fa fa-shopping-cart'></i>
              <span className='position-absolute top-0 start-100 translate-middle badge bg-primary'>{state}</span>
            </button>
            </a>

          </div>


          <button className='navbar-toggler border-0' type='button' data-bs-toggle='collapse' data-bs-target='#navMenu'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse order-lg-1' id='navMenu'>
            <ul className='navbar-nav max-auto text-center'>
              <li className='nav-item px-2 py-2'>
                <a className='nav-link text-uppercase text-dark' href="/">home</a>
              </li>
              <li className='nav-item px-2 py-2'>
                <a className='nav-link text-uppercase text-dark' href="#collection">collection</a>
              </li>
              <li className='nav-item px-2 py-2'>
                <a className='nav-link text-uppercase text-dark' href="#specials">specials</a>
              </li>
              <li className='nav-item px-2 py-2'>
                <a className='nav-link text-uppercase text-dark' href="/seller-log-in">seller</a>
              </li>
              <li className='nav-item px-2 py-2 border-0'>
                <a className='nav-link text-uppercase text-dark' href="#popular">log in</a>
              </li>
            </ul>

          </div>


        </div>
      </nav>

    </>
  )
}

export default NavBar