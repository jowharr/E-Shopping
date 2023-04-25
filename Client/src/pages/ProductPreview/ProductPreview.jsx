import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../componets/nav-bar/NavBar'
import './ProductPreview.css'

function ProductPreview() {

// <<========= Viewing Part =============>>

  const [state, setState] = useState()
  const { id } = useParams() // The useParams hook returns an object of key/value 
                            // pairs of the dynamic params from the current URL 
                            // that were matched by the <Route path>. Child routes 
                            // inherit all params from their parent routes.

  useEffect(() => {
    axios.get(`http://localhost:8000/product/single-product/${id}`).then((res) => {
      setState(res.data.info)
    })
  }, [])
  console.log("state===>>",state);


// <<========== Add to Cart Part ===============>>



  const addtocart=(e) => {

    console.log("id===>.>>");

    axios.post('http://localhost:8000/cart',state).then((res) => {
      console.log(res)
    })

  }

  const radio = (e) => {
    const {name,value} = e.target
    setState({...state, [name]:value})
    console.log(e.target.value);
    console.log(state);

  }
  
  return (
    <>

      <NavBar />

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container mt-5 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      {" "}
                      <img
                        id="main-image"
                        name="image"
                        src={`/images/upload/${state?.Image}`}
                        width={250}
                      />{" "}
                    </div>
                    <div className="thumbnail text-center">
                      {" "}
                      <img
                        onclick="change_image(this)"
                        src={`/images/upload/${state?.Image}`}
                        width={70}
                      />{" "}
                      <img
                        onclick="change_image(this)"
                        src={`/images/upload/${state?.Image}`}
                        width={70}
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        {" "}
                        <i className="fa fa-long-arrow-left" />{" "}
                        <span className="ml-1">Back</span>{" "}
                      </div>{" "}
                      <a href="/cart">
                      <i className="fa fa-shopping-cart text-muted" />
                      </a>
                    </div>
                    <div className="mt-4 mb-3">
                      {" "}
                      <span className="text-uppercase text-muted brand">{state?.Category}</span>
                      <h5 className="text-uppercase">{state?.Product}</h5>
                      <div className="price d-flex flex-row align-items-center">
                        {" "}
                        <span className="act-price">₹ {state?.Price}</span>
                      </div>
                    </div>
                    <p className="about">
                    {state?.Discription}
                    </p>
                    <form>
                    <div className="sizes mt-5">
                      <h6 className="text-uppercase">Size</h6>{" "}
                      <label className="radio">
                        {" "}
                        <input
                          type="radio"
                          name="size"
                          defaultValue="S"
                          defaultChecked=""
                          onClick={radio}
                          required
                        />{" "}
                        <span>S</span>{" "}
                      </label>{" "}
                      <label className="radio">
                        {" "}
                        <input type="radio" name="size" defaultValue="M" onClick={radio} required />{" "}
                        <span>M</span>{" "}
                      </label>{" "}
                      <label className="radio">
                        {" "}
                        <input type="radio" name="size" defaultValue="L" onClick={radio} required />{" "}
                        <span>L</span>{" "}
                      </label>{" "}
                      <label className="radio">
                        {" "}
                        <input type="radio" name="size" defaultValue="XL" onClick={radio} required/>{" "}
                        <span>XL</span>{" "}
                      </label>{" "}
                      <label className="radio">
                        {" "}
                        <input type="radio" name="size" defaultValue="XXL" onClick={radio} required/>{" "}
                        <span>XXL</span>{" "}
                      </label>
                    </div>
                    <div className="cart mt-4 align-items-center">
                      {" "}
                      <button type='button' onClick={addtocart} className="btn btn-danger text-uppercase mr-2 px-4">
                        Add to cart
                      </button>{" "}
                      <i className="fa fa-heart text-muted" />{" "}
                      <i className="fa fa-share-alt text-muted" />{" "}
                    </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default ProductPreview